import { ComponentDetailConfig } from "./types";
import {
  DividerBasicExample,
  DividerVariantsExample,
  DividerWithTextExample,
} from "@/features/showcase/lib/examples/divider-examples";

export const dividerConfig: ComponentDetailConfig = {
  slug: "divider",
  designNote: [
    "Divider 컴포넌트는 콘텐츠를 시각적으로 구분하기 위한 구분선 컴포넌트입니다.",
    "기본적으로 component: 'hr', aria-hidden: true가 설정되어 있으며, variant에 따라 fullWidth/inset/middle/dash 스타일을 제공합니다.",
    "테마의 gray/200 색상을 borderColor로 사용하며, wrapper의 최소 너비를 fit-content로 설정해 텍스트가 있는 구분선에서도 레이아웃이 깨지지 않도록 합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: DividerBasicExample,
      code: `import { Stack, Divider, Typography } from "@/core/design-systems";

export function DividerBasicExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="title/title5">섹션 제목</Typography>
      <Divider />
      <Typography variant="body/body5">
        Divider는 콘텐츠를 시각적으로 구분하기 위한 컴포넌트입니다.
      </Typography>
    </Stack>
  );
}`,
    },
    {
      title: "Variants",
      section: "variants",
      render: DividerVariantsExample,
      code: `import { Stack, Divider, Typography } from "@/core/design-systems";

export function DividerVariantsExample() {
  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">fullWidth (기본값)</Typography>
        <Divider variant="fullWidth" />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">inset</Typography>
        <Divider variant="inset" />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">middle</Typography>
        <Divider variant="middle" />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">dash (커스텀)</Typography>
        <Divider variant="dash" />
      </Stack>
    </Stack>
  );
}`,
    },
    {
      title: "텍스트 및 세로 Divider",
      section: "variants",
      render: DividerWithTextExample,
      code: `import { Stack, Divider, Typography } from "@/core/design-systems";

export function DividerWithTextExample() {
  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Divider variant="fullWidth" sx={{ flex: 1 }} />
        <Typography variant="label/label1" sx={{ px: 2 }}>
          OR
        </Typography>
        <Divider variant="fullWidth" sx={{ flex: 1 }} />
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="body/body5">왼쪽 콘텐츠</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body/body5">오른쪽 콘텐츠</Typography>
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
        customValue: "'hr'",
        muiDefault: "'hr'",
        note: "시맨틱 HTML을 위해 기본 component를 hr로 유지합니다.",
      },
      {
        prop: "aria-hidden",
        customValue: "true",
        muiDefault: "undefined",
        note: "단순 시각적 구분선으로 사용할 때 스크린 리더에서 무시되도록 합니다.",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: ["fullWidth", "inset", "middle", "dash", "customB"],
      },
    ],
    styleChanges: [
      {
        description:
          "테마의 gray/200 색상을 borderColor로 사용하고, before/after 의 borderColor도 inherit로 맞춥니다.",
        code: "borderColor: theme.palette['gray/200'], '&:before, &:after': { borderColor: 'inherit' }",
      },
      {
        description:
          "variant에 따라 fullWidth/inset/middle/dash 스타일을 적용합니다. dash의 경우 borderStyle: 'dashed'를 사용합니다.",
        code: "dividerVariants(theme)",
      },
      {
        description:
          "wrapper의 minWidth를 fit-content로 설정하여 Divider에 텍스트가 있을 때도 내용이 잘리지 않도록 합니다.",
        code: "wrapper: { minWidth: 'fit-content' }",
      },
    ],
  },
};
