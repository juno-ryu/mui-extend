import { ComponentDetailConfig } from "./types";
import {
  TabsBasicExample,
  TabsSizesExample,
  TabVariantsExample,
} from "@/features/showcase/lib/examples/tabs-examples";

export const tabsConfig: ComponentDetailConfig = {
  slug: "tabs",
  designNote: [
    "Tabs 컴포넌트는 탭 네비게이션을 제공하는 컴포넌트입니다.",
    "size prop에 따라 small, medium, large, auto 스타일을 제공하며, auto는 반응형으로 동작합니다.",
    "indicator가 제거되어 있으며, Tab 컴포넌트의 variant에 따라 선택 상태가 표시됩니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: TabsBasicExample,
      code: `import { useState } from "react";
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
}`,
    },
    {
      title: "Sizes",
      section: "variants",
      render: TabsSizesExample,
      code: `import { useState } from "react";
import { Stack, Tabs, Tab, Typography } from "@/core/design-systems";

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
}`,
    },
    {
      title: "Tab Variants",
      section: "variants",
      render: TabVariantsExample,
      code: `import { useState } from "react";
import { Stack, Tabs, Tab, Typography } from "@/core/design-systems";

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
}`,
    },
  ],
  customization: {
    defaultValueChanges: [
      {
        prop: "component",
        customValue: "'div'",
        muiDefault: "'div'",
        note: "기본 component를 div로 유지합니다.",
      },
      {
        prop: "size",
        customValue: "'medium'",
        muiDefault: "'medium'",
        note: "기본 size를 medium으로 설정했습니다.",
      },
    ],
    additionalVariants: [
      {
        type: "size",
        values: ["auto", "small", "medium", "large"],
      },
    ],
    styleChanges: [
      {
        description:
          "size에 따라 Tab의 padding과 typography가 조정되며, flexContainer의 gap도 CSS 변수로 설정됩니다.",
        code: "tabsSizes(theme) + --tabs-gap-small/medium/large",
      },
      {
        description:
          "auto size는 반응형으로 동작하며, breakpoint에 따라 small/medium/large로 자동 전환됩니다.",
        code: "size: 'auto' + breakpoints.down('desktop'/'tablet')",
      },
      {
        description:
          "indicator가 제거되어 있으며, Tab 컴포넌트의 variant에 따라 선택 상태가 표시됩니다.",
        code: "& .MuiTabs-indicator: { display: 'none' }",
      },
    ],
  },
};

