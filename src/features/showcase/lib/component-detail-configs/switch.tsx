import { ComponentDetailConfig } from "./types";
import {
  SwitchBasicExample,
  SwitchSizesExample,
  SwitchColorsExample,
} from "@/features/showcase/lib/examples/switch-examples";

export const switchConfig: ComponentDetailConfig = {
  slug: "switch",
  designNote: [
    "inputs 카테고리 컴포넌트들은 augment 컬러 토큰(예: augment/gray/800)을 활용해 텍스트 입력 같은 인터랙티브 요소의 색상을 관리합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: SwitchBasicExample,
      code: `import { Switch, FormControlLabel } from "@/core/design-systems";

export function SwitchExample() {
  return (
    <>
      <FormControlLabel
        control={<Switch />}
        label="기본 스위치"
      />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="켜진 상태"
      />
      <FormControlLabel
        control={<Switch disabled />}
        label="비활성화"
      />
      <FormControlLabel
        control={<Switch disabled checked />}
        label="비활성화 + 켜짐"
      />
    </>
  );
}`,
    },
    {
      title: "Sizes",
      section: "variants",
      render: SwitchSizesExample,
      code: `import { Switch, FormControlLabel } from "@/core/design-systems";

export function SwitchSizesExample() {
  return (
    <>
      <FormControlLabel
        control={<Switch size="small" defaultChecked />}
        label="Small"
      />
      <FormControlLabel
        control={<Switch size="medium" defaultChecked />}
        label="Medium"
      />
    </>
  );
}`,
    },
    {
      title: "컬러 토큰",
      section: "variants",
      render: SwitchColorsExample,
      code: `import { Switch, FormControlLabel } from "@/core/design-systems";

export function SwitchColorsExample() {
  return (
    <>
      <FormControlLabel
        control={<Switch color="black" defaultChecked />}
        label="black (기본)"
      />
      <FormControlLabel
        control={<Switch color="augment/primary/600" defaultChecked />}
        label="augment/primary/600"
      />
      <FormControlLabel
        control={<Switch color="augment/red/500" defaultChecked />}
        label="augment/red/500"
      />
      <FormControlLabel
        control={<Switch color="augment/green/500" defaultChecked />}
        label="augment/green/500"
      />
      <FormControlLabel
        control={<Switch color="augment/blue/500" defaultChecked />}
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
        note: "스위치를 span 요소로 렌더링하여 버튼 동작을 제거합니다.",
      },
      {
        prop: "color",
        customValue: "'black'",
        muiDefault: "'primary'",
        note: "기본 색상을 black으로 설정하여 더 중립적인 디자인을 제공합니다.",
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
          "기본 색상(black)인 경우 track 배경색을 black으로 설정하고 opacity 0.4를 적용합니다.",
        code: "theme.palette['black'], opacity: 0.4",
      },
      {
        description:
          "체크된 상태에서 기본 색상(black)인 경우 inherit 색상을 사용하고, 그 외에는 지정된 color prop 값을 사용합니다.",
      },
      {
        description:
          "체크된 상태의 track 배경색은 기본 색상인 경우 opacity 0.6, 그 외에는 0.3을 적용합니다.",
      },
      {
        description:
          "disabled 상태에서 opacity 0.3을 적용하여 비활성화된 상태를 명확히 표시합니다.",
      },
      {
        description:
          "disabled 상태의 track은 opacity 0.6을 적용합니다.",
      },
      {
        description:
          "augment 컬러 토큰을 color prop으로 전달하면 해당 색상이 적용됩니다.",
      },
    ],
  },
};

