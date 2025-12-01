"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2Icon, ExternalLink, Zap } from "lucide-react";
import { useComponentData } from "@/features/showcase/hooks/use-component-data";
import { getCategoryLabel } from "@/features/showcase/constants/categories";
import { notFound } from "next/navigation";
import { getComponentDetailConfig } from "@/features/showcase/lib/component-detail-configs";
import { CodeSnippet } from "@/features/showcase/components/code-snippet";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AppBreadcrumb } from "@/components/layout/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { getTheme } from "@/core/design-systems";

interface ComponentDetailPageProps {
  params: Promise<{ slug: string }>;
}

const previewTheme = getTheme("light");

function DesignSystemPreviewShell({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={previewTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default function ComponentDetailPage({
  params,
}: ComponentDetailPageProps) {
  // params는 Promise이므로 클라이언트 컴포넌트에서는 useState로 처리
  const [slug, setSlug] = React.useState<string | null>(null);
  const { getComponentBySlug } = useComponentData();

  React.useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  if (!slug) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">로딩 중...</p>
      </div>
    );
  }

  const component = getComponentBySlug(slug);

  if (!component) {
    notFound();
  }

  const detailConfig = getComponentDetailConfig(slug);

  return (
    <div className="max-w-5xl mx-auto space-y-15">
      {/* Breadcrumb */}
      <AppBreadcrumb
        items={[
          { label: "홈", href: "/" },
          { label: "Components", href: "/components" },
          { label: component.name },
        ]}
      />

      {/* 헤더 */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">{component.name}</h1>
          <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
            {getCategoryLabel(component.category)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{component.description}</p>
        {detailConfig?.designNote && (
          <div className="space-y-4">
            <Alert>
              <CheckCircle2Icon className="h-4 w-4" />
              <div>
                <AlertTitle className="text-sm font-semibold">
                  디자인 노트
                </AlertTitle>
                <AlertDescription className="text-sm text-gray-500 space-y-2">
                  <ul className="list-disc list-inside space-y-1">
                    {(Array.isArray(detailConfig.designNote)
                      ? detailConfig.designNote
                      : [detailConfig.designNote]
                    ).map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                  {component.category === "inputs" && (
                    <p className="text-xs">
                      <Link
                        href="/tokens#augment-colors"
                        className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                      >
                        Augment 컬러 토큰 자세히 보기
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </p>
                  )}
                </AlertDescription>
              </div>
            </Alert>
          </div>
        )}
      </div>
      {/* Preview */}
      {component.componentName && (
        <DesignSystemPreviewShell>
          <div className="space-y-4">
            {detailConfig?.usageExamples &&
              detailConfig.usageExamples.map((example, idx) => (
                <div key={idx} className="space-y-4">
                  {example.title && (
                    <h3 className="text-base font-semibold">{example.title}</h3>
                  )}
                  <div className="border rounded-lg p-6 bg-background">
                    <div className="flex flex-wrap gap-4 items-center">
                      {example.render &&
                        (() => {
                          const Render = example.render!;
                          return <Render />;
                        })()}
                    </div>
                  </div>
                  <CodeSnippet code={example.code} />
                </div>
              ))}
          </div>
        </DesignSystemPreviewShell>
      )}

      {/* 커스터마이징 사항 */}
      {detailConfig?.customization && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">커스터마이징 사항</h2>
          <div className="space-y-20">
            {/* 추가된 Props */}
            {detailConfig.customization.addedProps &&
              detailConfig.customization.addedProps.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-base font-semibold">추가된 Props</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-40">Prop</TableHead>
                        <TableHead className="w-[200px]">Type</TableHead>
                        <TableHead>설명</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {detailConfig.customization.addedProps.map((prop) => (
                        <TableRow key={prop.name}>
                          <TableCell className="font-mono text-xs">
                            <span className="font-semibold">{prop.name}?</span>
                          </TableCell>
                          <TableCell className="font-mono text-xs">
                            <span className="font-semibold">{prop.type}</span>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {prop.description}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}

            {/* 기본값 변경 */}
            {detailConfig.customization.defaultValueChanges &&
              detailConfig.customization.defaultValueChanges.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-base font-semibold">기본값 변경</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-40">Prop</TableHead>
                        <TableHead>우리 기본값</TableHead>
                        <TableHead>MUI 기본값</TableHead>
                        <TableHead>비고</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {detailConfig.customization.defaultValueChanges.map(
                        (change, idx) => (
                          <TableRow key={idx}>
                            <TableCell className="font-mono text-xs">
                              <span className="font-semibold">
                                {change.prop}
                              </span>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              <span className="font-semibold">
                                {change.customValue}
                              </span>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {change.muiDefault ?? "-"}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {change.note ?? "-"}
                            </TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}

            {/* 추가된 Variants & Sizes */}
            {detailConfig.customization.additionalVariants &&
              detailConfig.customization.additionalVariants.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">
                    추가된 Variants & Sizes
                  </h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-40">타입</TableHead>
                        <TableHead>값</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {detailConfig.customization.additionalVariants.map(
                        (variant, idx) => (
                          <TableRow key={idx}>
                            <TableCell className="text-sm font-semibold">
                              {variant.type === "variant" ? "Variant" : "Size"}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {variant.values.map((value, i) => (
                                <React.Fragment key={value}>
                                  <code className="text-xs bg-background px-1 py-0.5 rounded">
                                    {value}
                                  </code>
                                  {i < variant.values.length - 1 && " "}
                                </React.Fragment>
                              ))}
                            </TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}

            {/* 스타일 변경 */}
            {detailConfig.customization.styleChanges &&
              detailConfig.customization.styleChanges.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">스타일 변경</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>설명</TableHead>
                        <TableHead className="w-[220px]">관련 코드</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {detailConfig.customization.styleChanges.map(
                        (change, idx) => (
                          <TableRow key={idx}>
                            <TableCell className="text-sm text-muted-foreground">
                              <span className="font-semibold">
                                {change.description}
                              </span>
                            </TableCell>
                            <TableCell className="text-xs font-mono text-muted-foreground">
                              {change.code ?? "-"}
                            </TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}
          </div>
        </div>
      )}

      {/* 사용법 링크 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">사용법</h2>
        <Alert>
          <Zap className="h-4 w-4 fill-yellow-400" />
          <div>
            <AlertTitle className="text-sm font-semibold">
              MUI 공식 문서
            </AlertTitle>
            <AlertDescription className="text-sm text-gray-500 space-y-1">
              <p>
                기본적인 사용법과 API 스펙은{" "}
                <span className="font-semibold">MUI 공식 문서</span>를 기준으로
                합니다.
              </p>
              <Link
                href={`https://mui.com/material-ui/react-${component.slug}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                MUI {component.name} 문서 바로가기
                <ExternalLink className="h-3 w-3" />
              </Link>
            </AlertDescription>
          </div>
        </Alert>
      </div>
    </div>
  );
}
