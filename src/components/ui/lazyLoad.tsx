"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, width, height, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} style={{ minHeight: height }}>
      {isVisible && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={false}
        />
      )}
    </div>
  );
};

export default LazyImage;
