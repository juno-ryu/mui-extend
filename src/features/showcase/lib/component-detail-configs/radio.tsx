import { ComponentDetailConfig } from "./types";
import {
  RadioBasicExample,
  RadioSizesExample,
  RadioColorsExample,
} from "@/features/showcase/lib/examples/radio-examples";

export const radioConfig: ComponentDetailConfig = {
  slug: "radio",
  isAugmentColor: true,
  designNote: [
    "Radio 컴포넌트는 augment 컬러 토큰(예: augment/gray/800)을 활용해 버튼/입력 같은 인터랙티브 요소의 색상을 관리합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: RadioBasicExample,
      code: `import { Radio, FormControlLabel, FormControl, FormLabel, Stack } from "@/core/design-systems";

export function RadioExample() {
  return (
    <FormControl>
      <FormLabel>기본 라디오 그룹</FormLabel>
      <Stack direction="column" spacing={0.5} sx={{ mt: 2 }}>
        <FormControlLabel
          control={<Radio />}
          label="옵션 1"
        />
        <FormControlLabel
          control={<Radio defaultChecked />}
          label="옵션 2 (선택됨)"
        />
        <FormControlLabel
          control={<Radio disabled />}
          label="옵션 3 (비활성화)"
        />
        <FormControlLabel
          control={<Radio disabled checked />}
          label="옵션 4 (비활성화 + 선택됨)"
        />
      </Stack>
    </FormControl>
  );
}`,
    },
    {
      title: "Sizes",
      section: "variants",
      render: RadioSizesExample,
      code: `import { Radio, FormControlLabel, FormControl, FormLabel, Stack } from "@/core/design-systems";

export function RadioSizesExample() {
  return (
    <FormControl>
      <FormLabel>사이즈</FormLabel>
      <Stack direction="column" spacing={0.5} sx={{ mt: 2 }}>
        <FormControlLabel
          control={<Radio size="small" />}
          label="Small"
        />
        <FormControlLabel
          control={<Radio size="medium" />}
          label="Medium"
        />
      </Stack>
    </FormControl>
  );
}`,
    },
    {
      title: "컬러 토큰",
      section: "variants",
      render: RadioColorsExample,
      code: `import { Radio, FormControlLabel, FormControl, FormLabel, Stack } from "@/core/design-systems";

export function RadioColorsExample() {
  return (
    <FormControl>
      <FormLabel>컬러 토큰</FormLabel>
      <Stack direction="column" spacing={0.5} sx={{ mt: 2 }}>
        <FormControlLabel
          control={<Radio color="augment/gray/800" defaultChecked />}
          label="augment/gray/800 (기본)"
        />
        <FormControlLabel
          control={<Radio color="augment/primary/600" defaultChecked />}
          label="augment/primary/600"
        />
        <FormControlLabel
          control={<Radio color="augment/red/500" defaultChecked />}
          label="augment/red/500"
        />
        <FormControlLabel
          control={<Radio color="augment/green/500" defaultChecked />}
          label="augment/green/500"
        />
        <FormControlLabel
          control={<Radio color="augment/blue/500" defaultChecked />}
          label="augment/blue/500"
        />
      </Stack>
    </FormControl>
  );
}`,
    },
  ],
  customization: {
    addedProps: [],
    defaultValueChanges: [
      {
        prop: "component",
        customValue: "'span'",
        muiDefault: "'button'",
        note: "Radio를 span 요소로 렌더링하여 버튼 동작을 제거합니다.",
      },
      {
        prop: "icon",
        customValue: "<DesignIcon variant='RadioOutline' />",
        muiDefault: "기본 라디오 아이콘",
        note: "DesignIcon 컴포넌트를 사용하여 커스텀 라디오 아이콘을 적용합니다.",
      },
      {
        prop: "checkedIcon",
        customValue: "<DesignIcon variant='RadioFill' />",
        muiDefault: "기본 선택된 라디오 아이콘",
        note: "선택된 상태의 커스텀 라디오 아이콘을 적용합니다.",
      },
      {
        prop: "color",
        customValue: "'augment/gray/800'",
        muiDefault: "'primary'",
        note: "augment 컬러 토큰을 사용하여 인터랙티브 요소의 색상을 관리합니다.",
      },
      {
        prop: "size",
        customValue: "'medium'",
        muiDefault: "'medium'",
        note: "기본값은 동일하지만 명시적으로 설정하여 일관성을 유지합니다.",
      },
      {
        prop: "disableRipple",
        customValue: "true",
        muiDefault: "false",
        note: "ripple 효과를 비활성화하여 더 깔끔한 UI를 제공합니다.",
      },
      {
        prop: "disableTouchRipple",
        customValue: "true",
        muiDefault: "false",
        note: "터치 ripple 효과를 비활성화합니다.",
      },
    ],
    additionalVariants: [
      {
        type: "size",
        values: ["small", "medium", "large"],
      },
    ],
    styleChanges: [
      {
        description:
          "DesignIcon을 사용하여 라디오 아이콘을 커스터마이징합니다. RadioOutline, RadioFill variant를 사용합니다.",
      },
      {
        description:
          "size별로 아이콘 크기를 조정합니다. small: 20px, medium: 24px",
        code: "radioSizes(theme)",
      },
      {
        description:
          "ripple이 비활성화된 경우 padding을 0으로 설정하여 더 컴팩트한 레이아웃을 제공합니다.",
      },
      {
        description:
          "기본 색상을 gray/400으로 설정하고, disabled 상태에서는 gray/200을 사용합니다.",
        code: "theme.palette['gray/400'], theme.palette['gray/200']",
      },
      {
        description:
          "augment/gray/800 컬러 토큰을 사용하여 라디오의 활성 상태 색상을 관리합니다.",
      },
    ],
  },
};
