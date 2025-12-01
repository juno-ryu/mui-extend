"use client";

import { IconButton, DesignIcon } from "@/core/design-systems";

export function IconButtonBasicExample() {
  return (
    <>
      <IconButton>
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton disabled>
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton color="augment/primary/600">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton color="augment/red/500">
        <DesignIcon variant="Star" />
      </IconButton>
    </>
  );
}

export function IconButtonSizesExample() {
  return (
    <>
      <IconButton size="small">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton size="medium">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton size="large">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton size="extraLarge">
        <DesignIcon variant="Star" />
      </IconButton>
    </>
  );
}

export function IconButtonColorsExample() {
  return (
    <>
      <IconButton color="augment/gray/800">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton color="augment/primary/600">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton color="augment/red/500">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton color="augment/green/500">
        <DesignIcon variant="Star" />
      </IconButton>
      <IconButton color="augment/blue/500">
        <DesignIcon variant="Star" />
      </IconButton>
    </>
  );
}

export function IconButtonEdgeExample() {
  return (
    <>
      <div className="flex items-center gap-2 border rounded-lg p-4">
        <IconButton edge="start">
          <DesignIcon variant="ArrowLeftBold" />
        </IconButton>
        <span className="flex-1 text-sm">중간 텍스트</span>
        <IconButton edge="end">
          <DesignIcon variant="ArrowRightBold" />
        </IconButton>
      </div>
      <div className="flex items-center gap-2 border rounded-lg p-4">
        <IconButton>
          <DesignIcon variant="ArrowLeftBold" />
        </IconButton>
        <span className="flex-1 text-sm">기본 margin 유지</span>
        <IconButton>
          <DesignIcon variant="ArrowRightBold" />
        </IconButton>
      </div>
    </>
  );
}
