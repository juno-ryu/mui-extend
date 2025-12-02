"use client";

import { useState } from "react";
import { Stack, Snackbar, Button, DesignIcon } from "@/core/design-systems";

export function SnackbarBasicExample() {
  const [open, setOpen] = useState(false);

  return (
    <Stack direction="column" spacing={2}>
      <Button
        variant="outlined"
        color="augment/gray/800"
        onClick={() => setOpen(true)}
      >
        스낵바 열기
      </Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="기본 스낵바 메시지입니다."
        variant="default"
        mode="light"
        iconVariant={{
          default: null,
        }}
      />
    </Stack>
  );
}

export function SnackbarVariantsExample() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button
          variant="outlined"
          color="augment/gray/800"
          onClick={() => setOpen("info")}
        >
          Info
        </Button>
        <Button
          variant="outlined"
          color="augment/gray/800"
          onClick={() => setOpen("success")}
        >
          Success
        </Button>
        <Button
          variant="outlined"
          color="augment/gray/800"
          onClick={() => setOpen("warning")}
        >
          Warning
        </Button>
        <Button
          variant="outlined"
          color="augment/gray/800"
          onClick={() => setOpen("error")}
        >
          Error
        </Button>
      </Stack>
      <Snackbar
        open={open === "info"}
        onClose={() => setOpen(null)}
        message="정보 메시지입니다."
        variant="info"
        mode="light"
        iconVariant={{
          info: <DesignIcon variant="InformationOutline" />,
        }}
      />
      <Snackbar
        open={open === "success"}
        onClose={() => setOpen(null)}
        message="성공 메시지입니다."
        variant="success"
        mode="light"
        iconVariant={{
          success: <DesignIcon variant="Checkmark" />,
        }}
      />
      <Snackbar
        open={open === "warning"}
        onClose={() => setOpen(null)}
        message="경고 메시지입니다."
        variant="warning"
        mode="light"
        iconVariant={{
          warning: <DesignIcon variant="AlertOutline" />,
        }}
      />
      <Snackbar
        open={open === "error"}
        onClose={() => setOpen(null)}
        message="에러 메시지입니다."
        variant="error"
        mode="light"
        iconVariant={{
          error: <DesignIcon variant="NoticeOutline" />,
        }}
      />
    </Stack>
  );
}

export function SnackbarModesExample() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button
          variant="outlined"
          color="augment/gray/800"
          onClick={() => setOpen("light")}
        >
          Light Mode
        </Button>
        <Button
          variant="outlined"
          color="augment/gray/800"
          onClick={() => setOpen("dark")}
        >
          Dark Mode
        </Button>
      </Stack>
      <Snackbar
        open={open === "light"}
        onClose={() => setOpen(null)}
        message="라이트 모드 스낵바입니다."
        variant="info"
        mode="light"
        iconVariant={{
          info: <DesignIcon variant="InformationOutline" />,
        }}
      />
      <Snackbar
        open={open === "dark"}
        onClose={() => setOpen(null)}
        message="다크 모드 스낵바입니다."
        variant="info"
        mode="dark"
        iconVariant={{
          info: <DesignIcon variant="InformationOutline" />,
        }}
      />
    </Stack>
  );
}

