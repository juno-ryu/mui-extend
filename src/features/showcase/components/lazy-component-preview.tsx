"use client";

import { useState, useEffect, useRef } from "react";
import { ComponentPreview } from "./component-preview";

interface LazyComponentPreviewProps {
  componentName: string;
  variant?: string;
  props?: Record<string, any>;
}

export function LazyComponentPreview({
  componentName,
  variant,
  props,
}: LazyComponentPreviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // 뷰포트에 들어오기 50px 전에 로드
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="w-full">
      {isVisible ? (
        <ComponentPreview
          componentName={componentName}
          variant={variant}
          props={props || {}}
        />
      ) : (
        <div className="flex items-center justify-center h-32 bg-muted rounded-lg animate-pulse" />
      )}
    </div>
  );
}

