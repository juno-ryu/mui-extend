/**
 * 카테고리 필터링 시스템 테스트 예시
 * 실제 테스트 파일은 jest 또는 vitest로 작성
 */

import { ComponentCategory } from "@/features/showcase/constants/categories";
import { ComponentMetadata } from "./component-registry";
import {
  filterComponentsByCategory,
  filterComponentsBySearch,
  filterComponents,
  getComponentsCountByCategory,
} from "./category-filter";

// 테스트용 더미 데이터
const mockComponents: ComponentMetadata[] = [
  {
    id: "1",
    name: "Button",
    slug: "button",
    category: "inputs",
    description: "버튼 컴포넌트",
    importPath: "@/core/design-system",
  },
  {
    id: "2",
    name: "Input",
    slug: "input",
    category: "inputs",
    description: "입력 필드 컴포넌트",
    importPath: "@/core/design-system",
  },
  {
    id: "3",
    name: "Card",
    slug: "card",
    category: "data-display",
    description: "카드 컴포넌트",
    importPath: "@/core/design-system",
  },
];

// 카테고리별 필터링 테스트
export function testCategoryFiltering() {
  const filtered = filterComponentsByCategory(mockComponents, "inputs");
  console.assert(filtered.length === 2, "Should filter 2 input components");
}

// 검색 필터링 테스트
export function testSearchFiltering() {
  const filtered = filterComponentsBySearch(mockComponents, "button");
  console.assert(filtered.length === 1, "Should find 1 button component");
}

// 통합 필터링 테스트
export function testCombinedFiltering() {
  const filtered = filterComponents(mockComponents, {
    category: "inputs",
    searchQuery: "button",
  });
  console.assert(filtered.length === 1, "Should find 1 matching component");
}

// 카테고리별 카운트 테스트
export function testCategoryCounts() {
  const counts = getComponentsCountByCategory(mockComponents);
  console.assert(counts.inputs === 2, "Should count 2 input components");
  console.assert(
    counts["data-display"] === 1,
    "Should count 1 data-display component"
  );
}

