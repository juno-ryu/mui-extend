import { ComponentDetailConfig } from "./types";
import {
  MenuBasicExample,
  MenuWithIconsExample,
  MenuSelectedExample,
} from "@/features/showcase/lib/examples/menu-examples";

export const menuConfig: ComponentDetailConfig = {
  slug: "menu",
  designNote: [
    "Menu 컴포넌트는 드롭다운 메뉴를 표시하기 위한 컴포넌트입니다.",
    "paper의 variant에 따라 menu와 selectedMenu 스타일을 제공하며, selectedMenu variant는 선택된 항목이 있는 메뉴에 최적화된 스타일을 제공합니다.",
    "MenuList와 MenuItem의 스타일이 커스터마이징되어 있으며, 아이콘과 텍스트를 함께 사용할 수 있습니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: MenuBasicExample,
      code: `import { useState } from "react";
import { Stack, Menu, MenuItem, Button } from "@/core/design-systems";

export function MenuBasicExample() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        color="augment/gray/800"
        onClick={handleClick}
      >
        메뉴 열기
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>프로필</MenuItem>
        <MenuItem onClick={handleClose}>설정</MenuItem>
        <MenuItem onClick={handleClose}>로그아웃</MenuItem>
      </Menu>
    </Stack>
  );
}`,
    },
    {
      title: "아이콘 포함",
      section: "variants",
      render: MenuWithIconsExample,
      code: `import { useState } from "react";
import { Stack, Menu, MenuItem, Button, DesignIcon } from "@/core/design-systems";

export function MenuWithIconsExample() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        color="augment/gray/800"
        onClick={handleClick}
      >
        아이콘 메뉴
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <DesignIcon variant="NavProfileOutline" />
          프로필
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DesignIcon variant="InformationOutline" />
          설정
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DesignIcon variant="NoticeOutline" />
          로그아웃
        </MenuItem>
      </Menu>
    </Stack>
  );
}`,
    },
    {
      title: "선택된 항목",
      section: "variants",
      render: MenuSelectedExample,
      code: `import { useState } from "react";
import { Stack, Menu, MenuItem, Button } from "@/core/design-systems";

export function MenuSelectedExample() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const options = ["옵션 1", "옵션 2", "옵션 3"];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        color="augment/gray/800"
        onClick={handleClick}
      >
        선택된 항목: {options[selectedIndex]}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    additionalVariants: [
      {
        type: "variant",
        values: ["menu", "selectedMenu"],
      },
    ],
    styleChanges: [
      {
        description:
          "paper의 variant에 따라 menu와 selectedMenu 스타일을 제공합니다. selectedMenu variant는 선택된 항목이 있는 메뉴에 최적화된 스타일을 제공합니다.",
        code: "menuVariants(theme) + paper.styleOverrides.variants",
      },
      {
        description:
          "selectedMenu variant의 경우, MenuList의 padding과 gap이 커스터마이징되어 있으며, MenuItem의 스타일도 세밀하게 조정됩니다.",
        code: "ul: { padding: '6px', gap: '4px' }, li: { padding: '8px', gap: '8px', borderRadius: '4px' }",
      },
      {
        description:
          "MenuItem의 child와 adornment 스타일이 커스터마이징되어 있으며, 아이콘과 텍스트를 함께 사용할 수 있습니다.",
        code: ".MuiMenuItem-child: { fontSize, lineHeight, fontWeight, color }, .MuiMenuItem-adornment: { width: '20px', color }",
      },
      {
        description:
          "선택된 항목(selected)의 경우 배경색이 primary/dim/200으로 변경되고, 텍스트와 아이콘의 색상이 강조됩니다.",
        code: "&.Mui-selected: { background: primary/dim/200, fontWeight: 600, color: primary/600 }",
      },
      {
        description:
          "포커스 상태의 경우 ripple 효과가 제거되고, 배경색이 gray/dim/50으로 변경됩니다.",
        code: "&.Mui-focusVisible: { background: gray/dim/50, ripple: opacity 0 }",
      },
      {
        description:
          "비활성화된 항목의 경우 텍스트와 아이콘의 색상이 gray/400, gray/200으로 변경됩니다.",
        code: "&.Mui-disabled: { color: gray/400, iconColor: gray/200 }",
      },
    ],
  },
};

