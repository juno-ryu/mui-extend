export type ComponentCategory =
  | "inputs"
  | "navigation"
  | "feedback"
  | "data-display"
  | "surfaces";

export const CATEGORIES: ComponentCategory[] = [
  "inputs",
  "navigation",
  "feedback",
  "data-display",
  "surfaces",
] as const;

export const CATEGORY_LABELS: Record<ComponentCategory, string> = {
  inputs: "Inputs",
  navigation: "Navigation",
  feedback: "Feedback",
  "data-display": "Data Display",
  surfaces: "Surfaces",
};

export const CATEGORY_DESCRIPTIONS: Record<ComponentCategory, string> = {
  inputs: "사용자 입력을 받는 컴포넌트 (Button, Input, Textarea, Select 등)",
  navigation: "네비게이션 관련 컴포넌트 (Menu, Tabs, Breadcrumbs 등)",
  feedback:
    "사용자에게 피드백을 제공하는 컴포넌트 (Alert, Snackbar, Dialog 등)",
  "data-display": "데이터를 표시하는 컴포넌트 (Table, Card, List 등)",
  surfaces: "표면 및 구분선 컴포넌트 (Paper, Divider 등)",
};

export function isValidCategory(
  category: string
): category is ComponentCategory {
  return CATEGORIES.includes(category as ComponentCategory);
}

export function getCategoryLabel(category: ComponentCategory): string {
  return CATEGORY_LABELS[category];
}

export function getCategoryDescription(category: ComponentCategory): string {
  return CATEGORY_DESCRIPTIONS[category];
}
