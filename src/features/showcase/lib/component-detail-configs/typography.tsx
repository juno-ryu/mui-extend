import { ComponentDetailConfig } from "./types";
import {
  TypographyScaleExample,
  TypographyLabelExample,
  TypographyArticleInfoExample,
} from "@/features/showcase/lib/examples/typography-examples";

export const typographyConfig: ComponentDetailConfig = {
  slug: "typography",
  designNote: [
    "Typography 컴포넌트는 MUI의 기본 variant 체계 대신, headline/title/body/label/article/information으로 세분화된 커스텀 타이포그래피 스케일을 제공합니다.",
    "기본 variant는 'body/body3', 기본 component는 'span', 기본 색상은 'gray/800'으로 설정되어 있습니다.",
    "각 variant는 typographyVariants 맵을 통해 폰트 크기, line-height, letter-spacing이 정의되어 있으며, variants 매핑으로 MuiTypography에 연결됩니다.",
  ],
  usageExamples: [
    {
      title: "헤드라인 · 타이틀 · 바디 스케일",
      section: "basic",
      render: TypographyScaleExample,
      code: `import { Stack, Typography } from "@/core/design-systems";

export function TypographyScaleExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="headline/h1">Headline H1</Typography>
      <Typography variant="headline/h2">Headline H2</Typography>
      <Typography variant="headline/h3">Headline H3</Typography>
      <Typography variant="headline/h4">Headline H4</Typography>

      <Typography variant="title/title1">Title 1</Typography>
      <Typography variant="title/title2">Title 2</Typography>
      <Typography variant="title/title3">Title 3</Typography>
      <Typography variant="title/title4">Title 4</Typography>
      <Typography variant="title/title5">Title 5</Typography>

      <Typography variant="body/body1">
        Body 1 - 본문 텍스트 스타일입니다.
      </Typography>
      <Typography variant="body/body2">
        Body 2 - 본문 텍스트 스타일입니다.
      </Typography>
      <Typography variant="body/body3">
        Body 3 - 디폴트 본문 스타일입니다.
      </Typography>
      <Typography variant="body/body4">
        Body 4 - 본문 텍스트 스타일입니다.
      </Typography>
      <Typography variant="body/body5">
        Body 5 - 본문 텍스트 스타일입니다.
      </Typography>
      <Typography variant="body/body6">
        Body 6 - 본문 텍스트 스타일입니다.
      </Typography>
    </Stack>
  );
}`,
    },
    {
      title: "Label 계열",
      section: "variants",
      render: TypographyLabelExample,
      code: `import { Stack, Typography } from "@/core/design-systems";

export function TypographyLabelExample() {
  return (
    <Stack direction="column" spacing={1}>
      <Typography variant="label/label1">Label 1 - 라벨 텍스트</Typography>
      <Typography variant="label/label2">Label 2 - 라벨 텍스트</Typography>
      <Typography variant="label/label3">Label 3 - 라벨 텍스트</Typography>
    </Stack>
  );
}`,
    },
    {
      title: "Article · Information 계열",
      section: "variants",
      render: TypographyArticleInfoExample,
      code: `import { Stack, Typography } from "@/core/design-systems";

export function TypographyArticleInfoExample() {
  return (
    <Stack direction="column" spacing={3}>
      <Stack direction="column" spacing={1}>
        <Typography variant="aritcle/desktop/title">
          Article Desktop Title
        </Typography>
        <Typography variant="aritcle/desktop/body">
          데스크톱 환경에서 사용하는 기사 본문 스타일입니다.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={1}>
        <Typography variant="aritcle/mobile/title">
          Article Mobile Title
        </Typography>
        <Typography variant="aritcle/mobile/body">
          모바일 환경에서 사용하는 기사 본문 스타일입니다.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={1}>
        <Typography variant="infornation/info1">
          Information 1 - 요약 정보 텍스트
        </Typography>
        <Typography variant="infornation/info2">
          Information 2 - 보조 정보 텍스트
        </Typography>
        <Typography variant="infornation/info3">
          Information 3 - 추가 정보 텍스트
        </Typography>
      </Stack>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    defaultValueChanges: [
      {
        prop: "variant",
        customValue: "'body/body3'",
        muiDefault: "'body1'",
        note: "프로젝트의 기본 본문 스타일을 body/body3로 맞추기 위해 기본 variant를 변경했습니다.",
      },
      {
        prop: "component",
        customValue: "'span'",
        muiDefault: "'span' (variant에 따라 다름)",
        note: "시맨틱 태그를 명시적으로 관리하기 위해 기본 component를 span으로 고정했습니다.",
      },
      {
        prop: "fontWeight",
        customValue: "400",
        muiDefault: "undefined",
        note: "일관된 본문 가중치를 위해 기본 fontWeight를 400으로 설정했습니다.",
      },
      {
        prop: "color",
        customValue: "'gray/800'",
        muiDefault: "'initial'",
        note: "디자인 시스템의 gray/800을 기본 텍스트 색상으로 사용합니다.",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: [
          "headline/h1",
          "headline/h2",
          "headline/h3",
          "headline/h4",
          "title/title1",
          "title/title2",
          "title/title3",
          "title/title4",
          "title/title5",
          "body/body1",
          "body/body2",
          "body/body3",
          "body/body4",
          "body/body5",
          "body/body6",
          "label/label1",
          "label/label2",
          "label/label3",
          "aritcle/desktop/title",
          "aritcle/mobile/title",
          "aritcle/desktop/body",
          "aritcle/mobile/body",
          "infornation/info1",
          "infornation/info2",
          "infornation/info3",
        ],
      },
    ],
    styleChanges: [
      {
        description:
          "typographyVariants 맵을 통해 각 variant에 대한 fontSize, lineHeight, letterSpacing을 정의하고, MuiTypography의 variants 매핑으로 연결했습니다.",
        code: "Object.entries(typographyVariants).map(([variant, style]) => ({ props: { variant }, style }))",
      },
    ],
  },
};


