import { ComponentDetailConfig } from "./types";
import {
  AlertTitleBasicExample,
  AlertTitleVariantsExample,
} from "@/features/showcase/lib/examples/alert-title-examples";

export const alertTitleConfig: ComponentDetailConfig = {
  slug: "alert-title",
  designNote: [
    "AlertTitle 컴포넌트는 Alert 내부에서 제목을 표시하는 컴포넌트입니다.",
    "기본적으로 component: 'strong', fontSize: '1.04em', lineHeight: 1.33333, letterSpacing: 0이 설정되어 있으며, fontWeight: 700, display: 'block', margin: '0px', padding: '0px'가 커스터마이징되어 있습니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: AlertTitleBasicExample,
      code: `import { Stack, Alert, AlertTitle } from "@/core/design-systems";

export function AlertTitleBasicExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Alert color="augment/cyan/500">
        <AlertTitle>정보 알림</AlertTitle>
        이것은 제목이 있는 알림입니다. AlertTitle은 component: 'strong', fontSize:
        '1.04em', fontWeight: 700이 기본값으로 설정되어 있습니다.
      </Alert>
      <Alert color="augment/yellow/500">
        <AlertTitle>경고 알림</AlertTitle>
        경고 메시지에 제목을 추가할 수 있습니다.
      </Alert>
      <Alert color="augment/red/500">
        <AlertTitle>에러 알림</AlertTitle>
        에러 메시지에도 제목을 사용할 수 있습니다.
      </Alert>
    </Stack>
  );
}`,
    },
    {
      title: "Variants",
      section: "variants",
      render: AlertTitleVariantsExample,
      code: `import { Stack, Alert, AlertTitle } from "@/core/design-systems";

export function AlertTitleVariantsExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Alert color="augment/cyan/500" variant="standard">
        <AlertTitle>Standard Variant</AlertTitle>
        Standard variant와 함께 사용되는 AlertTitle입니다.
      </Alert>
      <Alert color="augment/cyan/500" variant="filled">
        <AlertTitle>Filled Variant</AlertTitle>
        Filled variant와 함께 사용되는 AlertTitle입니다.
      </Alert>
      <Alert color="augment/cyan/500" variant="outlined">
        <AlertTitle>Outlined Variant</AlertTitle>
        Outlined variant와 함께 사용되는 AlertTitle입니다.
      </Alert>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    defaultValueChanges: [
      {
        prop: "component",
        customValue: "'strong'",
        muiDefault: "'div'",
        note: "시맨틱 HTML을 위해 strong 태그를 사용합니다.",
      },
      {
        prop: "fontSize",
        customValue: "'1.04em'",
        muiDefault: "theme.typography.fontSize",
        note: "부모 요소의 폰트 크기 대비 1.04배로 설정하여 제목임을 강조합니다.",
      },
      {
        prop: "lineHeight",
        customValue: "1.33333",
        muiDefault: "theme.typography.lineHeight",
        note: "일관된 줄 간격을 위해 1.33333으로 설정합니다.",
      },
      {
        prop: "letterSpacing",
        customValue: "0",
        muiDefault: "theme.typography.letterSpacing",
        note: "자간을 0으로 설정하여 깔끔한 타이포그래피를 제공합니다.",
      },
    ],
    styleChanges: [
      {
        description:
          "display: 'block', margin: '0px', padding: '0px'를 설정하여 레이아웃을 단순화했습니다.",
        code: "display: 'block', margin: '0px', padding: '0px'",
      },
      {
        description:
          "fontWeight: 700을 설정하여 제목의 강조를 강화했습니다.",
        code: "fontWeight: 700",
      },
      {
        description:
          "color: 'currentColor'를 설정하여 부모 Alert의 색상을 상속받도록 했습니다.",
        code: "color: 'currentColor'",
      },
    ],
  },
};

