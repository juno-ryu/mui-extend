"use client";

import { Stack, FormHelperText, TextField } from "@/core/design-systems";

export function FormHelperTextStatesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <FormHelperText>기본 헬퍼 텍스트</FormHelperText>
      <FormHelperText success>성공 상태 헬퍼 텍스트</FormHelperText>
      <FormHelperText error>에러 상태 헬퍼 텍스트</FormHelperText>
    </Stack>
  );
}

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
}

export function FormHelperTextMultiLineExample() {
  return (
    <Stack direction="column" spacing={1}>
      <FormHelperText>첫 번째 헬퍼 텍스트입니다.</FormHelperText>
      <FormHelperText>두 번째 헬퍼 텍스트입니다.</FormHelperText>
      <FormHelperText>세 번째 헬퍼 텍스트입니다.</FormHelperText>
    </Stack>
  );
}


