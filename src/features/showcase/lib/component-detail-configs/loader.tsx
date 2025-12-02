import { ComponentDetailConfig } from "./types";
import {
  LoaderBasicExample,
  LoaderColorsExample,
  LoaderSizesExample,
} from "@/features/showcase/lib/examples/loader-examples";

export const loaderConfig: ComponentDetailConfig = {
  slug: "loader",
  isAugmentColor: true,
  designNote: [
    "Loader 컴포넌트는 로딩 상태를 표시하기 위한 컴포넌트입니다.",
    "variant에 따라 dot과 circle 스타일을 제공하며, color prop에 augment 컬러 토큰을 사용합니다.",
    "size prop으로 로더의 크기를 조절할 수 있으며, dot variant의 경우 애니메이션 효과가 적용됩니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: LoaderBasicExample,
      code: `import { Stack, Loader, Typography } from "@/core/design-systems";

export function LoaderBasicExample() {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack direction="column" spacing={1} alignItems="center">
        <Loader variant="dot" color="augment/primary/600" />
        <Typography variant="label/label2">Dot (기본)</Typography>
      </Stack>
      <Stack direction="column" spacing={1} alignItems="center">
        <Loader variant="circle" color="augment/primary/600" />
        <Typography variant="label/label2">Circle</Typography>
      </Stack>
    </Stack>
  );
}`,
    },
    {
      title: "Colors",
      section: "variants",
      render: LoaderColorsExample,
      code: `import { Stack, Loader } from "@/core/design-systems";

export function LoaderColorsExample() {
  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="row" spacing={4} alignItems="center">
        <Loader variant="dot" color="augment/primary/600" />
        <Loader variant="dot" color="augment/cyan/500" />
        <Loader variant="dot" color="augment/yellow/500" />
        <Loader variant="dot" color="augment/red/500" />
      </Stack>
      <Stack direction="row" spacing={4} alignItems="center">
        <Loader variant="circle" color="augment/primary/600" />
        <Loader variant="circle" color="augment/cyan/500" />
        <Loader variant="circle" color="augment/yellow/500" />
        <Loader variant="circle" color="augment/red/500" />
      </Stack>
    </Stack>
  );
}`,
    },
    {
      title: "Sizes",
      section: "variants",
      render: LoaderSizesExample,
      code: `import { Stack, Loader, Typography } from "@/core/design-systems";

export function LoaderSizesExample() {
  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="row" spacing={4} alignItems="center">
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="dot" color="augment/primary/600" size={4} />
          <Typography variant="label/label2">4px</Typography>
        </Stack>
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="dot" color="augment/primary/600" size={8} />
          <Typography variant="label/label2">8px (기본)</Typography>
        </Stack>
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="dot" color="augment/primary/600" size={12} />
          <Typography variant="label/label2">12px</Typography>
        </Stack>
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="dot" color="augment/primary/600" size={16} />
          <Typography variant="label/label2">16px</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={4} alignItems="center">
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="circle" color="augment/primary/600" size={16} />
          <Typography variant="label/label2">16px</Typography>
        </Stack>
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="circle" color="augment/primary/600" size={24} />
          <Typography variant="label/label2">24px</Typography>
        </Stack>
        <Stack direction="column" spacing={1} alignItems="center">
          <Loader variant="circle" color="augment/primary/600" size={32} />
          <Typography variant="label/label2">32px</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    addedProps: [
      {
        name: "variant",
        type: "'dot' | 'circle'",
        description:
          "로더의 스타일을 지정합니다. dot은 점 3개가 깜빡이는 애니메이션을, circle은 원형 프로그레스 바를 표시합니다.",
      },
      {
        name: "size",
        type: "number",
        description:
          "로더의 크기를 픽셀 단위로 지정합니다. dot variant의 경우 기본값은 8이며, circle variant는 CircularProgress의 size를 사용합니다.",
      },
      {
        name: "slotProps",
        type: "{ root?: BoxProps; dot?: BoxProps; circle?: CircularProgressProps }",
        description:
          "root, dot, circle 슬롯에 props를 전달할 수 있습니다.",
      },
    ],
    defaultValueChanges: [
      {
        prop: "component",
        customValue: "'div'",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "블록 요소로 사용하기 위해 기본 component를 div로 설정했습니다.",
      },
      {
        prop: "color",
        customValue: "'augment/primary/600'",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "augment 컬러 토큰을 기본 색상 체계로 사용합니다.",
      },
      {
        prop: "size",
        customValue: "8",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "dot variant의 기본 크기를 8px로 설정했습니다.",
      },
      {
        prop: "variant",
        customValue: "'dot'",
        muiDefault: "N/A (커스텀 컴포넌트)",
        note: "기본 variant를 dot으로 설정했습니다.",
      },
    ],
    additionalVariants: [
      {
        type: "variant",
        values: ["dot", "circle"],
      },
    ],
    styleChanges: [
      {
        description:
          "color prop이 augment/[color]/[shade] 형식인지 검증하고, 유효하지 않은 값은 augment/primary/600으로 폴백합니다.",
        code: "validateColor(ownerColor) ? ownerColor : 'augment/primary/600'",
      },
      {
        description:
          "dot variant는 3개의 점이 깜빡이는 애니메이션을 사용합니다. size에 따라 점의 크기와 간격이 자동으로 조정되며, box-shadow를 사용하여 양쪽 점을 생성합니다.",
        code: "width/height: size, marginRight/marginLeft: size * 2, boxShadow, animation: AnimationDotFlash",
      },
      {
        description:
          "circle variant는 CircularProgress 컴포넌트를 사용하여 원형 프로그레스 바를 표시합니다.",
        code: "MuiLoaderCircle = styled(CircularProgress)",
      },
    ],
  },
};

