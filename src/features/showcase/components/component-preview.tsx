"use client";

import { Suspense, useState, useEffect } from "react";
import { getDesignSystemComponentSync } from "@/lib/design-system";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { getTheme } from "@/core/design-systems";

interface ComponentPreviewProps {
  componentName: string;
  variant?: string;
  props?: Record<string, any>;
  noContainer?: boolean;
}

function PreviewSkeleton() {
  return (
    <div className="flex items-center justify-center h-32 bg-muted rounded-lg animate-pulse">
      <div className="h-8 w-8 rounded-full bg-muted-foreground/20" />
    </div>
  );
}

function PreviewError({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center h-32 bg-destructive/10 rounded-lg">
      <p className="text-sm text-destructive">Preview 로드 실패: {error.message}</p>
    </div>
  );
}

export function ComponentPreview({
  componentName,
  variant,
  props = {},
  noContainer = false,
}: ComponentPreviewProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      const LoadedComponent = getDesignSystemComponentSync(componentName);
      setComponent(LoadedComponent);
    } catch (err) {
      setError(err as Error);
    }
  }, [componentName]);

  if (error) {
    return <PreviewError error={error} />;
  }

  if (!Component) {
    return (
      <div className="flex items-center justify-center h-32 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          컴포넌트를 찾을 수 없습니다: {componentName}
        </p>
      </div>
    );
  }

  try {
    const theme = getTheme("light");
    // props가 null이나 undefined일 경우 빈 객체로 변환
    const safeProps = props || {};
    const content = (
      <Suspense fallback={<PreviewSkeleton />}>
        <Component {...safeProps} />
      </Suspense>
    );

    if (noContainer) {
      return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {content}
        </MuiThemeProvider>
      );
    }

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="border rounded-lg p-6 bg-background">
          {content}
        </div>
      </MuiThemeProvider>
    );
  } catch (err) {
    return <PreviewError error={err as Error} />;
  }
}

