"use client";

import { Stack, DesignLabel, DesignIcon } from "@/core/design-systems";

export function DesignLabelBasicExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <DesignLabel variant="text" color="augment/gray/800">
        Text
      </DesignLabel>
      <DesignLabel variant="outlined" color="augment/gray/800">
        Outlined
      </DesignLabel>
      <DesignLabel variant="contained" color="augment/gray/800">
        Contained
      </DesignLabel>
      <DesignLabel variant="filled" color="augment/gray/800">
        Filled
      </DesignLabel>
    </Stack>
  );
}

export function DesignLabelColorsExample() {
  return (
    <Stack direction="column" spacing={3}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <DesignLabel variant="contained" color="augment/primary/600">
          Primary
        </DesignLabel>
        <DesignLabel variant="contained" color="augment/cyan/500">
          Cyan
        </DesignLabel>
        <DesignLabel variant="contained" color="augment/yellow/500">
          Yellow
        </DesignLabel>
        <DesignLabel variant="contained" color="augment/red/500">
          Red
        </DesignLabel>
      </Stack>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <DesignLabel variant="outlined" color="augment/primary/600">
          Primary
        </DesignLabel>
        <DesignLabel variant="outlined" color="augment/cyan/500">
          Cyan
        </DesignLabel>
        <DesignLabel variant="outlined" color="augment/yellow/500">
          Yellow
        </DesignLabel>
        <DesignLabel variant="outlined" color="augment/red/500">
          Red
        </DesignLabel>
      </Stack>
    </Stack>
  );
}

export function DesignLabelRelaxBorderExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <DesignLabel variant="contained" color="augment/primary/600">
        기본
      </DesignLabel>
      <DesignLabel variant="contained" color="augment/primary/600" relaxBorder>
        Relax Border
      </DesignLabel>
    </Stack>
  );
}

export function DesignLabelWithIconExample() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <DesignLabel
        variant="contained"
        color="augment/primary/600"
        slotProps={{
          typography: {
            children: (
              <>
                <DesignIcon variant="Star" />
                아이콘 포함
              </>
            ),
          },
        }}
      />
      <DesignLabel
        variant="outlined"
        color="augment/gray/800"
        slotProps={{
          typography: {
            children: (
              <>
                <DesignIcon variant="InformationOutline" />
                정보
              </>
            ),
          },
        }}
      />
    </Stack>
  );
}

