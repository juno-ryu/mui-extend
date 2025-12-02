import { ComponentDetailConfig } from "./types";
import {
  SkeletonBasicExample,
  SkeletonVariantsExample,
  SkeletonCardExample,
} from "@/features/showcase/lib/examples/skeleton-examples";

export const skeletonConfig: ComponentDetailConfig = {
  slug: "skeleton",
  designNote: [
    "Skeleton 컴포넌트는 콘텐츠가 로딩 중일 때 표시되는 플레이스홀더 컴포넌트입니다.",
    "variant에 따라 text, rectangular, rounded 스타일을 제공하며, 각 variant의 borderRadius가 커스터마이징되어 있습니다.",
    "background 색상이 gray/dim/200으로 설정되어 일관된 디자인을 제공합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: SkeletonBasicExample,
      code: `import { Stack, Skeleton } from "@/core/design-systems";

export function SkeletonBasicExample() {
  return (
    <Stack direction="column" spacing={2} width="100%">
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
    </Stack>
  );
}`,
    },
    {
      title: "Variants",
      section: "variants",
      render: SkeletonVariantsExample,
      code: `import { Stack, Skeleton, Typography } from "@/core/design-systems";

export function SkeletonVariantsExample() {
  return (
    <Stack direction="column" spacing={3}>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Text</Typography>
        <Skeleton variant="text" width="100%" height={20} />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Rectangular</Typography>
        <Skeleton variant="rectangular" width="100%" height={100} />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Rounded</Typography>
        <Skeleton variant="rounded" width="100%" height={100} />
      </Stack>
    </Stack>
  );
}`,
    },
    {
      title: "카드 예제",
      section: "variants",
      render: SkeletonCardExample,
      code: `import { Stack, Skeleton } from "@/core/design-systems";

export function SkeletonCardExample() {
  return (
    <Stack direction="column" spacing={2} sx={{ width: 300 }}>
      <Skeleton variant="rectangular" width="100%" height={200} />
      <Stack direction="column" spacing={1}>
        <Skeleton variant="text" width="80%" height={24} />
        <Skeleton variant="text" width="60%" height={20} />
        <Skeleton variant="text" width="100%" height={16} />
        <Skeleton variant="text" width="90%" height={16} />
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
        customValue: "'span'",
        muiDefault: "'span'",
        note: "기본 component를 span으로 유지합니다.",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: ["text", "rectangular", "rounded"],
      },
    ],
    styleChanges: [
      {
        description:
          "variant에 따라 borderRadius가 커스터마이징되어 있습니다. text와 rectangular는 4px, rounded는 16px입니다.",
        code: "skeletonVariants(theme) + borderRadius: '4px' / '16px'",
      },
      {
        description:
          "background 색상이 gray/dim/200으로 설정되어 일관된 디자인을 제공합니다.",
        code: "background: theme.palette['gray/dim/200']",
      },
    ],
  },
};
