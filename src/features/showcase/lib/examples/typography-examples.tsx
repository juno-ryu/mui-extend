"use client";

import { Stack, Typography } from "@/core/design-systems";

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
}

export function TypographyLabelExample() {
  return (
    <Stack direction="column" spacing={1}>
      <Typography variant="label/label1">Label 1 - 라벨 텍스트</Typography>
      <Typography variant="label/label2">Label 2 - 라벨 텍스트</Typography>
      <Typography variant="label/label3">Label 3 - 라벨 텍스트</Typography>
    </Stack>
  );
}

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
}


