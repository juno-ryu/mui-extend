"use client";

import { Stack, LinearProgress, Typography } from "@/core/design-systems";

export function LinearProgressBasicExample() {
  return (
    <Stack direction="column" spacing={2} width="100%">
      <LinearProgress />
      <LinearProgress variant="determinate" value={25} />
      <LinearProgress variant="determinate" value={50} />
      <LinearProgress variant="determinate" value={75} />
    </Stack>
  );
}

export function LinearProgressColorsExample() {
  return (
    <Stack direction="column" spacing={2} width="100%">
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Primary</Typography>
        <LinearProgress color="primary" />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Secondary</Typography>
        <LinearProgress color="secondary" />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Success</Typography>
        <LinearProgress color="success" />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Error</Typography>
        <LinearProgress color="error" />
      </Stack>
    </Stack>
  );
}

