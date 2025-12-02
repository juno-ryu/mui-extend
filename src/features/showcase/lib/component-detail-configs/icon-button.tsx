import { ComponentDetailConfig } from "./types";
import {
  IconButtonBasicExample,
  IconButtonSizesExample,
  IconButtonColorsExample,
  IconButtonEdgeExample,
} from "@/features/showcase/lib/examples/icon-button-examples";

export const iconButtonConfig: ComponentDetailConfig = {
  slug: "icon-button",
  isAugmentColor: true,
  designNote: [
    "텍스트 없이 아이콘만 사용하는 액션 버튼을 위해, 버튼 대비 더 미니멀한 인터랙션 패턴이 필요해서 분리된 컴포넌트입니다.",
    "모든 size에서 padding을 0으로 고정하고, size에 따라 DesignIcon 크기만 달리해(16/18/20/24px) 아이콘 그리드에 정확히 맞도록 설계했습니다.",
    "hover 배경과 ripple 효과를 최소화(transparent + ripple 제거)해서, 리스트/툴바 등 조밀한 UI에서도 시각적 노이즈 없이 사용할 수 있습니다.",
    "IconButton 컴포넌트는 augment 컬러 토큰(예: augment/gray/800)을 활용해 버튼/입력 같은 인터랙티브 요소의 색상을 관리합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: IconButtonBasicExample,
      code: `import { IconButton, DesignIcon } from "@/core/design-systems";

export function IconButtonExample() {
  return (
    <>
      <IconButton>
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton disabled>
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton color="augment/primary/600">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton color="augment/red/500">
        <DesignIcon variant="Star" />
      </IconButton>
    </>
  );
}`,
    },
    {
      title: "Sizes",
      section: "variants",
      render: IconButtonSizesExample,
      code: `import { IconButton, DesignIcon } from "@/core/design-systems";

export function IconButtonSizesExample() {
  return (
    <>
      <IconButton size="small">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton size="medium">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton size="large">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton size="extraLarge">
        <DesignIcon variant="Star" />
      </IconButton>
    </>
  );
}`,
    },
    {
      title: "컬러 토큰",
      section: "variants",
      render: IconButtonColorsExample,
      code: `import { IconButton, DesignIcon } from "@/core/design-systems";

export function IconButtonColorsExample() {
  return (
    <>
      <IconButton color="augment/gray/800">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton color="augment/primary/600">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton color="augment/red/500">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton color="augment/green/500">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton color="augment/blue/500">
        <DesignIcon variant="Star" />
      </IconButton>
    </>
  );
}`,
    },
    {
      title: "Edge 정렬",
      section: "variants",
      render: IconButtonEdgeExample,
      code: `import { IconButton, DesignIcon } from "@/core/design-systems";

export function IconButtonEdgeExample() {
  return (
    <>
     <div className="flex items-center gap-2 border rounded-lg p-4">
        <IconButton edge="start">
          <DesignIcon variant="ArrowLeftBold" />
        </IconButton>
        <span className="flex-1 text-sm">중간 텍스트</span>
        <IconButton edge="end">
          <DesignIcon variant="ArrowRightBold" />
        </IconButton>
      </div>
      <div className="flex items-center gap-2 border rounded-lg p-4">
        <IconButton>
          <DesignIcon variant="ArrowLeftBold" />
        </IconButton>
        <span className="flex-1 text-sm">기본 margin 유지</span>
        <IconButton>
          <DesignIcon variant="ArrowRightBold" />
        </IconButton>
      </div>
    </>
  );
}`,
    },
  ],
  customization: {
    addedProps: [],
    defaultValueChanges: [
      {
        prop: "size",
        customValue: "'small'",
        muiDefault: "'medium'",
        note: "더 작고 미니멀한 기본 크기를 제공합니다.",
      },
      {
        prop: "color",
        customValue: "'augment/gray/800'",
        muiDefault: "'default'",
        note: "augment 컬러 토큰을 기본값으로 사용하여 일관된 색상 시스템을 제공합니다.",
      },
      {
        prop: "edge",
        customValue: "false",
        muiDefault: "undefined",
        note: "명시적으로 edge를 false로 설정하여 기본 margin을 유지합니다.",
      },
    ],
    additionalVariants: [
      {
        type: "size",
        values: [
          "small",
          "medium",
          "large",
          "extraLarge",
          "customA",
          "customB",
        ],
      },
    ],
    styleChanges: [
      {
        description:
          "모든 size에서 padding을 0px로 설정하여 아이콘만 표시하는 미니멀한 디자인을 제공합니다.",
        code: "padding: '0px'",
      },
      {
        description:
          "size별로 DesignIcon 크기를 조정합니다. small: 16px, medium: 18px, large: 20px, extraLarge: 24px",
        code: "iconButtonSizes(theme)",
      },
      {
        description:
          "edge prop을 사용하여 정렬을 제어합니다. edge='start'는 marginLeft를 0px로, edge='end'는 marginRight를 0px로 설정합니다.",
      },
      {
        description:
          "hover 배경색을 transparent로 설정하여 hover 시 배경색 변화를 제거합니다.",
        code: "--IconButton-hoverBg: theme.palette['transparent']",
      },
      {
        description:
          "ripple 효과를 완전히 비활성화합니다. animationDuration을 0ms로 설정하고, focus-visible이 아닌 경우 opacity를 0으로 설정합니다.",
        code: "animationDuration: '0ms', opacity: '0 !important'",
      },
      {
        description:
          "color prop에 전달된 값이 augment 컬러 토큰 형식(augment/[color]/[shade])인지 검증하고, 유효하지 않은 경우 기본값 augment/gray/800을 사용합니다.",
        code: "/^augment\\/[a-zA-Z]+\\/\\d+$/.test(color)",
      },
    ],
  },
};
