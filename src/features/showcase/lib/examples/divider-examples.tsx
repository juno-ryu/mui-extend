"use client";

import { Stack, Divider, Typography } from "@/core/design-systems";

export function DividerBasicExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="title/title5">섹션 제목</Typography>
      <Divider />
      <Typography variant="body/body5">
        Divider는 콘텐츠를 시각적으로 구분하기 위한 컴포넌트입니다.
      </Typography>
    </Stack>
  );
}

export function DividerVariantsExample() {
  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">fullWidth (기본값)</Typography>
        <Divider variant="fullWidth" />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">inset</Typography>
        <Divider variant="inset" />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">middle</Typography>
        <Divider variant="middle" />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">dash (커스텀)</Typography>
        <Divider variant="dash" />
      </Stack>
    </Stack>
  );
}

export function DividerWithTextExample() {
  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Divider variant="fullWidth" sx={{ flex: 1 }} />
        <Typography variant="label/label1" sx={{ px: 2 }}>
          OR
        </Typography>
        <Divider variant="fullWidth" sx={{ flex: 1 }} />
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="body/body5">왼쪽 콘텐츠</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body/body5">오른쪽 콘텐츠</Typography>
      </Stack>
    </Stack>
  );
}


