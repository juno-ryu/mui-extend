import { ComponentDetailConfig } from "./types";
import {
  BottomNavigationBasicExample,
  BottomNavigationShowLabelsExample,
} from "@/features/showcase/lib/examples/bottom-navigation-examples";

export const bottomNavigationConfig: ComponentDetailConfig = {
  slug: "bottom-navigation",
  designNote: [
    "BottomNavigation 컴포넌트는 하단 네비게이션 바를 제공합니다.",
    "기본적으로 상단에 gray/dim/200 색상의 1px 테두리가 설정되어 있습니다.",
    "BottomNavigationAction은 ripple 효과가 비활성화되어 있으며, 색상과 타이포그래피가 커스터마이징되어 있습니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: BottomNavigationBasicExample,
      code: `import { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Stack,
  Typography,
  DesignIcon,
} from "@/core/design-systems";

export function BottomNavigationBasicExample() {
  const [value, setValue] = useState(0);

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="body/body2">현재 선택: {value}</Typography>
      <BottomNavigation
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction
          label="홈"
          icon={<DesignIcon variant="NavHomeOutline" />}
        />
        <BottomNavigationAction
          label="즐겨찾기"
          icon={<DesignIcon variant="Star" />}
        />
        <BottomNavigationAction
          label="프로필"
          icon={<DesignIcon variant="NavProfileOutline" />}
        />
      </BottomNavigation>
    </Stack>
  );
}`,
    },
    {
      title: "레이블 표시",
      section: "variants",
      render: BottomNavigationShowLabelsExample,
      code: `import { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Stack,
  Typography,
  DesignIcon,
} from "@/core/design-systems";

export function BottomNavigationShowLabelsExample() {
  const [value, setValue] = useState(0);

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="body/body2">showLabels prop 사용</Typography>
      <BottomNavigation
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        showLabels
      >
        <BottomNavigationAction
          label="홈"
          icon={<DesignIcon variant="NavHomeOutline" />}
        />
        <BottomNavigationAction
          label="즐겨찾기"
          icon={<DesignIcon variant="Star" />}
        />
        <BottomNavigationAction
          label="프로필"
          icon={<DesignIcon variant="NavProfileOutline" />}
        />
      </BottomNavigation>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    styleChanges: [
      {
        description:
          "상단에 gray/dim/200 색상의 1px 테두리를 추가하여 시각적 구분을 제공합니다.",
        code: "borderTop: `1px solid ${theme.palette['gray/dim/200']}`",
      },
      {
        description:
          "BottomNavigationAction의 ripple 효과를 비활성화하고, maxWidth를 100%, minWidth를 auto로 설정하여 레이아웃을 개선했습니다.",
        code: "defaultProps: { disableRipple: true, disableTouchRipple: true, sx: { maxWidth: '100%', minWidth: 'auto' } }",
      },
      {
        description:
          "BottomNavigationAction의 기본 색상을 gray/800으로, 선택된 항목의 색상을 black으로 설정했습니다.",
        code: "color: theme.palette['gray/800'], '&.Mui-selected': { color: theme.palette['black'] }",
      },
      {
        description:
          "BottomNavigationAction의 레이블 타이포그래피를 label/label2로 설정하고, 선택된 항목의 폰트 굵기를 700으로 설정했습니다.",
        code: "'.MuiBottomNavigationAction-label': { fontSize: theme.typography['label/label2'].fontSize, fontWeight: 500 }, '&.Mui-selected .MuiBottomNavigationAction-label': { fontWeight: 700 }",
      },
    ],
  },
};
