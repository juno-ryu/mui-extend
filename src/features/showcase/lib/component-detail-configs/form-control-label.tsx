import { ComponentDetailConfig } from "./types";
import {
  FormControlLabelBasicExample,
  FormControlLabelPlacementExample,
  FormControlLabelStatesExample,
  FormControlLabelWithRadioGroupExample,
} from "@/features/showcase/lib/examples/form-control-label-examples";

export const formControlLabelConfig: ComponentDetailConfig = {
  slug: "form-control-label",
  designNote: [
    "FormControlLabel은 Checkbox, Switch, Radio 같은 컨트롤 컴포넌트에 레이블을 연결하는 래퍼 컴포넌트입니다.",
    "컨트롤과 레이블을 하나의 클릭 가능한 영역으로 묶어서 사용자 경험을 향상시킵니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: FormControlLabelBasicExample,
      code: `import { FormControlLabel, Checkbox, Switch, Radio, Stack } from "@/core/design-systems";

export function FormControlLabelExample() {
  return (
    <Stack direction="column" spacing={2}>
      <FormControlLabel
        control={<Checkbox />}
        label="Checkbox와 함께 사용"
      />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Switch와 함께 사용"
      />
      <FormControlLabel
        control={<Radio defaultChecked />}
        label="Radio와 함께 사용"
      />
    </Stack>
  );
}`,
    },
    {
      title: "Label Placement",
      section: "variants",
      render: FormControlLabelPlacementExample,
      code: `import { FormControlLabel, Checkbox, Stack } from "@/core/design-systems";

export function FormControlLabelPlacementExample() {
  return (
    <Stack direction="column" spacing={1}>
      <FormControlLabel
        control={<Checkbox />}
        label="end (기본)"
        labelPlacement="end"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="start"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="top"
        labelPlacement="top"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="bottom"
        labelPlacement="bottom"
      />
    </Stack>
  );
}`,
    },
    {
      title: "States",
      section: "variants",
      render: FormControlLabelStatesExample,
      code: `import { FormControlLabel, Checkbox, Stack } from "@/core/design-systems";

export function FormControlLabelStatesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="정상 상태"
      />
      <FormControlLabel
        control={<Checkbox disabled />}
        label="비활성화"
      />
      <FormControlLabel
        control={<Checkbox disabled checked />}
        label="비활성화 + 선택됨"
      />
    </Stack>
  );
}`,
    },
    {
      title: "RadioGroup과 함께 사용",
      section: "variants",
      render: FormControlLabelWithRadioGroupExample,
      code: `import { FormControlLabel, Radio, RadioGroup } from "@/core/design-systems";

export function FormControlLabelWithRadioGroupExample() {
  return (
    <RadioGroup defaultValue="option1">
      <FormControlLabel
        value="option1"
        control={<Radio />}
        label="옵션 1"
      />
      <FormControlLabel
        value="option2"
        control={<Radio />}
        label="옵션 2"
      />
      <FormControlLabel
        value="option3"
        control={<Radio />}
        label="옵션 3"
      />
    </RadioGroup>
  );
}`,
    },
  ],
  customization: {
    addedProps: [],
    defaultValueChanges: [
      {
        prop: "required",
        customValue: "false",
        muiDefault: "false",
        note: "기본값은 동일하지만 명시적으로 설정하여 일관성을 유지합니다.",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: ["labelPlacement"],
      },
    ],
    styleChanges: [
      {
        description:
          "root 요소의 margin과 padding을 0으로 설정하여 레이아웃을 더 정확하게 제어합니다.",
        code: "marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0",
      },
      {
        description:
          "asterisk(필수 표시)를 숨겨서 더 깔끔한 UI를 제공합니다.",
        code: ".MuiFormControlLabel-asterisk: { display: 'none' }",
      },
      {
        description:
          "label에 flex: '1 1 0px'를 적용하여 레이블이 남은 공간을 차지하도록 합니다.",
      },
      {
        description:
          "label에 paddingLeft: '6px'를 적용하여 컨트롤과 레이블 사이 간격을 설정합니다.",
      },
      {
        description:
          "label에 body/body5 타이포그래피 스타일을 적용합니다.",
        code: "typographyVariants['body/body5']",
      },
      {
        description:
          "label 색상을 gray/800으로 설정하여 일관된 텍스트 색상을 제공합니다.",
        code: "theme.palette['gray/800']",
      },
    ],
  },
};

