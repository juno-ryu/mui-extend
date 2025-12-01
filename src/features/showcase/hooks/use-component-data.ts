import { useMemo } from "react";
import { ComponentCategory } from "@/features/showcase/constants/categories";
import { ComponentMetadata } from "@/features/showcase/lib/component-registry";
import { getComponents } from "@/features/showcase/lib/component-registry";
import { componentDetailConfigs } from "@/features/showcase/lib/component-detail-configs";
import {
  filterComponents,
  getComponentsCountByCategory,
  CategoryFilterOptions,
} from "@/features/showcase/lib/category-filter";

export function useComponentData() {
  // 구현된 컴포넌트 slug 리스트 (component-detail-configs에 있는 것들)
  const implementedSlugs = useMemo(
    () => Object.keys(componentDetailConfigs),
    []
  );

  // 전체 컴포넌트 리스트에서 구현된 것만 필터링
  const components = useMemo(() => {
    const allComponents = getComponents();
    return allComponents.filter((comp) =>
      implementedSlugs.includes(comp.slug)
    );
  }, [implementedSlugs]);

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

