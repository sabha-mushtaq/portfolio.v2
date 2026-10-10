export const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = /* glsl */ `
  precision highp float;

  uniform sampler2D uTexture;
  uniform vec2  uResolution;
  uniform vec2  uTextureSize;

  uniform vec2  uRipplePos[8];
  uniform float uRippleTime[8];
  uniform float uRippleStrength[8];

  uniform vec2  uMouse;
  uniform float uDebug;

  varying vec2 vUv;

  const float LIFETIME = 2.2;

  vec2 coverUv(vec2 uv, vec2 screen, vec2 tex) {
    float screenAspect = screen.x / screen.y;
    float texAspect    = tex.x / tex.y;
    vec2 scale;
    vec2 offset;
    if (screenAspect > texAspect) {
      scale = vec2(1.0, texAspect / screenAspect);
      offset = vec2(0.0, (1.0 - scale.y) * 0.5);
    } else {
      scale = vec2(screenAspect / texAspect, 1.0);
      offset = vec2((1.0 - scale.x) * 0.5, 0.0);
    }
    return uv * scale + offset;
  }

  vec3 rippleAt(int i, vec2 p, float aspect) {
    float t = uRippleTime[i];
    if (t < 0.0 || t > LIFETIME) return vec3(0.0);

    float strength = uRippleStrength[i];
    if (strength <= 0.0) return vec3(0.0);

    vec2 center = vec2(uRipplePos[i].x * aspect, uRipplePos[i].y);
    float age01 = clamp(t / LIFETIME, 0.0, 1.0);
    float radius = age01 * 0.45;

    float d = distance(p, center);

    float ringWidth = 0.04 + age01 * 0.06;
    float ring = exp(-pow((d - radius) / ringWidth, 2.0));

    float wavePhase = (d - radius) * 30.0;
    float waveGrad = cos(wavePhase) * exp(-pow((d - radius) / (ringWidth * 2.5), 2.0));

    float radial   = smoothstep(1.2, 0.0, d);
    float temporal = pow(1.0 - age01, 1.3);

    float amp = (ring * 1.0 + waveGrad * 0.6) * radial * temporal * strength * 0.35;

    vec2 dir = d > 0.0001 ? (p - center) / d : vec2(0.0);
    vec2 tangent = vec2(-dir.y, dir.x);
    float swirl = sin(t * 4.0 + d * 24.0) * 0.15;

    vec2 disp = (dir + tangent * swirl) * amp;
    float hl = ring * temporal * radial * strength * 0.25;
    return vec3(disp, hl);
  }

  void main() {
    if (uDebug > 0.5) {
      gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
      return;
    }

    float aspect = uResolution.x / uResolution.y;
    vec2 p = vec2(vUv.x * aspect, vUv.y);

    vec3 acc = vec3(0.0);
    for (int i = 0; i < 8; i++) {
      acc += rippleAt(i, p, aspect);
    }

    vec2 uv = coverUv(vUv, uResolution, uTextureSize);
    vec2 distortedUv = uv - acc.xy;
    distortedUv = clamp(distortedUv, vec2(0.001), vec2(0.999));

    vec3 color = texture2D(uTexture, distortedUv).rgb;
    color += vec3(acc.z);

    if (uDebug > 0.5) {
      vec2 mouseA = vec2(uMouse.x * aspect, uMouse.y);
      float dm = distance(p, mouseA);
      float marker = smoothstep(0.012, 0.008, dm);
      color += vec3(1.0, 0.3, 0.3) * marker;
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;