"use client";

import { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
} from "@/core/design-systems";

export function SelectBasicExample() {
  const [value, setValue] = useState("");

  return (
    <Stack direction="column" spacing={2}>
      <FormControl size={"small" as any}>
        <InputLabel>기본 선택</InputLabel>
        <Select
          value={value as any}
          onChange={(e) => setValue(e.target.value as any)}
          label="기본 선택"
          color="augment/primary/600"
          sx={{ width: "300px" }}
        >
          <MenuItem value="option1">옵션 1</MenuItem>
          <MenuItem value="option2">옵션 2</MenuItem>
          <MenuItem value="option3">옵션 3</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export function SelectWithAdornmentExample() {
  const [value, setValue] = useState("");

  return (
    <Stack direction="column" spacing={2}>
      <FormControl size={"small" as any}>
        <InputLabel>아이콘 포함 선택</InputLabel>
        <Select
          value={value as any}
          onChange={(e) => setValue(e.target.value as any)}
          label="아이콘 포함 선택"
          adornment={{
            startIcon: "Star",
          }}
          sx={{ width: "300px" }}
          color="augment/primary/600"
        >
          <MenuItem value="option1">옵션 1</MenuItem>
          <MenuItem value="option2">옵션 2</MenuItem>
          <MenuItem value="option3">옵션 3</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export function SelectVariantsExample() {
  const [value, setValue] = useState("");

  return (
    <Stack direction="column" spacing={2}>
      <FormControl size={"small" as any}>
        <InputLabel>Outlined</InputLabel>
        <Select
          value={value as any}
          onChange={(e) => setValue(e.target.value as any)}
          label="Outlined"
          variant="outlined"
          sx={{ width: "300px" }}
          color="augment/primary/600"
        >
          <MenuItem value="option1">옵션 1</MenuItem>
          <MenuItem value="option2">옵션 2</MenuItem>
        </Select>
      </FormControl>
      <FormControl size={"small" as any}>
        <InputLabel>Filled</InputLabel>
        <Select
          value={value as any}
          onChange={(e) => setValue(e.target.value as any)}
          label="Filled"
          variant="filled"
          color="augment/primary/600"
        >
          <MenuItem value="option1">옵션 1</MenuItem>
          <MenuItem value="option2">옵션 2</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export function SelectStatesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <FormControl size={"small" as any}>
        <InputLabel>정상 상태</InputLabel>
        <Select
          label="정상 상태"
          defaultValue={"option1" as any}
          color="augment/primary/600"
          sx={{ width: "300px" }}
        >
          <MenuItem value="option1">옵션 1</MenuItem>
          <MenuItem value="option2">옵션 2</MenuItem>
        </Select>
      </FormControl>
      <FormControl size={"small" as any}>
        <InputLabel>비활성화</InputLabel>
        <Select
          label="비활성화"
          disabled
          color="augment/primary/600"
          defaultValue={"option1" as any}
          sx={{ width: "300px" }}
        >
          <MenuItem value="option1">옵션 1</MenuItem>
          <MenuItem value="option2">옵션 2</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
