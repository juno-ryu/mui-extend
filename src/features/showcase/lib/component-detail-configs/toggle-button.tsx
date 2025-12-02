import { ComponentDetailConfig } from "./types";
import {
  ToggleButtonBasicExample,
  ToggleButtonVariantsExample,
  ToggleButtonSizesExample,
} from "@/features/showcase/lib/examples/toggle-button-examples";

export const toggleButtonConfig: ComponentDetailConfig = {
  slug: "toggle-button",
  isAugmentColor: true,
  designNote: [
    "ToggleButton 컴포넌트는 augment 컬러 토큰(예: augment/gray/800, augment/primary/600)을 사용해 토글 상태에 따라 일관된 색상을 제공합니다.",
    "outlined / contained 두 가지 variant를 CSS 변수 기반으로 구현하여, 선택/비선택/비활성 상태의 배경/테두리/텍스트 색상을 토큰 단위로 제어합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: ToggleButtonBasicExample,
      code: `import { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Stack } from "@/core/design-systems";

export function ToggleButtonExample() {
  const [value, setValue] = useState<string | null>("left");

  return (
    <Stack direction="column" spacing={2}>
      <ToggleButtonGroup
        value={value}
        exclusive
        color="augment/primary/600"
        onChange={(_, newValue) => setValue(newValue)}
      >
        <ToggleButton value="left">Left</ToggleButton>
        <ToggleButton value="center">Center</ToggleButton>
        <ToggleButton value="right">Right</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}`,
    },
    {
      title: "Variants (outlined / contained)",
      section: "variants",
      render: ToggleButtonVariantsExample,
      code: `import { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Stack } from "@/core/design-systems";

export function ToggleButtonVariantsExample() {
  const [outlined, setOutlined] = useState<string | null>("left");
  const [contained, setContained] = useState<string | null>("left");

  return (
    <Stack direction="column" spacing={2}>
      <ToggleButtonGroup
        value={outlined}
        exclusive
        color="augment/primary/600"
        onChange={(_, v) => setOutlined(v)}
      >
        <ToggleButton value="left" variant="outlined">
          Left
        </ToggleButton>
        <ToggleButton value="center" variant="outlined">
          Center
        </ToggleButton>
        <ToggleButton value="right" variant="outlined">
          Right
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={contained}
        exclusive
        color="augment/primary/600"
        onChange={(_, v) => setContained(v)}
      >
        <ToggleButton value="left" variant="contained">
          Left
        </ToggleButton>
        <ToggleButton value="center" variant="contained">
          Center
        </ToggleButton>
        <ToggleButton value="right" variant="contained">
          Right
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}`,
    },
    {
      title: "Sizes",
      section: "variants",
      render: ToggleButtonSizesExample,
      code: `import { ToggleButton, ToggleButtonGroup, Stack } from "@/core/design-systems";

export function ToggleButtonSizesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <ToggleButtonGroup value="small" exclusive color="augment/primary/600">
        <ToggleButton value="small" size="small">
          Small
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup value="medium" exclusive color="augment/primary/600">
        <ToggleButton value="medium" size="medium">
          Medium
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    addedProps: [
      {
        name: "variant",
        type: '"outlined" | "contained" | "customA" | "customB"',
        description:
          "토글 버튼의 스타일을 제어하는 variant입니다. 내부적으로 data-variant 속성으로 내려가 CSS 변수 기반 스타일을 선택합니다.",
      },
    ],
    defaultValueChanges: [
      {
        prop: "size",
        customValue: "'small'",
        muiDefault: "'medium'",
        note: "토글 버튼의 기본 크기를 더 컴팩트한 small로 변경했습니다.",
      },
      {
        prop: "color",
        customValue: "'augment/red/600'",
        muiDefault: "'standard'",
        note: "기본 색상을 augment/red/600으로 지정하되, 실제 렌더링 시에는 유효한 augment 토큰으로만 동작하도록 검증합니다.",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: ["outlined", "contained", "customA", "customB"],
      },
      {
        type: "size",
        values: ["small", "medium", "large", "customA", "customB"],
      },
    ],
    styleChanges: [
      {
        description:
          "size별로 패딩, gap, 타이포그래피(body/body5, body/body3), 아이콘 크기를 조정합니다.",
        code: "toggleButtonSizes(theme)",
      },
      {
        description:
          "outlined / contained variant 각각에 대해 default / selected / disabled 상태별 색상/배경/테두리를 CSS 변수로 정의하고, augment 컬러 토큰에 따라 값이 바뀌도록 구성했습니다.",
        code: "--variant-outlined*/--variant-contained* CSS 변수들",
      },
      {
        description:
          "color prop이 augment/[color]/[shade] 형식인지 정규식으로 검증하고, 유효하지 않은 경우 안전하게 augment/gray/800으로 폴백합니다.",
        code: "/^augment\\/[a-zA-Z]+\\/\\d+$/.test(color)",
      },
      {
        description:
          "리플 효과를 focus-visible이 아닐 때는 완전히 숨겨 더 깔끔한 상호작용을 제공합니다.",
        code: "'&:not(:focus-visible) .MuiTouchRipple-ripple': { opacity: '0 !important' }",
      },
      {
        description:
          "selected 상태에서 폰트 굵기를 600으로 올려 선택된 토글을 더 강조합니다.",
      },
    ],
  },
};
