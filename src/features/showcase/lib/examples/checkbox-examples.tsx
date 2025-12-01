"use client";

import { Checkbox, FormControlLabel } from "@/core/design-systems";

export function CheckboxBasicExample() {
  return (
    <>
      <FormControlLabel
        control={<Checkbox />}
        label="기본 체크박스"
      />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="체크된 상태"
      />
      <FormControlLabel
        control={<Checkbox indeterminate />}
        label="중간 상태 (indeterminate)"
      />
      <FormControlLabel
        control={<Checkbox disabled />}
        label="비활성화"
      />
      <FormControlLabel
        control={<Checkbox disabled checked />}
        label="비활성화 + 체크됨"
      />
    </>
  );
}

export function CheckboxSizesExample() {
  return (
    <>
      <FormControlLabel
        control={<Checkbox size="small" />}
        label="Small"
      />
      <FormControlLabel
        control={<Checkbox size="medium" />}
        label="Medium"
      />
    </>
  );
}

export function CheckboxColorsExample() {
  return (
    <>
      <FormControlLabel
        control={<Checkbox color="augment/gray/800" defaultChecked />}
        label="augment/gray/800 (기본)"
      />
      <FormControlLabel
        control={<Checkbox color="augment/primary/600" defaultChecked />}
        label="augment/primary/600"
      />
      <FormControlLabel
        control={<Checkbox color="augment/red/500" defaultChecked />}
        label="augment/red/500"
      />
      <FormControlLabel
        control={<Checkbox color="augment/green/500" defaultChecked />}
        label="augment/green/500"
      />
      <FormControlLabel
        control={<Checkbox color="augment/blue/500" defaultChecked />}
        label="augment/blue/500"
      />
    </>
  );
}

