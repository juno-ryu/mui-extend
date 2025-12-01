import { useMemo } from "react";
import { ComponentCategory } from "@/features/showcase/constants/categories";
import { ComponentMetadata } from "@/features/showcase/lib/component-registry";
import { getComponents } from "@/features/showcase/lib/component-registry";
import {
  filterComponents,
  getComponentsCountByCategory,
  CategoryFilterOptions,
} from "@/features/showcase/lib/category-filter";

export function useComponentData() {
  const components = useMemo(() => getComponents(), []);

  const getComponentBySlug = (slug: string): ComponentMetadata | undefined => {
    return components.find((comp) => comp.slug === slug);
  };

  const getComponentsByCategory = (
    category?: ComponentCategory
  ): ComponentMetadata[] => {
    if (!category) return components;
    return components.filter((comp) => comp.category === category);
  };

  const getFilteredComponents = (
    options: CategoryFilterOptions
  ): ComponentMetadata[] => {
    return filterComponents(components, options);
  };

  const getCategoryCounts = () => {
    return getComponentsCountByCategory(components);
  };

  return {
    components,
    getComponentBySlug,
    getComponentsByCategory,
    getFilteredComponents,
    getCategoryCounts,
  };
}

