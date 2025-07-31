import { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Geometry } from "ogl";

import './LiquidChrome.css';

interface LiquidChromeProps {
  baseColor?: [number, number, number];
  speed?: number;
  amplitude?: number;
  frequencyX?: number;
  frequencyY?: number;
  interactive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const LiquidChrome: React.FC<LiquidChromeProps> = ({
  baseColor = [0.1, 0.1, 0.1],
  speed = 0.2,
  amplitude = 0.3,
  frequencyX = 3,
  frequencyY = 3,
  interactive = true,
  ...props
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const renderer = new Renderer({ antialias: true });
    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec4 renderImage(vec2 uvCoord) {
          vec2 fragCoord = uvCoord * uResolution.xy;
          vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

          // Optimized iterations with better performance
          for (float i = 1.0; i < 8.0; i++){
              uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
              uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
          }

          // Optimized ripple effect
          vec2 diff = (uvCoord - uMouse);
          float dist = length(diff);
          float falloff = exp(-dist * 15.0);
          float ripple = sin(8.0 * dist - uTime * 1.5) * 0.025;
          uv += (diff / (dist + 0.001)) * ripple * falloff;

          vec3 color = uBaseColor / abs(sin(uTime - uv.y - uv.x));
          return vec4(color, 1.0);
      }

      void main() {
          vec4 col = vec4(0.0);
          // Optimized multi-sampling with fewer samples
      vec4 col = vec4(0.0);
      int samples = 0;
      for (int i = -1; i <= 1; i += 2){
          for (int j = -1; j <= 1; j += 2){
              vec2 offset = vec2(float(i), float(j)) * (0.5 / min(uResolution.x, uResolution.y));
              col += renderImage(vUv + offset);
              samples++;
          }
      }
      gl_FragColor = col / float(samples);
      }
    `;

    // Create geometry and program with proper error handling
    let geometry, program, mesh;

    try {
      // Create manual geometry to ensure proper attributes
      geometry = new Geometry(gl, {
        position: {
          size: 2,
          data: new Float32Array([
            -1, -1,
            3, -1,
            -1, 3
          ])
        },
        uv: {
          size: 2,
          data: new Float32Array([
            0, 0,
            2, 0,
            0, 2
          ])
        }
      });

      program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uResolution: {
            value: new Float32Array([
              gl.canvas.width,
              gl.canvas.height,
              gl.canvas.width / gl.canvas.height,
            ]),
          },
          uBaseColor: { value: new Float32Array(baseColor) },
          uAmplitude: { value: amplitude },
          uFrequencyX: { value: frequencyX },
          uFrequencyY: { value: frequencyY },
          uMouse: { value: new Float32Array([0, 0]) },
        },
      });

      mesh = new Mesh(gl, { geometry, program });
    } catch (error) {
      console.error('Failed to initialize LiquidChrome:', error);
      return;
    }

    function resize() {
      // Balanced resolution for performance and quality
      const scale = window.devicePixelRatio > 1 ? 0.8 : 1;
      renderer.setSize(
        container.offsetWidth * scale,
        container.offsetHeight * scale
      );
      const resUniform = program.uniforms.uResolution.value;
      resUniform[0] = gl.canvas.width;
      resUniform[1] = gl.canvas.height;
      resUniform[2] = gl.canvas.width / gl.canvas.height;
    }
    window.addEventListener("resize", resize);
    resize();

    function handleMouseMove(event) {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      const mouseUniform = program.uniforms.uMouse.value;
      mouseUniform[0] = x;
      mouseUniform[1] = y;
    }

    function handleTouchMove(event) {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width;
        const y = 1 - (touch.clientY - rect.top) / rect.height;
        const mouseUniform = program.uniforms.uMouse.value;
        mouseUniform[0] = x;
        mouseUniform[1] = y;
      }
    }

    if (interactive) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("touchmove", handleTouchMove);
    }

    let animationId;
    function update(t) {
      animationId = requestAnimationFrame(update);
      if (program?.uniforms?.uTime && mesh) {
        program.uniforms.uTime.value = t * 0.001 * speed;
        renderer.render({ scene: mesh });
      }
    }

    if (mesh && program) {
      animationId = requestAnimationFrame(update);
    }

    container.appendChild(gl.canvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      if (interactive) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("touchmove", handleTouchMove);
      }
      if (gl.canvas.parentElement) {
        gl.canvas.parentElement.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

  return (
    <div
      ref={containerRef}
      className="liquidChrome-container"
      {...props}
    />
  );
};

export default LiquidChrome;
