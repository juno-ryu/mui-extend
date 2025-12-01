"use client";

import { ComponentCategory, CATEGORIES, getCategoryLabel } from "@/features/showcase/constants/categories";

interface CategoryFilterProps {
  selectedCategory?: ComponentCategory;
  onCategoryChange?: (category: ComponentCategory | undefined) => void;
  showAllOption?: boolean;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
  showAllOption = true,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {showAllOption && (
        <button
          onClick={() => onCategoryChange?.(undefined)}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            !selectedCategory
              ? "bg-primary text-primary-foreground"
              : "bg-background hover:bg-muted"
          }`}
        >
          전체
        </button>
      )}
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange?.(category)}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            selectedCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-background hover:bg-muted"
          }`}
        >
          {getCategoryLabel(category)}
        </button>
      ))}
    </div>
  );
}
