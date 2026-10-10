"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { WaterMesh } from "./WaterMesh";
import {
  WaterState,
  createWaterState,
  spawnRipple,
  pointerToUv,
  isInsideRect,
} from "./waterState";

export function WaterPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const waterStateRef = useRef<WaterState>(createWaterState());

  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [failed, setFailed] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Load texture
  useEffect(() => {
    let mounted = true;
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = "/profile.png";
    img.onload = () => {
      if (!mounted) return;
      console.log("[WaterPortrait] texture loaded:", img.width, "x", img.height);
      const tex = new THREE.Texture(img);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.needsUpdate = true;
      setTexture(tex);
    };
    img.onerror = () => {
      console.error("[WaterPortrait] FAILED to load /profile.png");
      if (mounted) setFailed(true);
    };
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (texture) texture.dispose();
    };
  }, [texture]);

  // Global pointer listeners
  useEffect(() => {
    if (reduced || failed || !texture) return;
    const container = containerRef.current;
    if (!container) return;

    const state = waterStateRef.current;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      if (!isInsideRect(e.clientX, e.clientY, rect)) return;

      const { x, y } = pointerToUv(e.clientX, e.clientY, rect);

      const dx = x - state.lastPointer.x;
      const dy = y - state.lastPointer.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      state.lastPointer.x = x;
      state.lastPointer.y = y;

      const now = performance.now();
      if (now - state.lastSpawn < 80) return;
      if (dist < 0.006) return;

      state.lastSpawn = now;
      const strength = THREE.MathUtils.clamp(dist * 50, 0.5, 1.4);
      spawnRipple(state, x, y, strength);
    };

    const onPointerDown = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      if (!isInsideRect(e.clientX, e.clientY, rect)) return;

      const { x, y } = pointerToUv(e.clientX, e.clientY, rect);
      state.lastSpawn = performance.now();
      state.lastPointer.x = x;
      state.lastPointer.y = y;
      spawnRipple(state, x, y, 1.6);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [reduced, failed, texture]);

  // Fallbacks
  if (reduced || failed || !texture) {
    return (
      <div className="relative h-full w-full">
        <Image
          src="/profile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: "center",
            filter: "saturate(1.5) contrast(1.15) brightness(1.02)",
          }}
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <Canvas
        orthographic
        camera={{
          position: [0, 0, 1],
          left: -1,
          right: 1,
          top: 1,
          bottom: -1,
          near: 0.1,
          far: 10,
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
        dpr={isMobile ? 1 : [1, 1.75]}
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
        frameloop="always"
      >
        <WaterMesh texture={texture} waterStateRef={waterStateRef} />
      </Canvas>
    </div>
  );
}