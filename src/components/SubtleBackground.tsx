import { useEffect, useRef } from 'react';
import type { FC } from 'react';

export const SubtleBackground: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle moving wave lines
    let t = 0;
    const render = () => {
      t += 0.003;
      ctx.clearRect(0, 0, width, height);

      // Draw 3 subtle floating organic curves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        // Bright lime accent in extremely faint opacity, pure monochrome otherwise
        ctx.strokeStyle = i === 1 
          ? 'rgba(163, 230, 53, 0.08)' 
          : 'rgba(255, 255, 255, 0.035)';

        for (let x = 0; x <= width; x += 30) {
          const y =
            height * (0.3 + i * 0.22) +
            Math.sin(x * 0.002 + t + i * 1.5) * 45 +
            Math.cos(x * 0.001 - t * 0.7) * 30;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-70"
    />
  );
};
