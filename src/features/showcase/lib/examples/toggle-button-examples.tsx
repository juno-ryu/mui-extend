"use client";

import { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Stack } from "@/core/design-systems";

export function ToggleButtonBasicExample() {
  const [value, setValue] = useState<string | null>("left");

  return (
    <Stack direction="column" spacing={2}>
      <ToggleButtonGroup
        value={value}
        exclusive
        color="augment/primary/600"
        onChange={(_, newValue) => setValue(newValue)}
      >
        <ToggleButton value="left">Left</ToggleButton>
        <ToggleButton value="center">Center</ToggleButton>
        <ToggleButton value="right">Right</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}

export function ToggleButtonVariantsExample() {
  const [outlined, setOutlined] = useState<string | null>("left");
  const [contained, setContained] = useState<string | null>("left");

  return (
    <Stack direction="column" spacing={2}>
      <ToggleButtonGroup
        value={outlined}
        exclusive
        color="augment/primary/600"
        onChange={(_, v) => setOutlined(v)}
      >
        <ToggleButton value="left" variant="outlined">
          Left
        </ToggleButton>
        <ToggleButton value="center" variant="outlined">
          Center
        </ToggleButton>
        <ToggleButton value="right" variant="outlined">
          Right
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={contained}
        exclusive
        color="augment/primary/600"
        onChange={(_, v) => setContained(v)}
      >
        <ToggleButton value="left" variant="contained">
          Left
        </ToggleButton>
        <ToggleButton value="center" variant="contained">
          Center
        </ToggleButton>
        <ToggleButton value="right" variant="contained">
          Right
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}

export function ToggleButtonSizesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <ToggleButtonGroup value="small" exclusive>
        <ToggleButton value="small" size="small" color="augment/primary/600">
          Small
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup value="medium" exclusive>
        <ToggleButton value="medium" size="medium" color="augment/primary/600">
          Medium
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
