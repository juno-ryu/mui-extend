"use client";

import { TextField } from "@/core/design-systems";

export function TextFieldBasicExample() {
  return (
    <>
      <TextField label="Label" placeholder="Placeholder" variant="outlined" />
      <TextField
        label="Success"
        placeholder="입력이 완료된 필드"
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
        placeholder="오류가 있는 필드"
        variant="outlined"
        error
        helperText={[
          {
            key: "error",
            withIcon: true,
            value: "오류 발생 시 표시되는 헬퍼 텍스트",
          },
        ]}
      />
    </>
  );
}

export function TextFieldVariantsExample() {
  return (
    <>
      <TextField
        label="Outlined"
        placeholder="Outlined variant"
        variant="outlined"
      />
      <TextField label="Filled" placeholder="Filled variant" variant="filled" />
      <TextField
        label="Standard"
        placeholder="Standard variant"
        variant="standard"
      />
    </>
  );
}
