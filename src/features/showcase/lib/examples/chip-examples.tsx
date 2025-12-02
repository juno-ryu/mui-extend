"use client";

import { Stack, Chip, DesignIcon } from "@/core/design-systems";

export function ChipBasicExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <Chip label="기본 칩" />
      <Chip label="아이콘 칩" icon={<DesignIcon variant="Star" />} />
      <Chip
        label="삭제 가능"
        onDelete={() => {
          // noop
        }}
      />
      <Chip
        label="아이콘 + 삭제"
        icon={<DesignIcon variant="Star" />}
        onDelete={() => {
          // noop
        }}
      />
    </Stack>
  );
}

export function ChipVariantsExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Filled (기본값)" variant="filled" />
        <Chip label="Outlined" variant="outlined" />
      </Stack>
    </Stack>
  );
}

export function ChipSizesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        <Chip label="Extra Small" size="extraSmall" />
        <Chip label="Small (기본값)" size="small" />
        <Chip label="Medium" size="medium" />
      </Stack>
    </Stack>
  );
}

export function ChipColorsExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Gray 800 (기본값)" color="augment/gray/800" />
        <Chip label="Primary 600" color="augment/primary/600" />
        <Chip label="Cyan 500" color="augment/cyan/500" />
        <Chip label="Yellow 500" color="augment/yellow/500" />
        <Chip label="Red 500" color="augment/red/500" />
      </Stack>
    </Stack>
  );
}

