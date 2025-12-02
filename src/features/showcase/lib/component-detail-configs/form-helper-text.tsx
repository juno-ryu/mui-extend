import { ComponentDetailConfig } from "./types";
import {
  FormHelperTextStatesExample,
  FormHelperTextWithTextFieldExample,
  FormHelperTextMultiLineExample,
} from "@/features/showcase/lib/examples/form-helper-text-examples";

export const formHelperTextConfig: ComponentDetailConfig = {
  slug: "form-helper-text",
  designNote: [
    "FormHelperText는 입력 컴포넌트 하단의 안내/에러 텍스트를 위한 헬퍼로, 여러 줄/여러 메시지와 아이콘이 들어가는 레이아웃을 고려해 커스터마이징되었습니다.",
    "success 상태를 위한 전용 클래스와 상태별 색상(state/success, state/danger, gray/400)을 사용해, 텍스트 상태에 따라 일관된 색상을 제공합니다.",
  ],
  usageExamples: [
    {
      title: "상태별 헬퍼 텍스트",
      section: "basic",
      render: FormHelperTextStatesExample,
      code: `import { Stack, FormHelperText } from "@/core/design-systems";

export function FormHelperTextStatesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <FormHelperText>기본 헬퍼 텍스트</FormHelperText>
      <FormHelperText success>성공 상태 헬퍼 텍스트</FormHelperText>
      <FormHelperText error>에러 상태 헬퍼 텍스트</FormHelperText>
    </Stack>
  );
}`,
    },
    {
      title: "TextField와 함께 사용 (아이콘 + 상태 색상)",
      section: "variants",
      render: FormHelperTextWithTextFieldExample,
      code: `import { Stack, TextField } from "@/core/design-systems";

export function FormHelperTextWithTextFieldExample() {
  return (
    <Stack direction="column" spacing={2}>
      <TextField
        label="Success"
        variant="outlined"
        success
        helperText={[
          {
            key: "success",
            withIcon: true,
            value: "입력이 완료되었습니다.",
          },
        ]}
      />
      <TextField
        label="Error"
        variant="outlined"
        error
        helperText={[
          {
            key: "error",
            withIcon: true,
            value: "오류가 발생했습니다.",
          },
        ]}
      />
    </Stack>
  );
}`,
    },
    {
      title: "여러 줄 헬퍼 텍스트",
      section: "variants",
      render: FormHelperTextMultiLineExample,
      code: `import { Stack, FormHelperText } from "@/core/design-systems";

export function FormHelperTextMultiLineExample() {
  return (
    <Stack direction="column" spacing={1}>
      <FormHelperText>첫 번째 헬퍼 텍스트입니다.</FormHelperText>
      <FormHelperText>두 번째 헬퍼 텍스트입니다.</FormHelperText>
      <FormHelperText>세 번째 헬퍼 텍스트입니다.</FormHelperText>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    addedProps: [
      {
        name: "success",
        type: "boolean",
        description:
          "성공 상태를 나타내는 헬퍼 텍스트인지 여부를 지정합니다. 내부적으로 success 전용 클래스(MuiFormHelperText-success)를 생성해 상태 색상을 변경합니다.",
      },
    ],
    defaultValueChanges: [
      {
        prop: "component",
        customValue: "'span'",
        muiDefault: "'p'",
        note: "헬퍼 텍스트를 인라인 문맥에 더 잘 어울리는 span 요소로 렌더링합니다.",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: ["standard", "outlined", "filled", "customA", "customB"],
      },
    ],
    styleChanges: [
      {
        description:
          "헬퍼 텍스트를 flex row 레이아웃으로 구성하고 gap 4px을 적용해 텍스트와 아이콘 간 간격을 정리했습니다.",
        code: "display: 'flex', flexDirection: 'row', gap: '4px'",
      },
      {
        description:
          "내용이 없는 경우 완전히 숨기고, 중첩된 FormHelperText가 있는 경우 column 레이아웃으로 전환해 여러 줄 헬퍼 텍스트를 자연스럽게 쌓이도록 했습니다.",
        code: "'&:empty': { display: 'none' }, '&:has(&)': { display: 'flex', flexDirection: 'column', gap: '4px' }",
      },
      {
        description:
          "TextField / List 컨텍스트에 맞는 padding을 CSS 변수로 정의해, 입력 필드/리스트와의 간격을 일관되게 맞췄습니다.",
        code: "--form-helper-text-textField-padding-top/left, --form-helper-text-list-padding-top/left",
      },
      {
        description:
          "DesignIcon을 사용할 때 아이콘 크기를 16px로 고정하고 color를 currentColor로 맞춰 텍스트 색상과 동기화했습니다.",
        code: ".MuiDesignIcon-root: { width: '16px', color: 'currentColor' }",
      },
      {
        description:
          "TextField, MenuItem의 상태와 연동하여 disabled, error, success에서 각각 gray/400, state/danger, state/success 팔레트를 사용합니다.",
        code: "theme.palette['gray/400'], theme.palette['state/danger'], theme.palette['state/success']",
      },
    ],
  },
};
