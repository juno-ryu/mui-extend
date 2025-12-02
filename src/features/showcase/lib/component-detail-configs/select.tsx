import { ComponentDetailConfig } from "./types";
import {
  SelectBasicExample,
  SelectWithAdornmentExample,
  SelectVariantsExample,
  SelectStatesExample,
} from "@/features/showcase/lib/examples/select-examples";

export const selectConfig: ComponentDetailConfig = {
  slug: "select",
  isAugmentColor: true,
  designNote: [
    "Select 컴포넌트는 DesignIcon의 ChevronDownBold variant를 드롭다운 아이콘으로 사용합니다.",
    "adornment prop을 통해 MenuItem에 아이콘을 전달할 수 있습니다.",
    "Select 컴포넌트는 augment 컬러 토큰(예: augment/gray/800)을 활용해 버튼/입력 같은 인터랙티브 요소의 색상을 관리합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: SelectBasicExample,
      code: `import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, Stack } from "@/core/design-systems";

export function SelectExample() {
  const [value, setValue] = useState("");

  return (
    <FormControl size="small">
      <InputLabel>기본 선택</InputLabel>
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="기본 선택"
        sx={{ width: "300px" }}
        color="augment/primary/600"
      >
        <MenuItem value="option1">옵션 1</MenuItem>
        <MenuItem value="option2">옵션 2</MenuItem>
        <MenuItem value="option3">옵션 3</MenuItem>
      </Select>
    </FormControl>
  );
}`,
    },
    {
      title: "Adornment 사용",
      section: "variants",
      render: SelectWithAdornmentExample,
      code: `import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, Stack } from "@/core/design-systems";

export function SelectWithAdornmentExample() {
  const [value, setValue] = useState("");

  return (
    <FormControl size="small">
      <InputLabel>아이콘 포함 선택</InputLabel>
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="아이콘 포함 선택"
        sx={{ width: "300px" }}
        color="augment/primary/600"
        adornment={{
          startIcon: "Star",
          selectedStartIcon: "StarFill",
        }}
      >
        <MenuItem value="option1">옵션 1</MenuItem>
        <MenuItem value="option2">옵션 2</MenuItem>
        <MenuItem value="option3">옵션 3</MenuItem>
      </Select>
    </FormControl>
  );
}`,
    },
    {
      title: "Variants",
      section: "variants",
      render: SelectVariantsExample,
      code: `import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, Stack } from "@/core/design-systems";

export function SelectVariantsExample() {
  const [value, setValue] = useState("");

  return (
    <Stack direction="column" spacing={2}>
      <FormControl size="small">
        <InputLabel>Outlined</InputLabel>
        <Select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Outlined"
          variant="outlined"
          sx={{ width: "300px" }}
          color="augment/primary/600"
        >
          <MenuItem value="option1">옵션 1</MenuItem>
          <MenuItem value="option2">옵션 2</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}`,
    },
    {
      title: "States",
      section: "variants",
      render: SelectStatesExample,
      code: `import { Select, MenuItem, FormControl, InputLabel, Stack } from "@/core/design-systems";

export function SelectStatesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <FormControl size="small">
        <InputLabel>정상 상태</InputLabel>
        <Select 
          label="정상 상태" 
          defaultValue="option1" 
          color="augment/primary/600" 
          sx={{ width: "300px" }}
        >
          <MenuItem value="option1">옵션 1</MenuItem>
          <MenuItem value="option2">옵션 2</MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small">
        <InputLabel>비활성화</InputLabel>
        <Select 
          label="비활성화" 
          disabled 
          defaultValue="option1" 
          color="augment/primary/600" 
          sx={{ width: "300px" }}
        >
          <MenuItem value="option1">옵션 1</MenuItem>
          <MenuItem value="option2">옵션 2</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    addedProps: [
      {
        name: "adornment",
        type: "MenuItemProps['adornment']",
        description:
          "MenuItem에 전달할 아이콘 정보입니다. startIcon, endIcon, selectedStartIcon, selectedEndIcon을 설정할 수 있습니다.",
      },
    ],
    defaultValueChanges: [
      {
        prop: "native",
        customValue: "false",
        muiDefault: "false",
        note: "기본값은 동일하지만 명시적으로 설정하여 일관성을 유지합니다.",
      },
      {
        prop: "multiple",
        customValue: "false",
        muiDefault: "false",
        note: "기본값은 동일하지만 명시적으로 설정하여 일관성을 유지합니다.",
      },
      {
        prop: "IconComponent",
        customValue: "<DesignIcon variant='ChevronDownBold' />",
        muiDefault: "기본 드롭다운 아이콘",
        note: "DesignIcon의 ChevronDownBold variant를 드롭다운 아이콘으로 사용합니다.",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: ["filled", "outlined", "standard"],
      },
      {
        type: "size",
        values: ["small", "medium", "large", "customA", "customB"],
      },
    ],
    styleChanges: [
      {
        description:
          "드롭다운 아이콘의 크기를 24px로 고정하고 색상을 gray/800으로 설정합니다.",
        code: "width: '24px', color: theme.palette['gray/800']",
      },
      {
        description:
          "아이콘을 수직 중앙 정렬하고, 열린 상태에서는 180도 회전합니다.",
        code: "top: '50%', transform: 'translateY(-50%)', rotate: '180deg'",
      },
    ],
  },
};
