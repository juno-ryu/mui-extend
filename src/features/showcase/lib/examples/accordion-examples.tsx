"use client";

import {
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  DesignIcon,
} from "@/core/design-systems";

export function AccordionBasicExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Accordion>
        <AccordionSummary expandIcon={<DesignIcon variant="ChevronUpBold" />}>
          <Typography variant="title/title5">아코디언 제목 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body/body5">
            이것은 기본 아코디언입니다. elevation: 0, disableGutters: true가
            기본값으로 설정되어 있으며, 구분선 색상이 gray/dim/200으로
            커스터마이징되어 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<DesignIcon variant="ChevronUpBold" />}>
          <Typography variant="title/title5">아코디언 제목 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body/body5">
            AccordionSummary와 AccordionDetails의 패딩이 0px로 설정되어 있어
            내부 콘텐츠의 레이아웃을 자유롭게 제어할 수 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export function AccordionMultipleExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Accordion>
        <AccordionSummary expandIcon={<DesignIcon variant="ChevronUpBold" />}>
          <Typography variant="title/title5">여러 개 열기 가능</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body/body5">
            multiple prop을 사용하면 여러 아코디언을 동시에 열 수 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<DesignIcon variant="ChevronUpBold" />}>
          <Typography variant="title/title5">두 번째 항목</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body/body5">
            이 항목도 열 수 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export function AccordionDisabledExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Accordion disabled>
        <AccordionSummary expandIcon={<DesignIcon variant="ChevronUpBold" />}>
          <Typography variant="title/title5">비활성화된 아코디언</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body/body5">
            이 아코디언은 비활성화되어 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<DesignIcon variant="ChevronUpBold" />}>
          <Typography variant="title/title5">활성화된 아코디언</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body/body5">
            이 아코디언은 정상적으로 작동합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
