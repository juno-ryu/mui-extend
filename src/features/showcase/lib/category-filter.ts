import {
  ComponentCategory,
  isValidCategory,
} from "@/features/showcase/constants/categories";
import { ComponentMetadata } from "./component-registry";

export interface CategoryFilterOptions {
  category?: ComponentCategory;
  searchQuery?: string;
}

export function filterComponentsByCategory(
  components: ComponentMetadata[],
  category?: ComponentCategory
): ComponentMetadata[] {
  if (!category) return components;
  if (!isValidCategory(category)) return components;
  return components.filter((comp) => comp.category === category);
}

export function filterComponentsBySearch(
  components: ComponentMetadata[],
  searchQuery?: string
): ComponentMetadata[] {
  if (!searchQuery || searchQuery.trim() === "") return components;

  const query = searchQuery.toLowerCase().trim();

  return components.filter((comp) => {
    const nameMatch = comp.name.toLowerCase().includes(query);
    const descriptionMatch = comp.description
      .toLowerCase()
      .includes(query);
    const categoryMatch = comp.category.toLowerCase().includes(query);

    return nameMatch || descriptionMatch || categoryMatch;
  });
}

export function filterComponents(
  components: ComponentMetadata[],
  options: CategoryFilterOptions
): ComponentMetadata[] {
  let filtered = components;

  if (options.category) {
    filtered = filterComponentsByCategory(filtered, options.category);
  }

  if (options.searchQuery) {
    filtered = filterComponentsBySearch(filtered, options.searchQuery);
  }

  return filtered;
}

export function getComponentsCountByCategory(
  components: ComponentMetadata[]
): Record<ComponentCategory, number> {
  const counts: Record<string, number> = {};

  components.forEach((comp) => {
    counts[comp.category] = (counts[comp.category] || 0) + 1;
  });

  return {
    inputs: counts.inputs || 0,
    navigation: counts.navigation || 0,
    feedback: counts.feedback || 0,
    "data-display": counts["data-display"] || 0,
    surfaces: counts.surfaces || 0,
  };
}

