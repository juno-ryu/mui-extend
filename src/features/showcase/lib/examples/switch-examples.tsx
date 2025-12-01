"use client";

import { Switch, FormControlLabel } from "@/core/design-systems";

export function SwitchBasicExample() {
  return (
    <>
      <FormControlLabel
        control={<Switch />}
        label="기본 스위치"
      />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="켜진 상태"
      />
      <FormControlLabel
        control={<Switch disabled />}
        label="비활성화"
      />
      <FormControlLabel
        control={<Switch disabled checked />}
        label="비활성화 + 켜짐"
      />
    </>
  );
}

export function SwitchSizesExample() {
  return (
    <>
      <FormControlLabel
        control={<Switch size="small" defaultChecked />}
        label="Small"
      />
      <FormControlLabel
        control={<Switch size="medium" defaultChecked />}
        label="Medium"
      />
    </>
  );
}

export function SwitchColorsExample() {
  return (
    <>
      <FormControlLabel
        control={<Switch color="black" defaultChecked />}
        label="black (기본)"
      />
      <FormControlLabel
        control={<Switch color="augment/primary/600" defaultChecked />}
        label="augment/primary/600"
      />
      <FormControlLabel
        control={<Switch color="augment/red/500" defaultChecked />}
        label="augment/red/500"
      />
      <FormControlLabel
        control={<Switch color="augment/green/500" defaultChecked />}
        label="augment/green/500"
      />
      <FormControlLabel
        control={<Switch color="augment/blue/500" defaultChecked />}
        label="augment/blue/500"
      />
    </>
  );
}

