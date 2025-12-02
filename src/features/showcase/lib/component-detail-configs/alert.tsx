import { ComponentDetailConfig } from "./types";
import {
  AlertBasicExample,
  AlertVariantsExample,
  AlertSizesExample,
  AlertWithActionExample,
} from "@/features/showcase/lib/examples/alert-examples";

export const alertConfig: ComponentDetailConfig = {
  slug: "alert",
  isAugmentColor: true,
  designNote: [
    "Alert 컴포넌트는 color prop에 augment 컬러 토큰(예: augment/cyan/500, augment/yellow/500, augment/red/500)을 사용해 상태(정보/경고/에러)에 따른 색상을 일관되게 표현합니다.",
    "severity 대신 color 기반으로 동작하도록 커스터마이징되어 있으며, 잘못된 문자열이 들어오면 augment/gray/800으로 폴백되도록 검증 로직을 갖습니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: AlertBasicExample,
      code: `import { Stack, Alert } from "@/core/design-systems";

export function AlertBasicExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Alert color="augment/cyan/500">정보 알림 (augment/cyan/500)</Alert>
      <Alert color="augment/yellow/500">경고 알림 (augment/yellow/500)</Alert>
      <Alert color="augment/red/500">에러 알림 (augment/red/500)</Alert>
    </Stack>
  );
}`,
    },
    {
      title: "Variants",
      section: "variants",
      render: AlertVariantsExample,
      code: `import { Stack, Alert } from "@/core/design-systems";

export function AlertVariantsExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Alert color="augment/cyan/500" variant="standard">
        Standard Alert
      </Alert>
      <Alert color="augment/cyan/500" variant="filled">
        Filled Alert
      </Alert>
      <Alert color="augment/cyan/500" variant="outlined">
        Outlined Alert
      </Alert>
    </Stack>
  );
}`,
    },
    {
      title: "Sizes",
      section: "variants",
      render: AlertSizesExample,
      code: `import { Stack, Alert } from "@/core/design-systems";

export function AlertSizesExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Alert color="augment/cyan/500" size="small">
        Small
      </Alert>
      <Alert color="augment/cyan/500" size="medium">
        Medium
      </Alert>
      <Alert color="augment/cyan/500" size="large">
        Large
      </Alert>
      <Alert color="augment/cyan/500" size="extraLarge">
        Extra Large
      </Alert>
    </Stack>
  );
}`,
    },
    {
      title: "액션과 닫기 버튼",
      section: "variants",
      render: AlertWithActionExample,
      code: `import { Stack, Alert, Button } from "@/core/design-systems";

export function AlertWithActionExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Alert
        color="augment/red/500"
        variant="filled"
        onClose={() => {
          // noop
        }}
        action={
          <Button
            size="small"
            color="augment/red/500"
            variant="contained"
          >
            액션
          </Button>
        }
      >
        닫기 아이콘과 액션 버튼이 포함된 알림입니다.
      </Alert>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    addedProps: [
      {
        name: "size",
        type: '"small" | "medium" | "large" | "extraLarge" | "customA" | "customB"',
        description:
          "Alert의 내부 패딩과 타이포그래피, 아이콘 크기를 제어하는 커스텀 size입니다.",
      },
    ],
    defaultValueChanges: [
      {
        prop: "severity",
        customValue: "undefined",
        muiDefault: "\"success\" | \"info\" | \"warning\" | \"error\"",
        note: "core에서는 severity 대신 color 기반으로만 동작하도록 커스터마이징했습니다.",
      },
      {
        prop: "color",
        customValue: "'augment/gray/800'",
        muiDefault: "theme.palette[severity].color",
        note: "augment 컬러 토큰을 기본 색상 체계로 사용합니다.",
      },
      {
        prop: "slots.closeIcon",
        customValue: "<DesignIcon />",
        muiDefault: "기본 Close 아이콘",
        note: "DesignIcon을 사용해 닫기 아이콘을 커스터마이징합니다.",
      },
      {
        prop: "slots.closeButton",
        customValue: "<IconButton />",
        muiDefault: "기본 IconButton",
        note: "커스텀 IconButton을 사용해 액션 영역을 구성합니다.",
      },
      {
        prop: "iconMapping",
        customValue:
          "{ 'augment/cyan/500': InformationOutline, 'augment/yellow/500': AlertOutline, 'augment/red/500': NoticeOutline }",
        muiDefault: "severity 기반 기본 아이콘",
        note: "augment 컬러 토큰과 DesignIcon variant를 매핑해 상태별 아이콘을 정의합니다.",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: ["standard", "filled", "outlined", "customA", "customB"],
      },
      {
        type: "size",
        values: ["small", "medium", "large", "extraLarge", "customA", "customB"],
      },
    ],
    styleChanges: [
      {
        description:
          "size별로 패딩과 타이포그래피(label/label2, label/label1, body/body6, body/body5) 및 아이콘 크기를 조정합니다.",
        code: "alertSizes(theme)",
      },
      {
        description:
          "color prop이 augment/[color]/[shade] 형식인지 검증하고, 유효하지 않은 값은 augment/gray/800으로 폴백합니다.",
        code: "/^augment\\/[a-zA-Z]+\\/\\d+$/.test(color)",
      },
      {
        description:
          "standard/filled/outlined variant별 텍스트/배경/테두리 색상을 CSS 변수로 정의하고, augment 팔레트를 기반으로 계산합니다.",
        code: "--variant-standard*, --variant-filled*, --variant-outlined*",
      },
      {
        description:
          "아이콘 영역(.MuiAlert-icon)과 메시지 영역(.MuiAlert-message), 액션 영역(.MuiAlert-action)의 flex 레이아웃과 간격을 재정의해 정렬을 개선했습니다.",
        code: "icon/message/action styleOverrides",
      },
      {
        description:
          "액션 영역의 텍스트 색상을 선택된 augment 컬러의 contrastText로 맞춰, filled 상태에서도 액션 버튼과 닫기 아이콘이 잘 보이도록 조정했습니다.",
        code: "theme.palette[augmentColor].contrastText",
      },
    ],
  },
};


