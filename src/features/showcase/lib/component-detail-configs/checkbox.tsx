import { ComponentDetailConfig } from "./types";
import {
  CheckboxBasicExample,
  CheckboxSizesExample,
  CheckboxColorsExample,
} from "@/features/showcase/lib/examples/checkbox-examples";

export const checkboxConfig: ComponentDetailConfig = {
  slug: "checkbox",
  designNote: [
    "inputs 카테고리 컴포넌트들은 augment 컬러 토큰(예: augment/gray/800)을 활용해 텍스트 입력 같은 인터랙티브 요소의 색상을 관리합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: CheckboxBasicExample,
      code: `import { Checkbox, FormControlLabel } from "@/core/design-systems";

export function CheckboxExample() {
  return (
    <>
      <FormControlLabel
        control={<Checkbox />}
        label="기본 체크박스"
      />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="체크된 상태"
      />
      <FormControlLabel
        control={<Checkbox indeterminate />}
        label="중간 상태 (indeterminate)"
      />
      <FormControlLabel
        control={<Checkbox disabled />}
        label="비활성화"
      />
      <FormControlLabel
        control={<Checkbox disabled checked />}
        label="비활성화 + 체크됨"
      />
    </>
  );
}`,
    },
    {
      title: "Sizes",
      section: "variants",
      render: CheckboxSizesExample,
      code: `import { Checkbox, FormControlLabel } from "@/core/design-systems";

export function CheckboxSizesExample() {
  return (
    <>
      <FormControlLabel
        control={<Checkbox size="small" />}
        label="Small"
      />
      <FormControlLabel
        control={<Checkbox size="medium" />}
        label="Medium"
      />
    </>
  );
}`,
    },
    {
      title: "컬러 토큰",
      section: "variants",
      render: CheckboxColorsExample,
      code: `import { Checkbox, FormControlLabel } from "@/core/design-systems";

export function CheckboxColorsExample() {
  return (
    <>
      <FormControlLabel
        control={<Checkbox color="augment/gray/800" defaultChecked />}
        label="augment/gray/800 (기본)"
      />
      <FormControlLabel
        control={<Checkbox color="augment/primary/600" defaultChecked />}
        label="augment/primary/600"
      />
      <FormControlLabel
        control={<Checkbox color="augment/red/500" defaultChecked />}
        label="augment/red/500"
      />
      <FormControlLabel
        control={<Checkbox color="augment/green/500" defaultChecked />}
        label="augment/green/500"
      />
      <FormControlLabel
        control={<Checkbox color="augment/blue/500" defaultChecked />}
        label="augment/blue/500"
      />
    </>
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
        note: "체크박스를 span 요소로 렌더링하여 버튼 동작을 제거합니다.",
      },
      {
        prop: "icon",
        customValue: "<DesignIcon variant='CheckboxOutline' />",
        muiDefault: "기본 체크 아이콘",
        note: "DesignIcon 컴포넌트를 사용하여 커스텀 아이콘을 적용합니다.",
      },
      {
        prop: "checkedIcon",
        customValue: "<DesignIcon variant='CheckboxFill' />",
        muiDefault: "기본 체크된 아이콘",
        note: "체크된 상태의 커스텀 아이콘을 적용합니다.",
      },
      {
        prop: "indeterminateIcon",
        customValue: "<DesignIcon variant='CheckboxIndeterminate' />",
        muiDefault: "기본 중간 상태 아이콘",
        note: "중간 상태의 커스텀 아이콘을 적용합니다.",
      },
      {
        prop: "color",
        customValue: "'augment/gray/800'",
        muiDefault: "'primary'",
        note: "augment 컬러 토큰을 사용하여 인터랙티브 요소의 색상을 관리합니다.",
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
      {
        prop: "size",
        customValue: "'medium'",
        muiDefault: "'medium'",
        note: "기본값은 동일하지만 명시적으로 설정하여 일관성을 유지합니다.",
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
          "DesignIcon을 사용하여 체크박스의 아이콘을 커스터마이징합니다. CheckboxOutline, CheckboxFill, CheckboxIndeterminate variant를 사용합니다.",
      },
      {
        description:
          "size별로 아이콘 크기를 조정합니다. small: 20px, medium: 24px",
        code: "checkboxSizes(theme)",
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
          "augment/gray/800 컬러 토큰을 사용하여 체크박스의 활성 상태 색상을 관리합니다.",
      },
    ],
  },
};

