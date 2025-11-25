import React, { useEffect } from "react";

const BackgroundAnimation = () => {
  useEffect(() => {
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Create particles
    const particleCount = 10;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle lines
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 191, 165, ${1 - dist / 120})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 191, 165, 0.8)";
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      requestAnimationFrame(draw);
    };

    draw();

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Canvas for particle mesh */}
      <canvas
        id="bg-canvas"
        className="fixed inset-0 w-full h-full -z-10"
      ></canvas>

      {/* Gradient morphing blobs */}
      <span className="absolute w-96 h-96 bg-gradient-to-r from-teal-400 to-teal-200 opacity-30 rounded-full blur-3xl animate-float-slow -top-32 -left-32"></span>
      <span className="absolute w-80 h-80 bg-gradient-to-r from-teal-500 to-teal-300 opacity-25 rounded-full blur-2xl animate-float-slower bottom-20 right-1/4"></span>
      {/* <span className="absolute w-72 h-72 bg-gradient-to-r from-teal-300 to-teal-400 opacity-20 rounded-full blur-3xl animate-float-slow top-1/3 right-1/3"></span> */}
    </>
  );
};

export default BackgroundAnimation;
