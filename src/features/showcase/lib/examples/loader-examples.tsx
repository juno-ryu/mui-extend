"use client";

import { Stack, Loader, Typography } from "@/core/design-systems";

export function LoaderBasicExample() {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack direction="column" spacing={1} alignItems="center">
        <Loader variant="dot" color="augment/primary/600" />
        <Typography variant="label/label2">Dot (기본)</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <Loader variant="circle" color="augment/primary/600" />
        <Typography variant="label/label2">Circle</Typography>
      </Stack>
    </Stack>
  );
}

export function LoaderColorsExample() {
  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="row" spacing={4} alignItems="center">
        <Loader variant="dot" color="augment/primary/600" />
        <Loader variant="dot" color="augment/cyan/500" />
        <Loader variant="dot" color="augment/yellow/500" />
        <Loader variant="dot" color="augment/red/500" />
      </Stack>
      <Stack direction="row" spacing={4} alignItems="center">
        <Loader variant="circle" color="augment/primary/600" />
        <Loader variant="circle" color="augment/cyan/500" />
        <Loader variant="circle" color="augment/yellow/500" />
        <Loader variant="circle" color="augment/red/500" />
      </Stack>
    </Stack>
  );
}

export function LoaderSizesExample() {
  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="row" spacing={4} alignItems="center">
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="dot" color="augment/primary/600" size={4} />
          <Typography variant="label/label2">4px</Typography>
        </Stack>
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="dot" color="augment/primary/600" size={8} />
          <Typography variant="label/label2">8px (기본)</Typography>
        </Stack>
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="dot" color="augment/primary/600" size={12} />
          <Typography variant="label/label2">12px</Typography>
        </Stack>
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="dot" color="augment/primary/600" size={16} />
          <Typography variant="label/label2">16px</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={4} alignItems="center">
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="circle" color="augment/primary/600" size={16} />
          <Typography variant="label/label2">16px</Typography>
        </Stack>
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="circle" color="augment/primary/600" size={24} />
          <Typography variant="label/label2">24px</Typography>
        </Stack>
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="circle" color="augment/primary/600" size={32} />
          <Typography variant="label/label2">32px</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

