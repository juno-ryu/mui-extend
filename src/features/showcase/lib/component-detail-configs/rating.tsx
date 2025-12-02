import { ComponentDetailConfig } from "./types";
import {
  RatingBasicExample,
  RatingSizesExample,
  RatingStatesExample,
} from "@/features/showcase/lib/examples/rating-examples";

export const ratingConfig: ComponentDetailConfig = {
  slug: "rating",
  designNote: [
    "Rating 컴포넌트는 DesignIcon의 Star variant를 사용하여 별점을 표시합니다.",
    "채워진 별은 yellow/500, 빈 별은 gray/200 색상을 사용합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: RatingBasicExample,
      code: `import { Rating, Stack } from "@/core/design-systems";

export function RatingExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Rating value={3} />
      <Rating value={4.5} precision={0.5} />
      <Rating value={0} />
      <Rating value={5} readOnly />
    </Stack>
  );
}`,
    },
    {
      title: "Sizes",
      section: "variants",
      render: RatingSizesExample,
      code: `import { Rating, Stack } from "@/core/design-systems";

export function RatingSizesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Rating value={3} size="small" />
      <Rating value={3} size="medium" />
      <Rating value={3} size="large" />
    </Stack>
  );
}`,
    },
    {
      title: "States",
      section: "variants",
      render: RatingStatesExample,
      code: `import { Rating, Stack } from "@/core/design-systems";

export function RatingStatesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Rating value={3} />
      <Rating value={3} disabled />
      <Rating value={3} readOnly />
    </Stack>
  );
}`,
    },
  ],
  customization: {
    addedProps: [],
    defaultValueChanges: [
      {
        prop: "icon",
        customValue: "<DesignIcon variant='Star' />",
        muiDefault: "기본 별 아이콘",
        note: "DesignIcon의 Star variant를 사용합니다.",
      },
      {
        prop: "emptyIcon",
        customValue: "<DesignIcon variant='Star' />",
        muiDefault: "기본 빈 별 아이콘",
        note: "빈 별도 DesignIcon의 Star variant를 사용합니다.",
      },
      {
        prop: "size",
        customValue: "'medium'",
        muiDefault: "'medium'",
        note: "기본값은 동일하지만 명시적으로 설정하여 일관성을 유지합니다.",
      },
      {
        prop: "sx",
        customValue: "{ width: 'auto', '& svg': { maxWidth: 'fit-content' } }",
        muiDefault: "undefined",
        note: "레이팅 컴포넌트의 너비를 자동으로 조정하고 SVG가 콘텐츠에 맞게 크기를 조정하도록 설정합니다.",
      },
    ],
    additionalVariants: [
      {
        type: "size",
        values: ["small", "medium", "large"],
      },
    ],
    styleChanges: [
      {
        description:
          "size별로 아이콘 크기를 조정합니다. small: 18px, medium: 24px, large: 32px",
        code: "ratingSizes(theme)",
      },
      {
        description:
          "채워진 별 아이콘의 색상을 yellow/500으로 설정합니다.",
        code: "theme.palette['yellow/500']",
      },
      {
        description:
          "빈 별 아이콘의 색상을 gray/200으로 설정합니다.",
        code: "theme.palette['gray/200']",
      },
      {
        description:
          "decimal 모드에서 label과 span의 z-index를 1로 설정하여 레이어링을 제어합니다.",
      },
    ],
  },
};

