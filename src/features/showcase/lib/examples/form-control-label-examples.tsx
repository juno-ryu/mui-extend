"use client";

import {
  FormControlLabel,
  Checkbox,
  Switch,
  Radio,
  RadioGroup,
  Stack,
} from "@/core/design-systems";

export function FormControlLabelBasicExample() {
  return (
    <Stack direction="column" spacing={2}>
      <FormControlLabel
        control={<Checkbox />}
        label="Checkbox와 함께 사용"
      />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Switch와 함께 사용"
      />
      <FormControlLabel
        control={<Radio defaultChecked />}
        label="Radio와 함께 사용"
      />
    </Stack>
  );
}

export function FormControlLabelPlacementExample() {
  return (
    <Stack direction="column" spacing={3}>
      <div>
        <h4 className="text-sm font-semibold mb-2">Label Placement</h4>
        <Stack direction="column" spacing={1}>
          <FormControlLabel
            control={<Checkbox />}
            label="end (기본)"
            labelPlacement="end"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="start"
            labelPlacement="start"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="top"
            labelPlacement="top"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="bottom"
            labelPlacement="bottom"
          />
        </Stack>
      </div>
    </Stack>
  );
}

export function FormControlLabelStatesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="정상 상태"
      />
      <FormControlLabel
        control={<Checkbox disabled />}
        label="비활성화"
      />
      <FormControlLabel
        control={<Checkbox disabled checked />}
        label="비활성화 + 선택됨"
      />
    </Stack>
  );
}

export function FormControlLabelWithRadioGroupExample() {
  return (
    <RadioGroup defaultValue="option1">
      <FormControlLabel
        value="option1"
        control={<Radio />}
        label="옵션 1"
      />
      <FormControlLabel
        value="option2"
        control={<Radio />}
        label="옵션 2"
      />
      <FormControlLabel
        value="option3"
        control={<Radio />}
        label="옵션 3"
      />
    </RadioGroup>
  );
}

