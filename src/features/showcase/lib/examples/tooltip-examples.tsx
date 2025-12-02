"use client";

import { Stack, Button, Tooltip, DesignIcon } from "@/core/design-systems";

export function TooltipBasicExample() {
  return (
    <Stack direction="row" spacing={2}>
      <Tooltip title="기본 툴팁">
        <Button variant="contained" color="augment/gray/800">
          Hover me
        </Button>
      </Tooltip>
      <Tooltip title="위쪽" placement="top">
        <Button variant="outlined" color="augment/gray/800">
          Top
        </Button>
      </Tooltip>
      <Tooltip title="오른쪽" placement="right">
        <Button variant="outlined" color="augment/gray/800">
          Right
        </Button>
      </Tooltip>
      <Tooltip title="아래쪽" placement="bottom">
        <Button variant="outlined" color="augment/gray/800">
          Bottom
        </Button>
      </Tooltip>
      <Tooltip title="왼쪽" placement="left">
        <Button variant="outlined" color="augment/gray/800">
          Left
        </Button>
      </Tooltip>
    </Stack>
  );
}

export function TooltipColorsExample() {
  return (
    <Stack direction="row" spacing={2}>
      <Tooltip title="Gray 700" color="augment/gray/700">
        <Button variant="contained" color="augment/gray/800">
          Gray 700
        </Button>
      </Tooltip>
      <Tooltip title="Primary 600" color="augment/primary/600">
        <Button variant="contained" color="augment/primary/600">
          Primary 600
        </Button>
      </Tooltip>
      <Tooltip title="Cyan 500" color="augment/cyan/500">
        <Button variant="contained" color="augment/cyan/500">
          Cyan 500
        </Button>
      </Tooltip>
      <Tooltip title="Yellow 500" color="augment/yellow/500">
        <Button variant="contained" color="augment/yellow/500">
          Yellow 500
        </Button>
      </Tooltip>
      <Tooltip title="Red 500" color="augment/red/500">
        <Button variant="contained" color="augment/red/500">
          Red 500
        </Button>
      </Tooltip>
    </Stack>
  );
}

export function TooltipWithIconExample() {
  return (
    <Stack direction="row" spacing={2}>
      <Tooltip
        title="아이콘과 함께 사용하는 툴팁"
        color="augment/gray/700"
        frontBumper
      >
        <Button variant="outlined" color="augment/gray/800">
          <DesignIcon variant="InformationOutline" />
        </Button>
      </Tooltip>
      <Tooltip title="backBumper 적용 툴팁" color="augment/gray/700" backBumper>
        <Button variant="outlined" color="augment/gray/800">
          <DesignIcon variant="NoticeOutline" />
        </Button>
      </Tooltip>
    </Stack>
  );
}
