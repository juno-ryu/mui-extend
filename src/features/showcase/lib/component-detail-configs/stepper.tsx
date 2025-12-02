import { ComponentDetailConfig } from "./types";
import {
  StepperBasicExample,
  StepperSizesExample,
  StepperWithContentExample,
} from "@/features/showcase/lib/examples/stepper-examples";

export const stepperConfig: ComponentDetailConfig = {
  slug: "stepper",
  designNote: [
    "Stepper 컴포넌트는 단계별 프로세스를 표시하는 컴포넌트입니다.",
    "기본적으로 nonLinear: true가 설정되어 있으며, StepLabel, StepConnector, StepContent의 스타일이 커스터마이징되어 있습니다.",
    "StepLabel은 size prop에 따라 small, medium 스타일을 제공하며, active, completed, error 상태에 따라 아이콘과 색상이 변경됩니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: StepperBasicExample,
      code: `import { useState } from "react";
import {
  Stack,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@/core/design-systems";

export function StepperBasicExample() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["단계 1", "단계 2", "단계 3"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stack direction="column" spacing={2} width="100%">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stack direction="row" spacing={2}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          이전
        </Button>
        <Button
          disabled={activeStep === steps.length - 1}
          onClick={handleNext}
        >
          다음
        </Button>
      </Stack>
    </Stack>
  );
}`,
    },
    {
      title: "Sizes",
      section: "variants",
      render: StepperSizesExample,
      code: `import { useState } from "react";
import {
  Stack,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@/core/design-systems";

export function StepperSizesExample() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["단계 1", "단계 2", "단계 3"];

  return (
    <Stack direction="column" spacing={4} width="100%">
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Small</Typography>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel data-size="small">{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="label/label1">Medium (기본)</Typography>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel data-size="medium">{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </Stack>
  );
}`,
    },
    {
      title: "StepContent 포함",
      section: "variants",
      render: StepperWithContentExample,
      code: `import { useState } from "react";
import {
  Stack,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
} from "@/core/design-systems";

export function StepperWithContentExample() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: "단계 1",
      description: "첫 번째 단계의 설명입니다.",
    },
    {
      label: "단계 2",
      description: "두 번째 단계의 설명입니다.",
    },
    {
      label: "단계 3",
      description: "세 번째 단계의 설명입니다.",
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stack direction="column" spacing={2} width="100%">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography variant="body/body5">{step.description}</Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  이전
                </Button>
                <Button
                  disabled={activeStep === steps.length - 1}
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "완료" : "다음"}
                </Button>
              </Stack>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    defaultValueChanges: [
      {
        prop: "nonLinear",
        customValue: "true",
        muiDefault: "false",
        note: "기본적으로 nonLinear를 true로 설정하여 단계를 자유롭게 이동할 수 있도록 했습니다.",
      },
    ],
    styleChanges: [
      {
        description:
          "Step의 margin과 padding을 0px로 설정하여 레이아웃을 단순화했습니다.",
        code: "Step.styleOverrides.root: margin: '0px', padding: '0px'",
      },
      {
        description:
          "StepLabel은 size prop에 따라 small, medium 스타일을 제공합니다. iconContainer의 크기와 타이포그래피가 size에 따라 조정됩니다.",
        code: "stepLabelSizes(theme) + data-size prop",
      },
      {
        description:
          "StepLabel의 iconContainer는 원형 테두리를 가지며, active/completed 상태에 따라 primary/600 배경색과 테두리 색상이 적용됩니다.",
        code: "iconContainer: borderWidth: '2px', borderRadius: '50%', borderColor: gray/300, active/completed: background/borderColor: primary/600",
      },
      {
        description:
          "StepLabel의 stepIcon slot은 커스터마이징되어 있습니다. error일 경우 NoticeOutline 아이콘, completed일 경우 Checkmark 아이콘, 그 외에는 Typography로 숫자를 표시합니다.",
        code: "slots.stepIcon: error → DesignIcon NoticeOutline, completed → DesignIcon Checkmark, else → Typography",
      },
      {
        description:
          "StepConnector는 orientation과 alternativeLabel에 따라 다른 스타일을 제공합니다. horizontal일 경우 상단 테두리, vertical일 경우 좌측 테두리를 사용합니다.",
        code: "StepConnector.styleOverrides.root variants: horizontal/vertical, alternativeLabel true/false",
      },
      {
        description:
          "StepConnector의 line 색상은 active 단계까지는 primary/600, 그 이후는 gray/300으로 설정됩니다.",
        code: "StepConnector.line: active까지 primary/600, 이후 gray/300",
      },
      {
        description:
          "StepContent는 좌측에 primary/600 색상의 테두리를 가지며, active 단계와 그 이후 단계에서는 gray/300으로 변경됩니다.",
        code: "StepContent: borderWidth: '2px', borderColor: primary/600, active 이후: gray/300",
      },
      {
        description:
          "StepContent의 margin과 padding은 StepLabel의 size에 따라 조정됩니다.",
        code: "StepContent: marginTop/marginLeft/paddingLeft는 size에 따라 조정",
      },
    ],
  },
};

