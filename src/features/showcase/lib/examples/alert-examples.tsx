"use client";

import { Stack, Alert, Button } from "@/core/design-systems";

export function AlertBasicExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Alert color="augment/cyan/500">정보 알림 (augment/cyan/500)</Alert>
      <Alert color="augment/yellow/500">경고 알림 (augment/yellow/500)</Alert>
      <Alert color="augment/red/500">에러 알림 (augment/red/500)</Alert>
    </Stack>
  );
}

export function AlertVariantsExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Alert color="augment/cyan/500" variant="standard">
        Standard Alert
      </Alert>
      <Alert color="augment/cyan/500" variant="filled">
        Filled Alert
      </Alert>
      <Alert color="augment/cyan/500" variant="outlined">
        Outlined Alert
      </Alert>
    </Stack>
  );
}

export function AlertSizesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Alert color="augment/cyan/500" size="small">
        Small
      </Alert>
      <Alert color="augment/cyan/500" size="medium">
        Medium
      </Alert>
      <Alert color="augment/cyan/500" size="large">
        Large
      </Alert>
      <Alert color="augment/cyan/500" size="extraLarge">
        Extra Large
      </Alert>
    </Stack>
  );
}

export function AlertWithActionExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Alert
        color="augment/red/500"
        variant="filled"
        onClose={() => {
          // noop for example
        }}
        action={
          <Button
            size="small"
            color="augment/red/500"
            variant="contained"
          >
            액션
          </Button>
        }
      >
        닫기 아이콘과 액션 버튼이 포함된 알림입니다.
      </Alert>
    </Stack>
  );
}


