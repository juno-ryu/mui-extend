import { ComponentDetailConfig } from "./types";
import {
  SnackbarBasicExample,
  SnackbarVariantsExample,
  SnackbarModesExample,
} from "@/features/showcase/lib/examples/snackbar-examples";

export const snackbarConfig: ComponentDetailConfig = {
  slug: "snackbar",
  designNote: [
    "Snackbar 컴포넌트는 사용자에게 간단한 알림 메시지를 표시하는 컴포넌트입니다.",
    "notistack과 통합되어 있으며, variant에 따라 info, success, warning, error 스타일을 제공합니다.",
    "mode prop에 따라 light와 dark 모드를 지원하며, iconVariant를 통해 각 variant에 맞는 아이콘을 표시할 수 있습니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: SnackbarBasicExample,
      code: `import { useState } from "react";
import { Stack, Snackbar, Button } from "@/core/design-systems";

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
}`,
    },
    {
      title: "Variants",
      section: "variants",
      render: SnackbarVariantsExample,
      code: `import { useState } from "react";
import { Stack, Snackbar, Button, DesignIcon } from "@/core/design-systems";

export function SnackbarVariantsExample() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button onClick={() => setOpen("info")}>Info</Button>
        <Button onClick={() => setOpen("success")}>Success</Button>
        <Button onClick={() => setOpen("warning")}>Warning</Button>
        <Button onClick={() => setOpen("error")}>Error</Button>
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
      {/* success, warning, error도 동일한 패턴 */}
    </Stack>
  );
}`,
    },
    {
      title: "Modes",
      section: "variants",
      render: SnackbarModesExample,
      code: `import { useState } from "react";
import { Stack, Snackbar, Button, DesignIcon } from "@/core/design-systems";

export function SnackbarModesExample() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button onClick={() => setOpen("light")}>Light Mode</Button>
        <Button onClick={() => setOpen("dark")}>Dark Mode</Button>
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
}`,
    },
  ],
  customization: {
    addedProps: [
      {
        name: "mode",
        type: "'dark' | 'light'",
        description:
          "스낵바의 색상 모드를 지정합니다. light는 흰색 배경, dark는 어두운 배경을 사용합니다.",
      },
      {
        name: "iconVariant",
        type: "Record<string, React.ReactElement>",
        description:
          "각 variant에 맞는 아이콘을 지정합니다. variant 키와 React 요소를 매핑합니다.",
      },
    ],
    defaultValueChanges: [
      {
        prop: "variant",
        customValue: "'default'",
        muiDefault: "N/A (notistack 통합)",
        note: "기본 variant를 default로 설정했습니다.",
      },
      {
        prop: "mode",
        customValue: "'light'",
        muiDefault: "N/A (커스텀 prop)",
        note: "기본 mode를 light로 설정했습니다.",
      },
      {
        prop: "ContentProps.elevation",
        customValue: "2",
        muiDefault: "6",
        note: "기본 elevation을 2로 설정하여 더 평면적인 디자인을 제공합니다.",
      },
      {
        prop: "ContentProps.sx.padding",
        customValue: "'16px'",
        muiDefault: "N/A",
        note: "Content의 padding을 16px로 설정했습니다.",
      },
      {
        prop: "ContentProps.sx.borderRadius",
        customValue: "'8px'",
        muiDefault: "4px",
        note: "Content의 borderRadius를 8px로 설정했습니다.",
      },
      {
        prop: "ContentProps.sx.maxWidth",
        customValue: "'360px'",
        muiDefault: "N/A",
        note: "Content의 최대 너비를 360px로 제한했습니다.",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: ["default", "info", "success", "warning", "error"],
      },
    ],
    styleChanges: [
      {
        description:
          "variant에 따라 아이콘의 배경색과 색상이 변경됩니다. info는 state/info, success는 state/success, warning은 state/warning, error는 state/danger 색상을 사용합니다.",
        code: "snackbarVariants(theme) + icon background/color",
      },
      {
        description:
          "mode에 따라 Content의 배경색과 텍스트 색상이 변경됩니다. light는 white/gray/800, dark는 어두운 배경을 사용합니다.",
        code: "snackbarModes(theme) + Paper background/color",
      },
      {
        description:
          "message의 타이포그래피가 body/body6로 설정되며, fontWeight가 600으로 설정됩니다.",
        code: "fontSize/lineHeight/letterSpacing: body/body6, fontWeight: 600",
      },
      {
        description:
          "DesignIcon의 크기가 24px로 고정되며, borderRadius가 8px, padding이 4px로 설정됩니다.",
        code: ".MuiDesignIcon-root: width: 24px, height: 24px, borderRadius: 8px, padding: 4px",
      },
      {
        description:
          "action의 marginRight가 0으로 설정되어 아이콘과 텍스트 사이 간격이 조정됩니다.",
        code: "& .MuiSnackbarContent-action: marginRight: 0",
      },
    ],
  },
};

