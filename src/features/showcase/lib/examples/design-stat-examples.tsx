"use client";

import { Stack, DesignStat } from "@/core/design-systems";

export function DesignStatBasicExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <DesignStat unit="명">1,234</DesignStat>
      <DesignStat unit="원">5,678</DesignStat>
      <DesignStat unit="%">98.5</DesignStat>
      <DesignStat unit="건">42</DesignStat>
    </Stack>
  );
}

export function DesignStatCustomExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <DesignStat
        unit="명"
        slotProps={{
          typography: {
            variant: "title/title3",
            color: "gray/900",
          },
          unit: {
            variant: "body/body5",
            color: "gray/500",
          },
        }}
      >
        1,234
      </DesignStat>
      <DesignStat
        unit="원"
        slotProps={{
          typography: {
            variant: "title/title4",
            color: "primary/600",
          },
          unit: {
            variant: "label/label1",
            color: "gray/400",
          },
        }}
      >
        5,678
      </DesignStat>
    </Stack>
  );
}

export function DesignStatWithoutUnitExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <DesignStat>1,234</DesignStat>
      <DesignStat>5,678</DesignStat>
    </Stack>
  );
}

