"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { MAX_RIPPLES, DEBUG_WATER, FORCE_TEST_RIPPLE, LOG_POINTER } from "./constants";
import { vertexShader, fragmentShader } from "./shaders";
import { WaterState, spawnRipple } from "./waterState";

export type WaterUniforms = {
  uTexture: { value: THREE.Texture };
  uResolution: { value: THREE.Vector2 };
  uTextureSize: { value: THREE.Vector2 };
  uRipplePos: { value: THREE.Vector2[] };
  uRippleTime: { value: Float32Array };
  uRippleStrength: { value: Float32Array };
  uMouse: { value: THREE.Vector2 };
  uDebug: { value: number };
};

export function WaterMesh({
  texture,
  waterStateRef,
}: {
  texture: THREE.Texture;
  waterStateRef: React.MutableRefObject<WaterState>;
}) {
  const { size } = useThree();

  const uniformsRef = useRef<WaterUniforms>({
    uTexture: { value: texture },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uTextureSize: { value: new THREE.Vector2(1, 1) },
    uRipplePos: {
      value: Array.from({ length: MAX_RIPPLES }, () => new THREE.Vector2(0, 0)),
    },
    uRippleTime: { value: new Float32Array(MAX_RIPPLES).fill(-1) },
    uRippleStrength: { value: new Float32Array(MAX_RIPPLES) },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uDebug: { value: DEBUG_WATER ? 1 : 0 },
  });
  const uniforms = uniformsRef.current;

  useEffect(() => {
    uniforms.uTexture.value = texture;
    const img = texture.image as HTMLImageElement | undefined;
    if (img && img.width && img.height) {
      uniforms.uTextureSize.value.set(img.width, img.height);
    }
  }, [texture, uniforms]);

  useEffect(() => {
    uniforms.uResolution.value.set(size.width, size.height);
  }, [size, uniforms]);

  useFrame((_, delta) => {
    const state = waterStateRef.current;
    const pos = uniforms.uRipplePos.value;
    const times = uniforms.uRippleTime.value;
    const strengths = uniforms.uRippleStrength.value;

    for (let i = 0; i < MAX_RIPPLES; i++) {
      const t = state.times[i];
      if (t < 0) {
        times[i] = -1;
        strengths[i] = 0;
        continue;
      }
      state.times[i] = t + delta;
      if (state.times[i] > 2.2) {
        state.times[i] = -1;
        strengths[i] = 0;
        times[i] = -1;
        continue;
      }
      pos[i].set(state.positions[i * 2], state.positions[i * 2 + 1]);
      times[i] = state.times[i];
      strengths[i] = state.strengths[i];
    }
  });

  useEffect(() => {
    if (!FORCE_TEST_RIPPLE) return;
    const tick = () => {
      spawnRipple(waterStateRef.current, 0.5, 0.5, 1.5);
      if (LOG_POINTER) console.log("[Water] forced ripple");
    };
    tick();
    const id = setInterval(tick, 2500);
    return () => clearInterval(id);
  }, [waterStateRef]);

  return (
    <mesh>
      <planeGeometry args={[2, 2, 1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>
  );
}