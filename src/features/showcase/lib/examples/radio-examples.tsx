"use client";

import {
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack,
} from "@/core/design-systems";

export function RadioBasicExample() {
  return (
    <FormControl>
      <FormLabel>기본 라디오 그룹</FormLabel>
      <Stack direction="column" spacing={0.5} sx={{ mt: 2 }}>
        <FormControlLabel control={<Radio />} label="옵션 1" />
        <FormControlLabel
          control={<Radio defaultChecked />}
          label="옵션 2 (선택됨)"
        />
        <FormControlLabel control={<Radio disabled />} label="옵션 3 (비활성화)" />
        <FormControlLabel
          control={<Radio disabled checked />}
          label="옵션 4 (비활성화 + 선택됨)"
        />
      </Stack>
    </FormControl>
  );
}

export function RadioSizesExample() {
  return (
    <FormControl>
      <FormLabel>사이즈</FormLabel>
      <Stack direction="column" spacing={0.5} sx={{ mt: 2 }}>
        <FormControlLabel control={<Radio size="small" />} label="Small" />
        <FormControlLabel control={<Radio size="medium" />} label="Medium" />
      </Stack>
    </FormControl>
  );
}

export function RadioColorsExample() {
  return (
    <FormControl>
      <FormLabel>컬러 토큰</FormLabel>
      <Stack direction="column" spacing={0.5} sx={{ mt: 2 }}>
        <FormControlLabel
          control={<Radio color="augment/gray/800" defaultChecked />}
          label="augment/gray/800 (기본)"
        />
        <FormControlLabel
          control={<Radio color="augment/primary/600" defaultChecked />}
          label="augment/primary/600"
        />
        <FormControlLabel
          control={<Radio color="augment/red/500" defaultChecked />}
          label="augment/red/500"
        />
        <FormControlLabel
          control={<Radio color="augment/green/500" defaultChecked />}
          label="augment/green/500"
        />
        <FormControlLabel
          control={<Radio color="augment/blue/500" defaultChecked />}
          label="augment/blue/500"
        />
      </Stack>
    </FormControl>
  );
}


