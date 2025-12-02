"use client";

import { useState } from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Drawer, Button, Stack, Typography } from "@/core/design-systems";

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
}

export function DrawerAnchorsExample() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: "top" | "right" | "bottom" | "left", open: boolean) => () => {
      setState({ ...state, [anchor]: open });
    };

  const list = (
    <Stack spacing={2} sx={{ width: 250, p: 2 }}>
      <Typography variant="title/title4">메뉴</Typography>
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
}
