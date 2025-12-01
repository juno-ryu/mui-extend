"use client";

import { Button } from "@/core/design-systems";

export function ButtonBasicExample() {
  return (
    <>
      <Button variant="contained" color="augment/gray/800">
        Button
      </Button>
      <Button variant="contained" color="augment/primary/600">
        Button
      </Button>
      <Button variant="contained" color="augment/red/500">
        Button
      </Button>
      <Button variant="contained" color="augment/green/600">
        Button
      </Button>
    </>
  );
}

export function ButtonVariantsExample() {
  return (
    <>
      <Button variant="contained" color="augment/gray/800">
        Button
      </Button>
      <Button variant="outlined" color="augment/gray/800">
        Button
      </Button>
      <Button variant="text" color="augment/gray/800">
        Button
      </Button>
    </>
  );
}
