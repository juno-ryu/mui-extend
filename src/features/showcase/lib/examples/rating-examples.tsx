"use client";

import { Rating, Stack } from "@/core/design-systems";

export function RatingBasicExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Rating value={3} />
      <Rating value={4.5} precision={0.5} />
      <Rating value={0} />
      <Rating value={5} readOnly />
    </Stack>
  );
}

export function RatingSizesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Rating value={3} size="small" />
      <Rating value={3} size="medium" />
      <Rating value={3} size="large" />
    </Stack>
  );
}

export function RatingStatesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Rating value={3} />
      <Rating value={3} disabled />
      <Rating value={3} readOnly />
    </Stack>
  );
}
