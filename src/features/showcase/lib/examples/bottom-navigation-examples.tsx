"use client";

import { useState } from "react";
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
    <Stack direction="column" spacing={2} width="100%">
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
}

export function BottomNavigationShowLabelsExample() {
  const [value, setValue] = useState(0);

  return (
    <Stack direction="column" spacing={2} width="100%">
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
}
