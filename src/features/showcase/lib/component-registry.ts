import { ComponentCategory } from "@/features/showcase/constants/categories";

export interface ComponentMetadata {
  id: string;
  name: string;
  slug: string;
  category: ComponentCategory;
  description: string;
  importPath: string;
  componentName?: string; // core/design-systems에서 export된 컴포넌트 이름
  previewProps?: Record<string, any>; // Preview에 전달할 props
  variants?: string[];
}

const components: ComponentMetadata[] = [
  {
    id: "button",
    name: "Button",
    slug: "button",
    category: "inputs",
    description: "사용자 액션을 트리거하는 버튼 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Button",
    previewProps: {
      children: "Button",
      variant: "contained",
      size: "medium",
    },
    variants: ["contained", "outlined", "text"],
  },
  {
    id: "text-field",
    name: "TextField",
    slug: "text-field",
    category: "inputs",
    description: "텍스트 입력을 받는 필드 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "TextField",
    previewProps: {
      label: "Label",
      placeholder: "Placeholder",
      variant: "outlined",
    },
    variants: ["outlined", "filled", "standard"],
  },
  {
    id: "chip",
    name: "Chip",
    slug: "chip",
    category: "data-display",
    description: "작은 정보를 표시하는 칩 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Chip",
    previewProps: {
      label: "Chip",
      variant: "filled",
    },
    variants: ["filled", "outlined"],
  },
  {
    id: "checkbox",
    name: "Checkbox",
    slug: "checkbox",
    category: "inputs",
    description: "선택/해제를 위한 체크박스 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Checkbox",
    previewProps: {
      defaultChecked: true,
    },
  },
  {
    id: "switch",
    name: "Switch",
    slug: "switch",
    category: "inputs",
    description: "켜기/끄기를 위한 스위치 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Switch",
    previewProps: {
      defaultChecked: true,
    },
  },
  {
    id: "alert",
    name: "Alert",
    slug: "alert",
    category: "feedback",
    description: "중요한 정보나 경고를 표시하는 알림 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Alert",
    previewProps: {
      severity: "info",
      children: "This is an alert message",
    },
    variants: ["success", "info", "warning", "error"],
  },
  {
    id: "avatar",
    name: "Avatar",
    slug: "avatar",
    category: "data-display",
    description:
      "사용자 프로필 이미지나 이니셜을 표시하는 아바타 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Avatar",
    previewProps: {
      children: "AB",
    },
  },
  {
    id: "divider",
    name: "Divider",
    slug: "divider",
    category: "surfaces",
    description: "콘텐츠를 구분하는 구분선 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Divider",
    previewProps: {},
  },
  {
    id: "typography",
    name: "Typography",
    slug: "typography",
    category: "data-display",
    description: "텍스트 스타일링을 위한 타이포그래피 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Typography",
    previewProps: {
      variant: "h6",
      children: "Typography",
    },
  },
  {
    id: "icon-button",
    name: "IconButton",
    slug: "icon-button",
    category: "inputs",
    description: "아이콘만 표시하는 버튼 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "IconButton",
    previewProps: {
      children: "♥",
    },
  },
];

export function getComponents(): ComponentMetadata[] {
  return components;
}

export function getComponentBySlug(
  slug: string
): ComponentMetadata | undefined {
  return components.find((comp) => comp.slug === slug);
}

export function getComponentsByCategory(
  category?: ComponentCategory
): ComponentMetadata[] {
  if (!category) return components;
  return components.filter((comp) => comp.category === category);
}

export function registerComponent(metadata: ComponentMetadata): void {
  const existing = components.findIndex((c) => c.id === metadata.id);
  if (existing >= 0) {
    components[existing] = metadata;
  } else {
    components.push(metadata);
  }
}
