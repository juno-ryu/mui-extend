import { ComponentDetailConfig } from "./types";
import {
  InputAdornmentBasicExample,
  InputAdornmentWithTextExample,
  InputAdornmentStatesExample,
} from "@/features/showcase/lib/examples/input-adornment-examples";

export const inputAdornmentConfig: ComponentDetailConfig = {
  slug: "input-adornment",
  designNote: [
    "InputAdornment는 TextField의 시작(start) 또는 끝(end) 위치에 아이콘이나 텍스트를 표시하는 데 사용됩니다.",
    "DesignIcon과 Typography의 색상과 크기를 일관되게 관리하여 통일된 디자인을 제공합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: InputAdornmentBasicExample,
      code: `import { TextField, InputAdornment, DesignIcon, Stack } from "@/core/design-systems";

export function InputAdornmentExample() {
  return (
    <Stack direction="column" spacing={2}>
      <TextField
        label="시작 위치"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DesignIcon variant="Search" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="끝 위치"
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <DesignIcon variant="Close" />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}`,
    },
    {
      title: "텍스트와 함께 사용",
      section: "variants",
      render: InputAdornmentWithTextExample,
      code: `import { TextField, InputAdornment, DesignIcon, Stack } from "@/core/design-systems";

export function InputAdornmentWithTextExample() {
  return (
    <Stack direction="column" spacing={2}>
      <TextField
        label="텍스트 어드온먼트"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">₩</InputAdornment>
          ),
        }}
      />
      <TextField
        label="텍스트 + 아이콘"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DesignIcon variant="Search" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">원</InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}`,
    },
    {
      title: "States",
      section: "variants",
      render: InputAdornmentStatesExample,
      code: `import { TextField, InputAdornment, DesignIcon, Stack } from "@/core/design-systems";

export function InputAdornmentStatesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <TextField
        label="정상 상태"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DesignIcon variant="Search" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="비활성화"
        variant="outlined"
        size="small"
        disabled
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DesignIcon variant="Search" />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}`,
    },
  ],
  customization: {
    addedProps: [],
    defaultValueChanges: [
      {
        prop: "component",
        customValue: "'div'",
        muiDefault: "'div'",
        note: "기본값은 동일하지만 명시적으로 설정하여 일관성을 유지합니다.",
      },
    ],
    additionalVariants: [],
    styleChanges: [
      {
        description:
          "DesignIcon의 크기를 24px로 고정하고 색상을 gray/800으로 설정합니다.",
        code: "width: '24px', color: theme.palette['gray/800']",
      },
      {
        description:
          "Typography의 폰트 굵기를 500으로 설정하고 색상을 gray/600으로 설정합니다.",
        code: "fontWeight: 500, color: theme.palette['gray/600']",
      },
      {
        description:
          "TextField가 disabled 상태일 때 DesignIcon과 Typography 색상을 gray/200으로 변경합니다.",
        code: "theme.palette['gray/200']",
      },
      {
        description:
          "특정 조건(notranslate가 마지막 자식인 경우)에서 InputAdornment를 숨깁니다.",
        code: "&:has(> .notranslate:last-child) { display: 'none' }",
      },
      {
        description:
          "flex: 'none'과 maxHeight: 'inherit'를 설정하여 레이아웃을 안정적으로 유지합니다.",
      },
    ],
  },
};

