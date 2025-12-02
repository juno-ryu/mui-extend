import { ComponentDetailConfig } from "./types";
import {
  DrawerTemporaryExample,
  DrawerAnchorsExample,
} from "@/features/showcase/lib/examples/drawer-examples";

export const drawerConfig: ComponentDetailConfig = {
  slug: "drawer",
  designNote: [
    "Drawer 컴포넌트는 사이드에서 슬라이드되는 패널을 제공합니다.",
    "기본적으로 elevation: 24가 설정되어 있으며, modal 배경색이 gray/dim/600으로 커스터마이징되어 있습니다.",
  ],
  usageExamples: [
    {
      title: "임시 Drawer",
      section: "basic",
      render: DrawerTemporaryExample,
      code: `import { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  Drawer,
  Button,
  Stack,
  Typography,
} from "@/core/design-systems";

export function DrawerTemporaryExample() {
  const [open, setOpen] = useState(false);

  return (
    <Stack direction="column" spacing={2}>
      <Button onClick={() => setOpen(true)}>임시 Drawer 열기</Button>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Stack spacing={2} sx={{ width: 250, p: 2 }}>
          <Typography variant="title/title4">메뉴</Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="홈" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="프로필" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="설정" />
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
      </Drawer>
    </Stack>
  );
}`,
    },
    {
      title: "Anchor 위치",
      section: "variants",
      render: DrawerAnchorsExample,
      code: `import { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  Drawer,
  Button,
  Stack,
  Typography,
} from "@/core/design-systems";

export function DrawerAnchorsExample() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: "top" | "right" | "bottom" | "left", open: boolean) =>
    () => {
      setState({ ...state, [anchor]: open });
    };

  const list = (
    <Stack spacing={2} sx={{ width: 250, p: 2 }}>
      <Typography variant="h6">메뉴</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="항목 1" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="항목 2" />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button onClick={toggleDrawer("left", true)}>왼쪽</Button>
        <Button onClick={toggleDrawer("right", true)}>오른쪽</Button>
        <Button onClick={toggleDrawer("top", true)}>위</Button>
        <Button onClick={toggleDrawer("bottom", true)}>아래</Button>
      </Stack>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {list}
      </Drawer>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {list}
      </Drawer>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
      >
        {list}
      </Drawer>
      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer("bottom", false)}
      >
        {list}
      </Drawer>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    defaultValueChanges: [
      {
        prop: "elevation",
        customValue: "24",
        muiDefault: "16",
        note: "더 강한 그림자 효과를 위해 elevation을 24로 설정했습니다.",
      },
    ],
    styleChanges: [
      {
        description:
          "modal variant일 때 배경색을 gray/dim/600으로 커스터마이징하여 일관된 디자인을 제공합니다.",
        code: "'&.MuiDrawer-modal': { background: theme.palette['gray/dim/600'] }",
      },
    ],
  },
};
