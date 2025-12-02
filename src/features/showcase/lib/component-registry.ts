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
    id: "radio",
    name: "Radio",
    slug: "radio",
    category: "inputs",
    description: "단일 선택을 위한 라디오 버튼 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Radio",
    previewProps: {
      defaultChecked: true,
    },
  },
  {
    id: "form-control",
    name: "FormControl",
    slug: "form-control",
    category: "inputs",
    description:
      "폼 입력 컴포넌트들을 감싸서 상태와 스타일을 관리하는 컨테이너 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "FormControl",
    previewProps: {},
  },
  {
    id: "form-control-label",
    name: "FormControlLabel",
    slug: "form-control-label",
    category: "inputs",
    description:
      "Checkbox, Switch, Radio 같은 컨트롤 컴포넌트에 레이블을 연결하는 래퍼 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "FormControlLabel",
    previewProps: {
      control: "checkbox",
      label: "Label",
    },
  },
  {
    id: "form-helper-text",
    name: "FormHelperText",
    slug: "form-helper-text",
    category: "inputs",
    description:
      "입력 컴포넌트 하단의 안내/에러 텍스트를 위한 헬퍼 텍스트 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "FormHelperText",
    previewProps: {
      children: "헬퍼 텍스트",
    },
  },
  {
    id: "input-adornment",
    name: "InputAdornment",
    slug: "input-adornment",
    category: "inputs",
    description:
      "TextField의 시작 또는 끝 위치에 아이콘이나 텍스트를 표시하는 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "InputAdornment",
    previewProps: {},
  },
  {
    id: "rating",
    name: "Rating",
    slug: "rating",
    category: "inputs",
    description: "별점을 표시하고 선택할 수 있는 평가 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Rating",
    previewProps: {
      value: 3,
    },
  },
  {
    id: "select",
    name: "Select",
    slug: "select",
    category: "inputs",
    description: "드롭다운 목록에서 옵션을 선택할 수 있는 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Select",
    previewProps: {},
  },
  {
    id: "toggle-button",
    name: "ToggleButton",
    slug: "toggle-button",
    category: "inputs",
    description:
      "두 개 이상의 상태 중에서 하나 또는 여러 개를 선택할 수 있는 토글 버튼 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "ToggleButton",
    previewProps: {
      value: "left",
      children: "Toggle",
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
    id: "alert-title",
    name: "AlertTitle",
    slug: "alert-title",
    category: "feedback",
    description: "Alert 내부에서 제목을 표시하는 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "AlertTitle",
    previewProps: {
      children: "Alert Title",
    },
  },
  {
    id: "skeleton",
    name: "Skeleton",
    slug: "skeleton",
    category: "feedback",
    description: "콘텐츠가 로딩 중일 때 표시되는 플레이스홀더 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Skeleton",
    previewProps: {
      variant: "text",
      width: "100%",
    },
  },
  {
    id: "circular-progress",
    name: "CircularProgress",
    slug: "circular-progress",
    category: "feedback",
    description: "원형 프로그레스 바를 표시하는 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "CircularProgress",
    previewProps: {
      size: 40,
    },
  },
  {
    id: "snackbar",
    name: "Snackbar",
    slug: "snackbar",
    category: "feedback",
    description: "사용자에게 간단한 알림 메시지를 표시하는 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Snackbar",
    previewProps: {
      message: "Snackbar",
      variant: "default",
      mode: "light",
    },
  },
  {
    id: "linear-progress",
    name: "LinearProgress",
    slug: "linear-progress",
    category: "feedback",
    description: "선형 프로그레스 바를 표시하는 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "LinearProgress",
    previewProps: {},
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
    id: "tooltip",
    name: "Tooltip",
    slug: "tooltip",
    category: "data-display",
    description:
      "요소에 마우스를 올렸을 때 보조 정보를 제공하는 툴팁 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Tooltip",
    previewProps: {
      title: "Tooltip",
      children: "Hover",
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
      variant: "title/title5",
      children: "Typography",
    },
  },
  {
    id: "design-icon",
    name: "DesignIcon",
    slug: "design-icon",
    category: "data-display",
    description:
      "프로젝트 전용 커스텀 SVG 아이콘 세트를 위한 래퍼 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "DesignIcon",
    previewProps: {
      variant: "Star",
    },
  },
  {
    id: "design-label",
    name: "DesignLabel",
    slug: "design-label",
    category: "data-display",
    description: "작은 라벨이나 태그를 표시하기 위한 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "DesignLabel",
    previewProps: {
      variant: "contained",
      color: "augment/primary/600",
      children: "Label",
    },
  },
  {
    id: "design-stat",
    name: "DesignStat",
    slug: "design-stat",
    category: "data-display",
    description: "통계 정보를 표시하기 위한 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "DesignStat",
    previewProps: {
      unit: "명",
      children: "1,234",
    },
  },
  {
    id: "loader",
    name: "Loader",
    slug: "loader",
    category: "data-display",
    description: "로딩 상태를 표시하기 위한 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Loader",
    previewProps: {
      variant: "dot",
      color: "augment/primary/600",
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
  {
    id: "dialog",
    name: "Dialog",
    slug: "dialog",
    category: "surfaces",
    description: "모달 형태의 다이얼로그를 표시하는 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Dialog",
    previewProps: {},
  },
  {
    id: "accordion",
    name: "Accordion",
    slug: "accordion",
    category: "surfaces",
    description: "접을 수 있는 콘텐츠 섹션을 제공하는 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Accordion",
    previewProps: {},
  },
  {
    id: "pagination",
    name: "Pagination",
    slug: "pagination",
    category: "navigation",
    description: "페이지네이션을 제공하는 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Pagination",
    previewProps: {
      count: 10,
      page: 1,
    },
  },
  {
    id: "drawer",
    name: "Drawer",
    slug: "drawer",
    category: "navigation",
    description: "사이드에서 슬라이드되는 패널을 제공하는 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Drawer",
    previewProps: {},
  },
  {
    id: "bottom-navigation",
    name: "BottomNavigation",
    slug: "bottom-navigation",
    category: "navigation",
    description: "하단 네비게이션 바를 제공하는 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "BottomNavigation",
    previewProps: {},
  },
  {
    id: "menu",
    name: "Menu",
    slug: "menu",
    category: "navigation",
    description: "드롭다운 메뉴를 표시하기 위한 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Menu",
    previewProps: {},
  },
  {
    id: "tabs",
    name: "Tabs",
    slug: "tabs",
    category: "navigation",
    description: "탭 네비게이션을 제공하는 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Tabs",
    previewProps: {},
  },
  {
    id: "stepper",
    name: "Stepper",
    slug: "stepper",
    category: "navigation",
    description: "단계별 프로세스를 표시하는 컴포넌트입니다.",
    importPath: "@/core/design-systems",
    componentName: "Stepper",
    previewProps: {},
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
