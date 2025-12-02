"use client";

import { useState } from "react";
import { Stack, Tabs, Tab, Typography } from "@/core/design-systems";

export function TabsBasicExample() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack direction="column" spacing={2}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="탭 1" />
        <Tab label="탭 2" />
        <Tab label="탭 3" />
      </Tabs>
      <Typography variant="body/body5">
        선택된 탭: {value + 1}
      </Typography>
    </Stack>
  );
}

export function TabsSizesExample() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Small</Typography>
        <Tabs value={value} onChange={handleChange} size="small">
          <Tab label="탭 1" />
          <Tab label="탭 2" />
          <Tab label="탭 3" />
        </Tabs>
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Medium (기본)</Typography>
        <Tabs value={value} onChange={handleChange} size="medium">
          <Tab label="탭 1" />
          <Tab label="탭 2" />
          <Tab label="탭 3" />
        </Tabs>
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Large</Typography>
        <Tabs value={value} onChange={handleChange} size="large">
          <Tab label="탭 1" />
          <Tab label="탭 2" />
          <Tab label="탭 3" />
        </Tabs>
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Auto (반응형)</Typography>
        <Tabs value={value} onChange={handleChange} size="auto">
          <Tab label="탭 1" />
          <Tab label="탭 2" />
          <Tab label="탭 3" />
        </Tabs>
      </Stack>
    </Stack>
  );
}

export function TabVariantsExample() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Default (기본)</Typography>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="탭 1" variant="default" />
          <Tab label="탭 2" variant="default" />
          <Tab label="탭 3" variant="default" />
        </Tabs>
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Accent</Typography>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="탭 1" variant="accent" />
          <Tab label="탭 2" variant="accent" />
          <Tab label="탭 3" variant="accent" />
        </Tabs>
      </Stack>
    </Stack>
  );
}

