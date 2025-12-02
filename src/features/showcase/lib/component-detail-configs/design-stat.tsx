import { ComponentDetailConfig } from "./types";
import {
  DesignStatBasicExample,
  DesignStatCustomExample,
  DesignStatWithoutUnitExample,
} from "@/features/showcase/lib/examples/design-stat-examples";

export const designStatConfig: ComponentDetailConfig = {
  slug: "design-stat",
  designNote: [
    "DesignStat 컴포넌트는 통계 정보를 표시하기 위한 컴포넌트입니다.",
    "children으로 숫자를 표시하고, unit prop으로 단위를 표시합니다.",
    "slotProps를 통해 typography와 unit의 variant, color 등을 커스터마이징할 수 있습니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: DesignStatBasicExample,
      code: `import { Stack, DesignStat } from "@/core/design-systems";

export function DesignStatBasicExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <DesignStat unit="명">1,234</DesignStat>
      <DesignStat unit="원">5,678</DesignStat>
      <DesignStat unit="%">98.5</DesignStat>
      <DesignStat unit="건">42</DesignStat>
    </Stack>
  );
}`,
    },
    {
      title: "커스터마이징",
      section: "variants",
      render: DesignStatCustomExample,
      code: `import { Stack, DesignStat } from "@/core/design-systems";

export function DesignStatCustomExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <DesignStat
        unit="명"
        slotProps={{
          typography: {
            variant: "title/title3",
            color: "gray/900",
          },
          unit: {
            variant: "body/body5",
            color: "gray/500",
          },
        }}
      >
        1,234
      </DesignStat>
      <DesignStat
        unit="원"
        slotProps={{
          typography: {
            variant: "title/title4",
            color: "primary/600",
          },
          unit: {
            variant: "label/label1",
            color: "gray/400",
          },
        }}
      >
        5,678
      </DesignStat>
    </Stack>
  );
}`,
    },
    {
      title: "단위 없이 사용",
      section: "variants",
      render: DesignStatWithoutUnitExample,
      code: `import { Stack, DesignStat } from "@/core/design-systems";

export function DesignStatWithoutUnitExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <DesignStat>1,234</DesignStat>
      <DesignStat>5,678</DesignStat>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    addedProps: [
      {
        name: "unit",
        type: "string",
        description:
          "통계 값의 단위를 표시하는 텍스트입니다. 예: '명', '원', '%', '건' 등.",
      },
      {
        name: "slots",
        type: "{ typography?: React.ElementType; unit?: React.ElementType }",
        description:
          "typography와 unit 슬롯의 element type을 변경할 수 있습니다.",
      },
      {
        name: "slotProps",
        type: "{ root?: BoxProps; typography?: TypographyProps; unit?: TypographyProps }",
        description:
          "root, typography, unit 슬롯에 props를 전달할 수 있습니다. typography와 unit에는 variant, color 등을 설정할 수 있습니다.",
      },
    ],
    defaultValueChanges: [
      {
        prop: "component",
        customValue: "'div'",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "블록 요소로 사용하기 위해 기본 component를 div로 설정했습니다.",
      },
      {
        prop: "slotProps.typography.variant",
        customValue: "'body/body2'",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "내부 Typography의 기본 variant를 body/body2로 설정했습니다.",
      },
      {
        prop: "slotProps.typography.color",
        customValue: "'gray/900'",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "내부 Typography의 기본 color를 gray/900으로 설정했습니다.",
      },
      {
        prop: "slotProps.unit.variant",
        customValue: "'body/body6'",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "단위 표시용 Typography의 기본 variant를 body/body6으로 설정했습니다.",
      },
      {
        prop: "slotProps.unit.color",
        customValue: "'gray/500'",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "단위 표시용 Typography의 기본 color를 gray/500으로 설정했습니다.",
      },
    ],
    styleChanges: [
      {
        description:
          "root는 flex 컨테이너로 설정되어 세로 방향으로 배치되며, gap이 2px로 설정되어 숫자와 단위 사이 간격이 자동으로 조정됩니다.",
        code: "display: 'flex', flexDirection: 'column', gap: '2px'",
      },
      {
        description:
          "root에 padding, background, border, borderRadius가 적용되어 카드 형태의 디자인을 제공합니다.",
        code: "padding: '8px 16px', background: theme.palette['white'], border: '2px solid gray/300', borderRadius: '4px'",
      },
    ],
  },
};

