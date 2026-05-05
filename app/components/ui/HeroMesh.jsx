"use client";
import { useRef, useEffect } from "react";

export default function HeroMesh() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let mouse = { x: 0.5, y: 0.5 };

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 40 : (navigator.hardwareConcurrency < 4 ? 25 : 70);

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    if (!isMobile) {
      window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX / window.innerWidth;
        mouse.y = e.clientY / window.innerHeight;
      });
    }

    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.3),
      vy: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.3),
      r: 1.5 + Math.random() * 1,
      phase: Math.random() * Math.PI * 2,
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const offsetX = (mouse.x - 0.5) * 40;
      const offsetY = (mouse.y - 0.5) * 40;

      // Lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(201, 145, 10, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x + offsetX, nodes[i].y + offsetY);
            ctx.lineTo(nodes[j].x + offsetX, nodes[j].y + offsetY);
            ctx.stroke();
          }
        }
      }

      // Nodes
      const time = Date.now() * 0.001;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        const pulse = 0.4 + 0.5 * (0.5 + 0.5 * Math.sin(time * 1.5 + n.phase));
        ctx.beginPath();
        ctx.arc(n.x + offsetX, n.y + offsetY, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 145, 10, ${pulse})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[1] pointer-events-none opacity-50"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
