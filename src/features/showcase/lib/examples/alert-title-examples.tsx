"use client";

import { Stack, Alert, AlertTitle, Typography } from "@/core/design-systems";

export function AlertTitleBasicExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Alert color="augment/cyan/500">
        <AlertTitle>정보 알림</AlertTitle>
        이것은 제목이 있는 알림입니다. AlertTitle은 component: &apos;strong&apos;, fontSize:
        &apos;1.04em&apos;, fontWeight: 700이 기본값으로 설정되어 있습니다.
      </Alert>
      <Alert color="augment/yellow/500">
        <AlertTitle>경고 알림</AlertTitle>
        경고 메시지에 제목을 추가할 수 있습니다.
      </Alert>
      <Alert color="augment/red/500">
        <AlertTitle>에러 알림</AlertTitle>
        에러 메시지에도 제목을 사용할 수 있습니다.
      </Alert>
    </Stack>
  );
}

export function AlertTitleVariantsExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Alert color="augment/cyan/500" variant="standard">
        <AlertTitle>Standard Variant</AlertTitle>
        Standard variant와 함께 사용되는 AlertTitle입니다.
      </Alert>
      <Alert color="augment/cyan/500" variant="filled">
        <AlertTitle>Filled Variant</AlertTitle>
        Filled variant와 함께 사용되는 AlertTitle입니다.
      </Alert>
      <Alert color="augment/cyan/500" variant="outlined">
        <AlertTitle>Outlined Variant</AlertTitle>
        Outlined variant와 함께 사용되는 AlertTitle입니다.
      </Alert>
    </Stack>
  );
}

