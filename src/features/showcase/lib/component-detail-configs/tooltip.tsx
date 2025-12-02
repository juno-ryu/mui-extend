import { ComponentDetailConfig } from "./types";
import {
  TooltipBasicExample,
  TooltipColorsExample,
  TooltipWithIconExample,
} from "@/features/showcase/lib/examples/tooltip-examples";

export const tooltipConfig: ComponentDetailConfig = {
  slug: "tooltip",
  isAugmentColor: true,
  designNote: [
    "Tooltip 컴포넌트는 요소에 마우스를 올렸을 때 보조 정보를 제공하는 컴포넌트입니다.",
    "기본적으로 arrow: true, color: 'augment/gray/700'이 설정되어 있으며, color prop에 augment 컬러 토큰을 사용합니다.",
    "frontBumper/backBumper 값을 통해 스크롤바 여유 공간이 생겼을 때 툴팁의 시각적 정렬을 보정합니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: TooltipBasicExample,
      code: `import { Stack, Button, Tooltip } from "@/core/design-systems";

export function TooltipBasicExample() {
  return (
    <Stack direction="row" spacing={2}>
      <Tooltip title="기본 툴팁">
        <Button variant="contained" color="augment/gray/800">
          Hover me
        </Button>
      </Tooltip>
      <Tooltip title="위쪽" placement="top">
        <Button variant="outlined" color="augment/gray/800">
          Top
        </Button>
      </Tooltip>
      <Tooltip title="오른쪽" placement="right">
        <Button variant="outlined" color="augment/gray/800">
          Right
        </Button>
      </Tooltip>
      <Tooltip title="아래쪽" placement="bottom">
        <Button variant="outlined" color="augment/gray/800">
          Bottom
        </Button>
      </Tooltip>
      <Tooltip title="왼쪽" placement="left">
        <Button variant="outlined" color="augment/gray/800">
          Left
        </Button>
      </Tooltip>
    </Stack>
  );
}`,
    },
    {
      title: "Colors",
      section: "variants",
      render: TooltipColorsExample,
      code: `import { Stack, Button, Tooltip } from "@/core/design-systems";

export function TooltipColorsExample() {
  return (
    <Stack direction="row" spacing={2}>
      <Tooltip title="Gray 700" color="augment/gray/700">
        <Button variant="contained" color="augment/gray/800">
          Gray 700
        </Button>
      </Tooltip>
      <Tooltip title="Primary 600" color="augment/primary/600">
        <Button variant="contained" color="augment/primary/600">
          Primary 600
        </Button>
      </Tooltip>
      <Tooltip title="Cyan 500" color="augment/cyan/500">
        <Button variant="contained" color="augment/cyan/500">
          Cyan 500
        </Button>
      </Tooltip>
      <Tooltip title="Yellow 500" color="augment/yellow/500">
        <Button variant="contained" color="augment/yellow/500">
          Yellow 500
        </Button>
      </Tooltip>
      <Tooltip title="Red 500" color="augment/red/500">
        <Button variant="contained" color="augment/red/500">
          Red 500
        </Button>
      </Tooltip>
    </Stack>
  );
}`,
    },
    {
      title: "아이콘 및 Bumper",
      section: "variants",
      render: TooltipWithIconExample,
      code: `import { Stack, Button, Tooltip, DesignIcon } from "@/core/design-systems";

export function TooltipWithIconExample() {
  return (
    <Stack direction="row" spacing={2}>
      <Tooltip
        title="아이콘과 함께 사용하는 툴팁"
        color="augment/gray/700"
        frontBumper
      >
        <Button variant="outlined" color="augment/gray/800">
          <DesignIcon variant="InformationOutline" />
        </Button>
      </Tooltip>
      <Tooltip
        title="backBumper 적용 툴팁"
        color="augment/gray/700"
        backBumper
      >
        <Button variant="outlined" color="augment/gray/800">
          <DesignIcon variant="NoticeOutline" />
        </Button>
      </Tooltip>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    addedProps: [
      {
        name: "frontBumper",
        type: "boolean",
        description:
          "body에 padding-right가 추가된 경우(예: 스크롤바 보정) 툴팁의 앞쪽 레이아웃을 보정하기 위한 플래그입니다.",
      },
      {
        name: "backBumper",
        type: "boolean",
        description:
          "body에 padding-right가 추가된 경우 툴팁의 뒤쪽 레이아웃을 보정하기 위한 플래그입니다.",
      },
    ],
    defaultValueChanges: [
      {
        prop: "arrow",
        customValue: "true",
        muiDefault: "false",
        note: "기본적으로 화살표가 표시되도록 설정했습니다.",
      },
      {
        prop: "color",
        customValue: "'augment/gray/700'",
        muiDefault: "'default'",
        note: "augment 컬러 토큰을 기본 색상 체계로 사용합니다.",
      },
    ],
    styleChanges: [
      {
        description:
          "color prop이 augment/[color]/[shade] 형식인지 검증하고, 유효하지 않은 값은 augment/gray/700으로 폴백합니다.",
        code: "validateColor(ownerColor) ? ownerColor : 'augment/gray/700'",
      },
      {
        description:
          "툴팁 본문에 label/label1 타이포그래피를 사용하고, arrow 색상과 배경색을 선택된 augment 컬러에 맞춰 설정합니다.",
        code: "fontSize/lineHeight/letterSpacing + arrow color/background",
      },
      {
        description:
          "툴팁 위치(상/하/좌/우)에 따라 margin과 arrow 위치, border radius를 세밀하게 조정합니다.",
        code: "tooltipPlacementLeft/Right/Top/Bottom",
      },
      {
        description:
          "툴팁 내용에 DesignIcon이 포함된 경우 아이콘 크기를 16px로 고정하여 텍스트와 정렬을 맞춥니다.",
        code: ".MuiDesignIcon-root width: 16px",
      },
    ],
  },
};
