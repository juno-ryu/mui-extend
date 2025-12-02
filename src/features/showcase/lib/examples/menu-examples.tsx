"use client";

import { useState } from "react";
import { Stack, Menu, MenuItem, Button, DesignIcon } from "@/core/design-systems";

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
}

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
}

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
}

