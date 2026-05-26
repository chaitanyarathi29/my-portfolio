"use client";

import { useEffect, useRef } from "react";

type ScrollSequenceProps = {
  frameCount: number;
  framePath: string;
  frameExtension?: string;
  zeroPad?: number;
  maxDpr?: number;
  fit?: "contain" | "cover";
  fitPadding?: number;
  scrollTargetId: string;
  className?: string;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function ScrollSequence({
  frameCount,
  framePath,
  frameExtension = "jpg",
  zeroPad = 4,
  maxDpr = 1.5,
  fit = "contain",
  fitPadding,
  scrollTargetId,
  className,
}: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const bitmapsRef = useRef<(ImageBitmap | null)[]>([]);
  const metricsRef = useRef({
    canvasWidth: 0,
    canvasHeight: 0,
    scrollStart: 0,
    scrollLength: 1,
  });
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const scrollTarget = document.getElementById(scrollTargetId);
    const canvas = canvasRef.current;

    if (!scrollTarget || !canvas || frameCount <= 0) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const canUseBitmap = typeof createImageBitmap === "function";

    const getFrameSrc = (index: number) => {
      const padded = String(index + 1).padStart(zeroPad, "0");
      return `${framePath}${padded}.${frameExtension}`;
    };

    const updateMetrics = () => {
      metricsRef.current.scrollStart = scrollTarget.offsetTop;
      metricsRef.current.scrollLength = Math.max(
        scrollTarget.offsetHeight - window.innerHeight,
        1
      );
    };

    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      metricsRef.current.canvasWidth = rect.width;
      metricsRef.current.canvasHeight = rect.height;
      updateMetrics();

      drawFrame(frameRef.current);
    };

    const drawFrame = (index: number) => {
      const bitmap = bitmapsRef.current[index];
      const img = imagesRef.current[index];
      if (!bitmap && (!img || !img.complete)) return;

      const sourceWidth = bitmap ? bitmap.width : img.naturalWidth;
      const sourceHeight = bitmap ? bitmap.height : img.naturalHeight;
      if (!sourceWidth || !sourceHeight) return;

      const canvasWidth = metricsRef.current.canvasWidth;
      const canvasHeight = metricsRef.current.canvasHeight;
      if (!canvasWidth || !canvasHeight) return;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      const baseScale =
        fit === "cover"
          ? Math.max(canvasWidth / sourceWidth, canvasHeight / sourceHeight)
          : Math.min(canvasWidth / sourceWidth, canvasHeight / sourceHeight);
      const paddingScale =
        typeof fitPadding === "number"
          ? Math.max(0.5, Math.min(1, fitPadding))
          : canvasWidth < 720
            ? 0.92
            : 0.98;
      const scale = baseScale * paddingScale;
      const drawWidth = sourceWidth * scale;
      const drawHeight = sourceHeight * scale;
      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;

      ctx.drawImage(bitmap ?? img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const updateProgress = () => {
      const scrollStart = metricsRef.current.scrollStart;
      const scrollLength = metricsRef.current.scrollLength;
      const progress = clamp(
        (window.scrollY - scrollStart) / scrollLength,
        0,
        1
      );

      scrollTarget.style.setProperty(
        "--sequence-progress",
        progress.toFixed(3)
      );

      const targetFrame = Math.round(progress * (frameCount - 1));
      if (targetFrame !== frameRef.current) {
        frameRef.current = targetFrame;
        drawFrame(targetFrame);
      }
    };

    const onScroll = () => {
      if (prefersReducedMotion) return;
      if (rafRef.current) return;

      rafRef.current = window.requestAnimationFrame(() => {
        updateProgress();
        rafRef.current = null;
      });
    };

    bitmapsRef.current = Array.from({ length: frameCount }, () => null);
    imagesRef.current = Array.from({ length: frameCount }, (_, index) => {
      const img = new Image();
      img.decoding = "async";
      img.src = getFrameSrc(index);
      img.onload = () => {
        if (canUseBitmap) {
          createImageBitmap(img)
            .then((bitmap) => {
              bitmapsRef.current[index] = bitmap;
              if (index === frameRef.current) {
                drawFrame(index);
              }
            })
            .catch(() => {
              if (index === frameRef.current) {
                drawFrame(index);
              }
            });
          return;
        }

        if (index === frameRef.current) {
          drawFrame(index);
        }
      };
      return img;
    });

    setCanvasSize();
    updateProgress();

    window.addEventListener("resize", setCanvasSize);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      bitmapsRef.current.forEach((bitmap) => bitmap?.close());
    };
  }, [
    frameCount,
    frameExtension,
    framePath,
    scrollTargetId,
    zeroPad,
    maxDpr,
    fit,
    fitPadding,
  ]);

  return (
    <div className="sequence-canvas-wrap">
      <canvas
        ref={canvasRef}
        className={className ? `sequence-canvas ${className}` : "sequence-canvas"}
        role="img"
        aria-label="Cinematic developer studio sequence"
      />
    </div>
  );
}
