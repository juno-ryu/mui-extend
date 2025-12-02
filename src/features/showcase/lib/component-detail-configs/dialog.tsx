import { ComponentDetailConfig } from "./types";
import {
  DialogBasicExample,
  DialogMaxWidthExample,
  DialogFullScreenExample,
} from "@/features/showcase/lib/examples/dialog-examples";

export const dialogConfig: ComponentDetailConfig = {
  slug: "dialog",
  designNote: [
    "Dialog 컴포넌트는 모달 형태의 다이얼로그를 표시하는 컴포넌트입니다.",
    "기본적으로 PaperProps에 elevation: 24, minWidth: '312px', borderRadius: '24px'가 설정되어 있어 일관된 디자인을 제공합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: DialogBasicExample,
      code: `import { useState } from "react";
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
            '312px', borderRadius: '24px'가 기본값으로 설정되어 있습니다.
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
}`,
    },
    {
      title: "최대 너비 제한",
      section: "variants",
      render: DialogMaxWidthExample,
      code: `import { useState } from "react";
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
}`,
    },
    {
      title: "전체 화면 다이얼로그",
      section: "variants",
      render: DialogFullScreenExample,
      code: `import { useState } from "react";
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
}`,
    },
  ],
  customization: {
    defaultValueChanges: [
      {
        prop: "PaperProps.elevation",
        customValue: "24",
        muiDefault: "8",
        note: "더 강한 그림자 효과를 위해 elevation을 24로 설정했습니다.",
      },
      {
        prop: "PaperProps.sx.minWidth",
        customValue: "'312px'",
        muiDefault: "undefined",
        note: "최소 너비를 312px로 설정하여 일관된 크기를 보장합니다.",
      },
      {
        prop: "PaperProps.sx.borderRadius",
        customValue: "'24px'",
        muiDefault: "theme.shape.borderRadius (4px)",
        note: "더 둥근 모서리를 위해 borderRadius를 24px로 설정했습니다.",
      },
    ],
    styleChanges: [
      {
        description:
          "PaperProps의 기본값을 통해 모든 Dialog에 일관된 elevation, minWidth, borderRadius를 적용합니다.",
        code: "defaultProps.PaperProps",
      },
    ],
  },
};

