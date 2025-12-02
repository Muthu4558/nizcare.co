import React, { useEffect, useRef } from "react";

const CursorFollower = ({ imageSrc, size = 56, offset = { x: 18, y: 18 } }) => {
  const elRef = useRef(null);

  // Detect touch devices
  const isTouchDevice = typeof window !== "undefined" && matchMedia("(pointer: coarse)").matches;

  // ❌ If touch device → return null (hide pointer)
  if (isTouchDevice) return null;

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Base styling
    el.style.position = "fixed";
    el.style.left = "0";
    el.style.top = "0";
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.pointerEvents = "none";
    el.style.borderRadius = "9999px";
    el.style.overflow = "hidden";
    el.style.boxShadow = "0 8px 28px rgba(2,6,23,0.12)";
    el.style.transform = "translate3d(-9999px,-9999px,0)";
    el.style.transition = "transform 0.08s linear, opacity 0.12s ease";
    el.style.willChange = "transform, opacity";
    el.style.zIndex = "9999";
    el.style.opacity = "0";

    const handleMove = (ev) => {
      const clientX = ev.clientX;
      const clientY = ev.clientY;
      if (clientX == null || clientY == null) return;

      const x = clientX - size / 2 + (offset?.x ?? 0);
      const y = clientY - size / 2 + (offset?.y ?? 0);

      el.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
      el.style.opacity = "1";
    };

    const handleLeave = () => {
      el.style.opacity = "0";
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [imageSrc, size, offset]);

  return (
    <div ref={elRef} aria-hidden="true">
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "9999px",
          backgroundColor: "#0d9488",
        }}
      />
    </div>
  );
};

export default CursorFollower;
