import { ComponentDetailConfig } from "./types";
import {
  TextFieldBasicExample,
  TextFieldVariantsExample,
} from "@/features/showcase/lib/examples/text-field-examples";

export const textFieldConfig: ComponentDetailConfig = {
  slug: "text-field",
  designNote: [
    "inputs 카테고리 컴포넌트들은 augment 컬러 토큰(예: augment/gray/800)을 활용해 텍스트 입력 같은 인터랙티브 요소의 색상을 관리합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: TextFieldBasicExample,
      code: `import { TextField } from "@/core/design-systems";

export function TextFieldExample() {
  return (
    <>
      <TextField
        label="Label"
        placeholder="Placeholder"
        variant="outlined"
        size="small"
      />
      <TextField
        label="Success"
        placeholder="입력이 완료된 필드"
        variant="outlined"
        success
        size="small"
      />
      <TextField
        label="Error"
        placeholder="오류가 있는 필드"
        variant="outlined"
        error
        size="small"
      />
    </>
  );
}`,
    },
    {
      title: "Variants",
      section: "variants",
      render: TextFieldVariantsExample,
      code: `import { TextField } from "@/core/design-systems";

export function TextFieldVariantsExample() {
  return (
    <>
      <TextField
        label="Outlined"
        placeholder="Outlined variant"
        variant="outlined"
        size="small"
      />
      <TextField
        label="Filled"
        placeholder="Filled variant"
        variant="filled"
        size="small"
      />
      <TextField
        label="Standard"
        placeholder="Standard variant"
        variant="standard"
        size="small"
      />
    </>
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
          "성공 상태를 표현하는 플래그입니다. helperText와 함께 사용하면 성공 아이콘과 메시지를 함께 보여줄 수 있습니다.",
      },
      {
        name: "helperText",
        type: "{ key: string; withIcon: boolean; value: string; }[]",
        description:
          "폼 필드 하단에 표시되는 헬퍼 텍스트 목록입니다. withIcon이 true인 경우 상태에 따라 다른 아이콘(성공/에러/정보 등)이 함께 렌더링됩니다.",
      },
      {
        name: "slotProps.select",
        type: "SelectProps",
        description:
          "select TextField에서 내부 Select 컴포넌트에 전달할 slot props입니다. 옵션 렌더링, 메뉴 동작 등을 세밀하게 제어할 수 있습니다.",
      },
      {
        name: "slotProps.formHelperText",
        type: "FormHelperTextProps",
        description:
          "폼 헬퍼 텍스트 컨테이너에 전달되는 slot props입니다. 마진, 색상, 배치를 커스터마이징할 수 있습니다.",
      },
    ],
    defaultValueChanges: [
      {
        prop: "variant",
        customValue: "'outlined'",
        muiDefault: "'outlined'",
        note: "core에서는 outlined를 기본 variant로 유지하면서 스타일을 재정의합니다.",
      },
      {
        prop: "size",
        customValue: "'small'",
        muiDefault: "'medium'",
      },
      {
        prop: "fullWidth",
        customValue: "true",
        muiDefault: "false",
      },
      {
        prop: "multiline",
        customValue: "false",
        muiDefault: "false",
        note: "텍스트 영역 전용으로 사용할 때만 true로 변경합니다.",
      },
      {
        prop: "minRows / maxRows",
        customValue: "4.92",
        note: "디자인 스펙에 맞춘 고정 높이 텍스트 영역.",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: ["outlined", "filled", "standard"],
      },
      {
        type: "size",
        values: ["small", "medium", "large", "customA", "customB"],
      },
    ],
    styleChanges: [
      {
        description:
          "label과 input, textarea, select 등에 body3 타이포그래피 토큰(body/body3)을 적용합니다.",
        code: "theme.typography['body/body3']",
      },
      {
        description:
          "outlined variant에서 필드셋(border-radius 8px)과 hover 시 borderColor를 gray/900으로 변경합니다.",
      },
      {
        description:
          "filled variant에서 상단만 borderRadius 8px로 적용하고 배경색을 gray/50으로 고정합니다.",
      },
      {
        description:
          "focus 상태에서 label과 borderColor를 primary/600으로 강조합니다.",
      },
      {
        description:
          "disabled 상태에서 label, 텍스트, 플레이스홀더, borderColor를 모두 gray/200으로 통일합니다.",
      },
      {
        description:
          "error 상태에서 label과 borderColor를 red/500으로 변경하고 하단 border까지 일관되게 적용합니다.",
      },
      {
        description:
          "hiddenLabel=true인 경우 label과 legend를 시각적으로 숨기고, 접근성용으로만 유지합니다.",
      },
    ],
  },
};
