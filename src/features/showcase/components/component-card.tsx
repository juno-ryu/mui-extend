"use client";

import Link from "next/link";
import {
  ComponentCategory,
  getCategoryLabel,
} from "@/features/showcase/constants/categories";
import { LazyComponentPreview } from "./lazy-component-preview";

interface ComponentCardProps {
  name: string;
  description?: string;
  category?: ComponentCategory;
  slug: string;
  componentName?: string;
  previewProps?: Record<string, any>;
}

export function ComponentCard({
  name,
  description,
  category,
  slug,
  componentName,
  previewProps,
}: ComponentCardProps) {
  return (
    <Link
      href={`/components/${slug}`}
      className="block border rounded-lg overflow-hidden hover:shadow-md transition-all hover:border-primary/50 group bg-card"
    >
      {/* Preview 영역 (Lazy Loading) */}
      {componentName && (
        <div className="bg-muted/30 p-6 border-b flex items-center justify-center min-h-40">
          <LazyComponentPreview
            componentName={componentName}
            props={previewProps}
          />
        </div>
      )}

      {/* 정보 영역 */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2 gap-2">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors flex-1">
            {name}
          </h3>
          {category && (
            <span className="inline-block px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded shrink-0">
              {getCategoryLabel(category)}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
