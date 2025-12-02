"use client";

import {
  TextField,
  InputAdornment,
  DesignIcon,
  Stack,
} from "@/core/design-systems";

export function InputAdornmentBasicExample() {
  return (
    <Stack direction="column" spacing={2}>
      <TextField
        label="시작 위치"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DesignIcon variant="Search" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="끝 위치"
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <DesignIcon variant="Close" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="양쪽 모두"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DesignIcon variant="Search" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <DesignIcon variant="Close" />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}

export function InputAdornmentWithTextExample() {
  return (
    <Stack direction="column" spacing={2}>
      <TextField
        label="텍스트 어드온먼트"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">₩</InputAdornment>
          ),
        }}
      />
      <TextField
        label="텍스트 + 아이콘"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DesignIcon variant="Search" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">원</InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}

export function InputAdornmentStatesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <TextField
        label="정상 상태"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DesignIcon variant="Search" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="비활성화"
        variant="outlined"
        size="small"
        disabled
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DesignIcon variant="Search" />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}

