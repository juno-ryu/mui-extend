"use client";

import { useState } from "react";
import {
  Stack,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
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

  const handleReset = () => {
    setActiveStep(0);
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
        <Button
          variant="outlined"
          color="augment/gray/800"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          이전
        </Button>
        <Button
          variant="outlined"
          color="augment/gray/800"
          disabled={activeStep === steps.length - 1}
          onClick={handleNext}
        >
          다음
        </Button>
        {activeStep === steps.length - 1 && (
          <Button
            variant="outlined"
            color="augment/gray/800"
            onClick={handleReset}
          >
            리셋
          </Button>
        )}
      </Stack>
    </Stack>
  );
}

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
}

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
                <Button
                  variant="outlined"
                  color="augment/gray/800"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  이전
                </Button>
                <Button
                  variant="outlined"
                  color="augment/gray/800"
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
}

