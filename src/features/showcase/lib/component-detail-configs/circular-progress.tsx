import { ComponentDetailConfig } from "./types";
import {
  CircularProgressBasicExample,
  CircularProgressColorsExample,
  CircularProgressDeterminateExample,
} from "@/features/showcase/lib/examples/circular-progress-examples";

export const circularProgressConfig: ComponentDetailConfig = {
  slug: "circular-progress",
  isAugmentColor: true,
  designNote: [
    "CircularProgress 컴포넌트는 원형 프로그레스 바를 표시하는 컴포넌트입니다.",
    "기본적으로 size: 40, thickness: 6, color: 'augment/primary/600', variant: 'indeterminate'가 설정되어 있으며, color prop에 augment 컬러 토큰을 사용합니다.",
    "indeterminate variant의 경우 CircleLoader를 사용하여 그라데이션 효과를 제공합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: CircularProgressBasicExample,
      code: `import { Stack, CircularProgress } from "@/core/design-systems";

export function CircularProgressBasicExample() {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <CircularProgress />
      <CircularProgress size={24} />
      <CircularProgress size={32} />
      <CircularProgress size={48} />
    </Stack>
  );
}`,
    },
    {
      title: "Colors",
      section: "variants",
      render: CircularProgressColorsExample,
      code: `import { Stack, CircularProgress, Typography } from "@/core/design-systems";

export function CircularProgressColorsExample() {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress color="augment/primary/600" />
        <Typography variant="label/label2">Primary</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress color="augment/cyan/500" />
        <Typography variant="label/label2">Cyan</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress color="augment/yellow/500" />
        <Typography variant="label/label2">Yellow</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress color="augment/red/500" />
        <Typography variant="label/label2">Red</Typography>
      </Stack>
    </Stack>
  );
}`,
    },
    {
      title: "Determinate",
      section: "variants",
      render: CircularProgressDeterminateExample,
      code: `import { Stack, CircularProgress, Typography } from "@/core/design-systems";

export function CircularProgressDeterminateExample() {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress variant="determinate" value={25} />
        <Typography variant="label/label2">25%</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress variant="determinate" value={50} />
        <Typography variant="label/label2">50%</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress variant="determinate" value={75} />
        <Typography variant="label/label2">75%</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <CircularProgress variant="determinate" value={100} />
        <Typography variant="label/label2">100%</Typography>
      </Stack>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    defaultValueChanges: [
      {
        prop: "size",
        customValue: "40",
        muiDefault: "40",
        note: "기본 size를 40px로 유지합니다.",
      },
      {
        prop: "thickness",
        customValue: "6",
        muiDefault: "3.6",
        note: "기본 thickness를 6으로 설정하여 더 두꺼운 선을 제공합니다.",
      },
      {
        prop: "color",
        customValue: "'augment/primary/600'",
        muiDefault: "'primary'",
        note: "augment 컬러 토큰을 기본 색상 체계로 사용합니다.",
      },
      {
        prop: "variant",
        customValue: "'indeterminate'",
        muiDefault: "'indeterminate'",
        note: "기본 variant를 indeterminate로 유지합니다.",
      },
    ],
    styleChanges: [
      {
        description:
          "color prop이 augment/[color]/[shade] 형식인지 검증하고, 유효하지 않은 값은 augment/primary/600으로 폴백합니다.",
        code: "validateColor(ownerColor) ? ownerColor : 'augment/primary/600'",
      },
      {
        description:
          "indeterminate variant의 경우 CircleLoader를 사용하여 그라데이션 효과를 제공합니다. stroke에 linearGradient를 적용합니다.",
        code: "variant === 'indeterminate' && CircleLoader + stroke: url(#id)",
      },
      {
        description:
          "circle의 strokeLinecap을 'round'로 설정하여 둥근 끝을 제공합니다.",
        code: "strokeLinecap: 'round'",
      },
    ],
  },
};

