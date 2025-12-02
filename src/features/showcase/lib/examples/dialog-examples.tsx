"use client";

import { useState } from "react";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Dialog,
  Button,
  Typography,
  Stack,
} from "@/core/design-systems";

export function DialogBasicExample() {
  const [open, setOpen] = useState(false);

  return (
    <Stack direction="column" spacing={2}>
      <Button onClick={() => setOpen(true)}>다이얼로그 열기</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>다이얼로그 제목</DialogTitle>
        <DialogContent>
          <Typography>
            이것은 기본 다이얼로그입니다. PaperProps에 elevation: 24, minWidth:
            &apos;312px&apos;, borderRadius: &apos;24px&apos;가 기본값으로 설정되어 있습니다.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="outlined">
            취소
          </Button>
          <Button onClick={() => setOpen(false)} variant="contained">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

export function DialogMaxWidthExample() {
  const [open, setOpen] = useState(false);

  return (
    <Stack direction="column" spacing={2}>
      <Button onClick={() => setOpen(true)}>다이얼로그 열기 (maxWidth)</Button>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
        <DialogTitle>최대 너비 제한</DialogTitle>
        <DialogContent>
          <Typography>
            maxWidth prop을 사용하여 다이얼로그의 최대 너비를 제한할 수
            있습니다. sm, md, lg, xl 등의 값을 사용할 수 있습니다.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="outlined">
            취소
          </Button>
          <Button onClick={() => setOpen(false)} variant="contained">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

export function DialogFullScreenExample() {
  const [open, setOpen] = useState(false);

  return (
    <Stack direction="column" spacing={2}>
      <Button onClick={() => setOpen(true)}>전체 화면 다이얼로그</Button>
      <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
        <DialogTitle>전체 화면 다이얼로그</DialogTitle>
        <DialogContent>
          <Typography>
            fullScreen prop을 true로 설정하면 다이얼로그가 전체 화면을
            차지합니다.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="outlined">
            취소
          </Button>
          <Button onClick={() => setOpen(false)} variant="contained">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

