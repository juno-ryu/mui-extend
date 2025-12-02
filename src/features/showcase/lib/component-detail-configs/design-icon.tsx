import { ComponentDetailConfig } from "./types";
import {
  DesignIconBasicExample,
  DesignIconSizeColorExample,
  DesignIconWithTitleExample,
} from "@/features/showcase/lib/examples/design-icon-examples";

export const designIconConfig: ComponentDetailConfig = {
  slug: "design-icon",
  designNote: [
    "DesignIcon 컴포넌트는 프로젝트 전용 커스텀 SVG 아이콘 세트를 위한 래퍼입니다.",
    "variant prop으로 아이콘 이름을 지정하며, 기본값은 'Image'입니다.",
    "아이콘의 크기와 색상은 상위에서 전달하는 fontSize, color(currentColor) 값을 그대로 사용하는 것이 기본 전략입니다.",
  ],
  usageExamples: [
    {
      title: "기본 아이콘 세트",
      section: "basic",
      render: DesignIconBasicExample,
      code: `import { Stack, DesignIcon } from "@/core/design-systems";

export function DesignIconBasicExample() {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <DesignIcon variant="Image" />
      <DesignIcon variant="Star" />
      <DesignIcon variant="NavHomeOutline" />
      <DesignIcon variant="NavProfileOutline" />
    </Stack>
  );
}`,
    },
    {
      title: "크기 · 색상 제어",
      section: "variants",
      render: DesignIconSizeColorExample,
      code: `import { Stack, DesignIcon, Typography } from "@/core/design-systems";

export function DesignIconSizeColorExample() {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack direction="column" spacing={1} alignItems="center">
        <DesignIcon
          variant="Star"
          sx={{ fontSize: 16, color: "augment/gray/700" }}
        />
        <Typography variant="label/label2">16px</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <DesignIcon
          variant="Star"
          sx={{ fontSize: 24, color: "augment/primary/600" }}
        />
        <Typography variant="label/label2">24px</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <DesignIcon
          variant="Star"
          sx={{ fontSize: 32, color: "augment/red/500" }}
        />
        <Typography variant="label/label2">32px</Typography>
      </Stack>
    </Stack>
  );
}`,
    },
    {
      title: "접근성을 위한 titleAccess",
      section: "variants",
      render: DesignIconWithTitleExample,
      code: `import { Stack, DesignIcon } from "@/core/design-systems";

export function DesignIconWithTitleExample() {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <DesignIcon
        variant="InformationOutline"
        titleAccess="정보 아이콘"
        sx={{ fontSize: 20 }}
      />
      <DesignIcon
        variant="NoticeOutline"
        titleAccess="알림 아이콘"
        sx={{ fontSize: 20 }}
      />
    </Stack>
  );
}`,
    },
  ],
  customization: {
    defaultValueChanges: [
      {
        prop: "component",
        customValue: "'i'",
        muiDefault: "'svg'",
        note: "커스텀 아이콘 폰트처럼 사용하기 위해 기본 component를 i 태그로 설정했습니다.",
      },
      {
        prop: "variant",
        customValue: "'Image'",
        muiDefault: "undefined",
        note: "디폴트 아이콘을 Image로 지정해 아이콘이 비어 있지 않도록 했습니다.",
      },
    ],
    styleChanges: [
      {
        description:
          "root를 flex 컨테이너로 설정하여 아이콘이 수직/수평 중앙 정렬되도록 했습니다.",
        code: "display: 'flex', alignItems: 'center', justifyContent: 'center'",
      },
      {
        description:
          "svgIcon의 width/height/fontSize를 'inherit'로 두어 상위에서 전달한 크기에 자동으로 맞추도록 했습니다.",
        code: "width: 'inherit', height: 'inherit', fontSize: 'inherit'",
      },
      {
        description:
          "fill을 currentColor로, stroke는 slotProps.svgIcon.strokeWidth가 지정된 경우에만 currentColor로 설정하여 아이콘 스타일을 일관되게 제어합니다.",
        code: "fill: 'currentColor', stroke: ownerState?.slotProps?.svgIcon?.strokeWidth ? 'currentColor' : 'none'",
      },
    ],
  },
};


