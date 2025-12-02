import { ComponentDetailConfig } from "./types";
import {
  DesignLabelBasicExample,
  DesignLabelColorsExample,
  DesignLabelRelaxBorderExample,
  DesignLabelWithIconExample,
} from "@/features/showcase/lib/examples/design-label-examples";

export const designLabelConfig: ComponentDetailConfig = {
  slug: "design-label",
  isAugmentColor: true,
  designNote: [
    "DesignLabel 컴포넌트는 작은 라벨이나 태그를 표시하기 위한 컴포넌트입니다.",
    "variant에 따라 text, outlined, contained, filled 스타일을 제공하며, color prop에 augment 컬러 토큰을 사용합니다.",
    "relaxBorder prop을 통해 테두리 스타일을 부드럽게 만들 수 있으며, slotProps를 통해 내부 Typography와 아이콘을 커스터마이징할 수 있습니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: DesignLabelBasicExample,
      code: `import { Stack, DesignLabel } from "@/core/design-systems";

export function DesignLabelBasicExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <DesignLabel variant="text" color="augment/gray/800">
        Text
      </DesignLabel>
      <DesignLabel variant="outlined" color="augment/gray/800">
        Outlined
      </DesignLabel>
      <DesignLabel variant="contained" color="augment/gray/800">
        Contained
      </DesignLabel>
      <DesignLabel variant="filled" color="augment/gray/800">
        Filled
      </DesignLabel>
    </Stack>
  );
}`,
    },
    {
      title: "Colors",
      section: "variants",
      render: DesignLabelColorsExample,
      code: `import { Stack, DesignLabel } from "@/core/design-systems";

export function DesignLabelColorsExample() {
  return (
    <Stack direction="column" spacing={3}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <DesignLabel variant="contained" color="augment/primary/600">
          Primary
        </DesignLabel>
        <DesignLabel variant="contained" color="augment/cyan/500">
          Cyan
        </DesignLabel>
        <DesignLabel variant="contained" color="augment/yellow/500">
          Yellow
        </DesignLabel>
        <DesignLabel variant="contained" color="augment/red/500">
          Red
        </DesignLabel>
      </Stack>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <DesignLabel variant="outlined" color="augment/primary/600">
          Primary
        </DesignLabel>
        <DesignLabel variant="outlined" color="augment/cyan/500">
          Cyan
        </DesignLabel>
        <DesignLabel variant="outlined" color="augment/yellow/500">
          Yellow
        </DesignLabel>
        <DesignLabel variant="outlined" color="augment/red/500">
          Red
        </DesignLabel>
      </Stack>
    </Stack>
  );
}`,
    },
    {
      title: "Relax Border",
      section: "variants",
      render: DesignLabelRelaxBorderExample,
      code: `import { Stack, DesignLabel } from "@/core/design-systems";

export function DesignLabelRelaxBorderExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <DesignLabel variant="contained" color="augment/primary/600">
        기본
      </DesignLabel>
      <DesignLabel variant="contained" color="augment/primary/600" relaxBorder>
        Relax Border
      </DesignLabel>
    </Stack>
  );
}`,
    },
    {
      title: "아이콘 포함",
      section: "variants",
      render: DesignLabelWithIconExample,
      code: `import { Stack, DesignLabel, DesignIcon } from "@/core/design-systems";

export function DesignLabelWithIconExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <DesignLabel
        variant="contained"
        color="augment/primary/600"
        slotProps={{
          typography: {
            children: (
              <>
                <DesignIcon variant="Star" />
                아이콘 포함
              </>
            ),
          },
        }}
      />
      <DesignLabel
        variant="outlined"
        color="augment/gray/800"
        slotProps={{
          typography: {
            children: (
              <>
                <DesignIcon variant="InformationOutline" />
                정보
              </>
            ),
          },
        }}
      />
    </Stack>
  );
}`,
    },
  ],
  customization: {
    addedProps: [
      {
        name: "relaxBorder",
        type: "boolean",
        description:
          "테두리 스타일을 부드럽게 만드는 플래그입니다. true일 경우 contained variant의 테두리가 투명도가 적용된 색상으로 변경됩니다.",
      },
      {
        name: "slots",
        type: "{ typography?: React.ElementType }",
        description:
          "내부 Typography 컴포넌트의 element type을 변경할 수 있습니다. 기본값은 'em'입니다.",
      },
      {
        name: "slotProps",
        type: "{ root?: BoxProps; typography?: TypographyProps }",
        description:
          "root와 typography 슬롯에 props를 전달할 수 있습니다. typography에는 variant, fontWeight, children 등을 설정할 수 있습니다.",
      },
    ],
    defaultValueChanges: [
      {
        prop: "component",
        customValue: "'span'",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "인라인 요소로 사용하기 위해 기본 component를 span으로 설정했습니다.",
      },
      {
        prop: "variant",
        customValue: "'contained'",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "기본 variant를 contained로 설정했습니다.",
      },
      {
        prop: "color",
        customValue: "'augment/gray/800'",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "augment 컬러 토큰을 기본 색상 체계로 사용합니다.",
      },
      {
        prop: "slots.typography",
        customValue: "'em'",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "내부 Typography의 기본 element를 em으로 설정했습니다.",
      },
      {
        prop: "slotProps.typography.variant",
        customValue: "'label/label1'",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "내부 Typography의 기본 variant를 label/label1로 설정했습니다.",
      },
      {
        prop: "slotProps.typography.fontWeight",
        customValue: "700",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "내부 Typography의 기본 fontWeight를 700으로 설정했습니다.",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: ["text", "outlined", "contained", "filled"],
      },
    ],
    styleChanges: [
      {
        description:
          "variant에 따라 CSS 변수를 사용하여 색상과 배경색을 동적으로 설정합니다. text, outlined, contained, filled 각각에 대해 color, background, borderColor를 정의합니다.",
        code: "designLabelVariants(theme) + CSS 변수(--variant-*)",
      },
      {
        description:
          "color prop이 augment/[color]/[shade] 형식인지 검증하고, 유효하지 않은 값은 augment/gray/800으로 폴백합니다.",
        code: "validateColor(ownerColor) ? ownerColor : 'augment/gray/800'",
      },
      {
        description:
          "relaxBorder가 true일 경우, contained variant의 테두리가 투명도가 적용된 색상으로 변경됩니다.",
        code: ".MuiDesignLabel-relaxBorder + --variant-containedBorder",
      },
      {
        description:
          "root는 inline-flex로 설정되어 fit-content 너비를 가지며, padding, border, borderRadius가 적용됩니다.",
        code: "display: 'inline-flex', width: 'fit-content', padding: '3px 7px', borderWidth: '1px', borderRadius: '6px'",
      },
      {
        description:
          "typography는 inline-flex로 설정되어 중앙 정렬되며, gap이 6px로 설정되어 아이콘과 텍스트 사이 간격이 자동으로 조정됩니다.",
        code: "display: 'inline-flex', alignItems: 'center', gap: '6px'",
      },
      {
        description:
          "내부 DesignIcon의 크기를 16px로 고정하여 텍스트와 정렬을 맞춥니다.",
        code: ".MuiDesignIcon-root width: 16px",
      },
    ],
  },
};

