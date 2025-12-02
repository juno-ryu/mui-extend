import { ComponentDetailConfig } from "./types";
import {
  ChipBasicExample,
  ChipVariantsExample,
  ChipSizesExample,
  ChipColorsExample,
} from "@/features/showcase/lib/examples/chip-examples";

export const chipConfig: ComponentDetailConfig = {
  slug: "chip",
  isAugmentColor: true,
  designNote: [
    "Chip 컴포넌트는 작은 정보를 표시하는 칩 컴포넌트입니다.",
    "기본적으로 variant: 'filled', size: 'small', color: 'augment/gray/800'이 설정되어 있으며, deleteIcon에 DesignIcon(RemoveFill)을 사용합니다.",
    "size별로 타이포그래피(label/label2, label/label1, body/body6)와 아이콘 크기가 커스터마이징되어 있습니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: ChipBasicExample,
      code: `import { Stack, Chip, DesignIcon } from "@/core/design-systems";

export function ChipBasicExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <Chip label="기본 칩" />
      <Chip label="아이콘 칩" icon={<DesignIcon variant="Star" />} />
      <Chip
        label="삭제 가능"
        onDelete={() => {
          // noop
        }}
      />
      <Chip
        label="아이콘 + 삭제"
        icon={<DesignIcon variant="Star" />}
        onDelete={() => {
          // noop
        }}
      />
    </Stack>
  );
}`,
    },
    {
      title: "Variants",
      section: "variants",
      render: ChipVariantsExample,
      code: `import { Stack, Chip } from "@/core/design-systems";

export function ChipVariantsExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Filled (기본값)" variant="filled" />
        <Chip label="Outlined" variant="outlined" />
      </Stack>
    </Stack>
  );
}`,
    },
    {
      title: "Sizes",
      section: "variants",
      render: ChipSizesExample,
      code: `import { Stack, Chip } from "@/core/design-systems";

export function ChipSizesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        <Chip label="Extra Small" size="extraSmall" />
        <Chip label="Small (기본값)" size="small" />
        <Chip label="Medium" size="medium" />
      </Stack>
    </Stack>
  );
}`,
    },
    {
      title: "Colors",
      section: "variants",
      render: ChipColorsExample,
      code: `import { Stack, Chip } from "@/core/design-systems";

export function ChipColorsExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Gray 800 (기본값)" color="augment/gray/800" />
        <Chip label="Primary 600" color="augment/primary/600" />
        <Chip label="Cyan 500" color="augment/cyan/500" />
        <Chip label="Yellow 500" color="augment/yellow/500" />
        <Chip label="Red 500" color="augment/red/500" />
      </Stack>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    defaultValueChanges: [
      {
        prop: "variant",
        customValue: "'filled'",
        muiDefault: "'filled'",
        note: "filled variant를 기본값으로 사용합니다.",
      },
      {
        prop: "size",
        customValue: "'small'",
        muiDefault: "'medium'",
        note: "small size를 기본값으로 사용합니다.",
      },
      {
        prop: "color",
        customValue: "'augment/gray/800'",
        muiDefault: "'default'",
        note: "augment 컬러 토큰을 기본 색상 체계로 사용합니다.",
      },
      {
        prop: "deleteIcon",
        customValue: "<DesignIcon variant='RemoveFill' />",
        muiDefault: "기본 Delete 아이콘",
        note: "DesignIcon(RemoveFill)을 사용해 삭제 아이콘을 커스터마이징합니다.",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: ["filled", "outlined", "customA", "customB"],
      },
      {
        type: "size",
        values: ["extraSmall", "small", "medium", "customA", "customB"],
      },
    ],
    styleChanges: [
      {
        description:
          "size별로 패딩, 타이포그래피(label/label2, label/label1, body/body6) 및 아이콘 크기를 조정합니다.",
        code: "chipSizes(theme)",
      },
      {
        description:
          "outlined variant일 때 size에 따라 다른 두께의 inset box-shadow를 사용합니다 (medium: 1px, small/extraSmall: 0.8px).",
        code: "outlined variant '&:after' boxShadow",
      },
      {
        description:
          "borderRadius를 999px로 설정하여 완전히 둥근 형태를 제공합니다.",
        code: "borderRadius: '999px'",
      },
      {
        description:
          "ripple 애니메이션을 비활성화하고, active 상태에서 box-shadow를 제거합니다.",
        code: "ripple animationDuration: '0ms', '&:active': { boxShadow: 'none' }",
      },
      {
        description:
          "avatar, icon, deleteIcon의 margin과 padding을 0px로 설정하고, deleteIcon의 opacity를 0.35로 설정합니다.",
        code: "avatar/icon/deleteIcon styleOverrides",
      },
    ],
  },
};

