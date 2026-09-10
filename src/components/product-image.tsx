"use client";

import { useState } from "react";

/**
 * 商品图组件：图片缺失(尚未上传)时优雅降级。
 * - hideOnError=true  → 直接隐藏（用于画廊缩略图）
 * - hideOnError=false → 显示占位块（用于主图/卡片，避免留白）
 */
export default function ProductImage({
  src,
  alt,
  className = "",
  placeholderText,
  hideOnError = false,
}: {
  src: string;
  alt: string;
  className?: string;
  placeholderText?: string;
  hideOnError?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    if (hideOnError) return null;
    return (
      <div
        className={`flex items-center justify-center bg-frost-tint ${className}`}
        aria-label={alt}
      >
        <span className="px-4 text-center font-display text-sm font-medium uppercase tracking-widest text-mist">
          {placeholderText ?? "SNOWCLAD"}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
