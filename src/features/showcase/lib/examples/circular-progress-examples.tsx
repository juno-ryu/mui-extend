"use client";

import { Stack, CircularProgress, Typography } from "@/core/design-systems";

export function CircularProgressBasicExample() {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <CircularProgress />
      <CircularProgress size={24} />
      <CircularProgress size={32} />
      <CircularProgress size={48} />
    </Stack>
  );
}

export function CircularProgressColorsExample() {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress color="augment/primary/600" />
        <Typography variant="label/label2">Primary</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress color="augment/cyan/500" />
        <Typography variant="label/label2">Cyan</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress color="augment/yellow/500" />
        <Typography variant="label/label2">Yellow</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress color="augment/red/500" />
        <Typography variant="label/label2">Red</Typography>
      </Stack>
    </Stack>
  );
}

export function CircularProgressDeterminateExample() {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress variant="determinate" value={25} />
        <Typography variant="label/label2">25%</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress variant="determinate" value={50} />
        <Typography variant="label/label2">50%</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress variant="determinate" value={75} />
        <Typography variant="label/label2">75%</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress variant="determinate" value={100} />
        <Typography variant="label/label2">100%</Typography>
      </Stack>
    </Stack>
  );
}

