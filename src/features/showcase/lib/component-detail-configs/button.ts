import { ComponentDetailConfig } from "./types";
import {
  ButtonBasicExample,
  ButtonVariantsExample,
} from "@/features/showcase/lib/examples/button-examples";

export const buttonConfig: ComponentDetailConfig = {
  slug: "button",
  isAugmentColor: true,
  designNote: [
    "Button 컴포넌트는 augment 컬러 토큰(예: augment/gray/800)을 활용해 버튼/입력 같은 인터랙티브 요소의 색상을 관리합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: ButtonBasicExample,
      code: `import { Button } from "@/core/design-systems";

export function Example() {
  return (
    <>
      <Button variant="contained" color="augment/gray/800">
        Button
      </Button>
      <Button variant="contained" color="augment/primary/600">
        Button
      </Button>
      <Button variant="contained" color="augment/red/500">
        Button
      </Button>
      <Button variant="contained" color="augment/green/600">
        Button
      </Button>
    </>
  );
}`,
    },
    {
      title: "Variants",
      section: "variants",
      render: ButtonVariantsExample,
      code: `import { Button } from "@/core/design-systems";

export function ColorExample() {
  return (
    <>
      <Button variant="contained" color="augment/gray/800">
        Button
      </Button>
      <Button variant="outlined" color="augment/gray/800">
        Button
      </Button>
      <Button variant="text" color="augment/gray/800">
        Button
      </Button>
    </>
  );
}`,
    },
  ],
  customization: {
    addedProps: [
      {
        name: "inactivated",
        type: "boolean",
        description:
          "비활성화 상태를 제어합니다. disabled와 달리 시각적으로는 활성화 상태를 유지하면서 상호작용만 비활성화합니다.",
      },
      {
        name: "frontBumper",
        type: "'thick' | 'thin' | 'both'",
        description:
          "버튼 앞쪽(왼쪽) 여백을 제어합니다. 아이콘과 텍스트 사이 간격을 조정할 때 사용합니다.",
      },
      {
        name: "backBumper",
        type: "'thick' | 'thin' | 'both'",
        description:
          "버튼 뒤쪽(오른쪽) 여백을 제어합니다. 텍스트와 아이콘 사이 간격을 조정할 때 사용합니다.",
      },
      {
        name: "relaxBorder",
        type: "boolean",
        description:
          "테두리 색상을 완화합니다. outlined variant에서 테두리 투명도를 낮춥니다.",
      },
    ],
    defaultValueChanges: [
      {
        prop: "variant",
        customValue: "'contained'",
        muiDefault: "'text'",
      },
      {
        prop: "size",
        customValue: "'small'",
        muiDefault: "'medium'",
      },
      {
        prop: "color",
        customValue: "'augment/gray/800'",
        note: "커스텀 색상 팔레트",
      },
      {
        prop: "disableElevation",
        customValue: "true",
        muiDefault: "false",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: ["customA", "customB"],
      },
      {
        type: "size",
        values: ["extraLarge", "customA", "customB"],
      },
    ],
    styleChanges: [
      {
        description: "children을 span으로 감싸서 커스텀 스타일링 적용",
        code: "span",
      },
      {
        description: "텍스트 변환 제거",
        code: "textTransform: 'none'",
      },
      {
        description: "커스텀 색상 팔레트 사용 (augment/gray/800 등)",
      },
      {
        description: "Ripple 애니메이션 커스터마이징",
      },
      {
        description: "contained variant에 기본 테두리 추가",
      },
    ],
  },
};
