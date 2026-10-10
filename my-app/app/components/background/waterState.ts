import * as THREE from "three";
import { MAX_RIPPLES, LOG_POINTER } from "./constants";

export type WaterState = {
  positions: Float32Array;
  times: Float32Array;
  strengths: Float32Array;
  writeIndex: number;
  lastSpawn: number;
  lastPointer: { x: number; y: number };
};

export function createWaterState(): WaterState {
  return {
    positions: new Float32Array(MAX_RIPPLES * 2),
    times: new Float32Array(MAX_RIPPLES).fill(-1),
    strengths: new Float32Array(MAX_RIPPLES),
    writeIndex: 0,
    lastSpawn: 0,
    lastPointer: { x: 0.5, y: 0.5 },
  };
}

export function spawnRipple(
  state: WaterState,
  x: number,
  y: number,
  strength: number
) {
  const i = state.writeIndex % MAX_RIPPLES;
  state.positions[i * 2] = x;
  state.positions[i * 2 + 1] = y;
  state.times[i] = 0;
  state.strengths[i] = strength;
  state.writeIndex = (state.writeIndex + 1) % MAX_RIPPLES;
  if (LOG_POINTER) {
    console.log(
      `[Water] ripple spawned: ${x.toFixed(3)} ${y.toFixed(3)} s=${strength.toFixed(2)}`
    );
  }
}

// Helper: convert pointer coords to UV, clamped
export function pointerToUv(
  clientX: number,
  clientY: number,
  rect: DOMRect
) {
  const x = (clientX - rect.left) / rect.width;
  const y = 1 - (clientY - rect.top) / rect.height;
  return {
    x: THREE.MathUtils.clamp(x, 0, 1),
    y: THREE.MathUtils.clamp(y, 0, 1),
  };
}

export function isInsideRect(
  clientX: number,
  clientY: number,
  rect: DOMRect
) {
  return (
    clientX >= rect.left &&
    clientX <= rect.right &&
    clientY >= rect.top &&
    clientY <= rect.bottom
  );
}