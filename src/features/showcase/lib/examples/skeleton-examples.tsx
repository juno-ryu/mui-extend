"use client";

import { Stack, Skeleton, Typography } from "@/core/design-systems";

export function SkeletonBasicExample() {
  return (
    <Stack direction="column" spacing={2} width="100%">
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
    </Stack>
  );
}

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
}

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
}
