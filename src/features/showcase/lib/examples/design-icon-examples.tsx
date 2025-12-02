"use client";

import { Stack, DesignIcon, Typography } from "@/core/design-systems";

export function DesignIconBasicExample() {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <DesignIcon variant="Image" />
      <DesignIcon variant="Star" />
      <DesignIcon variant="NavHomeOutline" />
      <DesignIcon variant="NavProfileOutline" />
    </Stack>
  );
}

export function DesignIconSizeColorExample() {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack direction="column" spacing={1} alignItems="center">
        <DesignIcon
          variant="Star"
          sx={{ fontSize: 16, color: "augment/gray/700" }}
        />
        <Typography variant="label/label2">16px</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <DesignIcon
          variant="Star"
          sx={{ fontSize: 24, color: "augment/primary/600" }}
        />
        <Typography variant="label/label2">24px</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <DesignIcon
          variant="Star"
          sx={{ fontSize: 32, color: "augment/red/500" }}
        />
        <Typography variant="label/label2">32px</Typography>
      </Stack>
    </Stack>
  );
}

export function DesignIconWithTitleExample() {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <DesignIcon
        variant="InformationOutline"
        titleAccess="정보 아이콘"
        sx={{ fontSize: 20 }}
      />
      <DesignIcon
        variant="NoticeOutline"
        titleAccess="알림 아이콘"
        sx={{ fontSize: 20 }}
      />
    </Stack>
  );
}


