import { ComponentDetailConfig } from "./types";
import {
  LinearProgressBasicExample,
  LinearProgressColorsExample,
} from "@/features/showcase/lib/examples/linear-progress-examples";

export const linearProgressConfig: ComponentDetailConfig = {
  slug: "linear-progress",
  designNote: [
    "LinearProgress 컴포넌트는 선형 프로그레스 바를 표시하는 컴포넌트입니다.",
    "기본적으로 borderRadius가 10px로 설정되어 둥근 모서리를 제공합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: LinearProgressBasicExample,
      code: `import { Stack, LinearProgress } from "@/core/design-systems";

export function LinearProgressBasicExample() {
  return (
    <Stack direction="column" spacing={2} width="100%">
      <LinearProgress />
      <LinearProgress variant="determinate" value={25} />
      <LinearProgress variant="determinate" value={50} />
      <LinearProgress variant="determinate" value={75} />
    </Stack>
  );
}`,
    },
    {
      title: "Colors",
      section: "variants",
      render: LinearProgressColorsExample,
      code: `import { Stack, LinearProgress, Typography } from "@/core/design-systems";

export function LinearProgressColorsExample() {
  return (
    <Stack direction="column" spacing={2} width="100%">
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Primary</Typography>
        <LinearProgress color="primary" />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Secondary</Typography>
        <LinearProgress color="secondary" />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Success</Typography>
        <LinearProgress color="success" />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Error</Typography>
        <LinearProgress color="error" />
      </Stack>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    defaultValueChanges: [
      {
        prop: "sx.borderRadius",
        customValue: "10",
        muiDefault: "4",
        note: "기본 borderRadius를 10px로 설정하여 더 둥근 모서리를 제공합니다.",
      },
    ],
  },
};

