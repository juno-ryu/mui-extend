import { ComponentDetailConfig } from "./types";
import {
  AccordionBasicExample,
  AccordionMultipleExample,
  AccordionDisabledExample,
} from "@/features/showcase/lib/examples/accordion-examples";

export const accordionConfig: ComponentDetailConfig = {
  slug: "accordion",
  designNote: [
    "Accordion 컴포넌트는 접을 수 있는 콘텐츠 섹션을 제공합니다.",
    "기본적으로 elevation: 0, disableGutters: true가 설정되어 있으며, 구분선 색상이 gray/dim/200으로 커스터마이징되어 있습니다.",
    "AccordionSummary와 AccordionDetails의 패딩이 0px로 설정되어 있어 내부 콘텐츠의 레이아웃을 자유롭게 제어할 수 있습니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: AccordionBasicExample,
      code: `import {
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
        <AccordionSummary
          expandIcon={<DesignIcon variant="ChevronUpBold" />}
        >
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
        <AccordionSummary
          expandIcon={<DesignIcon variant="ChevronUpBold" />}
        >
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
}`,
    },
    {
      title: "여러 개 동시에 열기",
      section: "variants",
      render: AccordionMultipleExample,
      code: `import {
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  DesignIcon,
} from "@/core/design-systems";

export function AccordionMultipleExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Accordion>
        <AccordionSummary
          expandIcon={<DesignIcon variant="ChevronUpBold" />}
        >
          <Typography variant="title/title5">여러 개 열기 가능</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body/body5">
            multiple prop을 사용하면 여러 아코디언을 동시에 열 수 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<DesignIcon variant="ChevronUpBold" />}
        >
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
}`,
    },
    {
      title: "비활성화",
      section: "variants",
      render: AccordionDisabledExample,
      code: `import {
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  DesignIcon,
} from "@/core/design-systems";

export function AccordionDisabledExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<DesignIcon variant="ChevronUpBold" />}
        >
          <Typography variant="title/title5">비활성화된 아코디언</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body/body5">
            이 아코디언은 비활성화되어 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<DesignIcon variant="ChevronUpBold" />}
        >
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
}`,
    },
  ],
  customization: {
    defaultValueChanges: [
      {
        prop: "elevation",
        customValue: "0",
        muiDefault: "1",
        note: "그림자 효과를 제거하여 평면적인 디자인을 적용했습니다.",
      },
      {
        prop: "disableGutters",
        customValue: "true",
        muiDefault: "false",
        note: "좌우 패딩을 제거하여 콘텐츠가 전체 너비를 사용할 수 있도록 했습니다.",
      },
      {
        prop: "slotProps.heading.component",
        customValue: "'div'",
        muiDefault: "'h3'",
        note: "시맨틱 HTML을 위해 heading을 div로 변경했습니다.",
      },
    ],
    styleChanges: [
      {
        description:
          "구분선(:before)의 색상을 gray/dim/200으로 커스터마이징하여 일관된 디자인을 제공합니다.",
        code: "'&&:before': { background: theme.palette['gray/dim/200'] }",
      },
      {
        description:
          "AccordionSummary의 minHeight를 'auto'로, padding을 '0px'로 설정하여 레이아웃을 단순화했습니다.",
        code: "AccordionSummary.styleOverrides.root",
      },
      {
        description:
          "AccordionSummary의 content margin을 '0px'로 설정하여 불필요한 간격을 제거했습니다.",
        code: "AccordionSummary.styleOverrides.content",
      },
      {
        description:
          "AccordionDetails의 padding을 '0px'로 설정하여 내부 콘텐츠의 레이아웃을 자유롭게 제어할 수 있도록 했습니다.",
        code: "AccordionDetails.styleOverrides.root",
      },
    ],
  },
};
