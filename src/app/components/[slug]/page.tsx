"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ComponentPreview } from "@/features/showcase/components/component-preview";
import { useComponentData } from "@/features/showcase/hooks/use-component-data";
import { getCategoryLabel } from "@/features/showcase/constants/categories";
import { notFound } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ComponentDetailPageProps {
  params: Promise<{ slug: string }>;
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

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* 헤더 */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-bold">{component.name}</h1>
          <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
            {getCategoryLabel(component.category)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{component.description}</p>
      </div>

      {/* 기본 Preview */}
      {component.componentName && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">기본 예제</h2>
          <div className="border rounded-lg p-6 bg-background">
            <div className="flex flex-wrap gap-4 items-center">
              <ComponentPreview
                componentName={component.componentName}
                props={component.previewProps || {}}
                noContainer={true}
              />
              {component.slug === "button" && (
                <>
                  <ComponentPreview
                    componentName={component.componentName}
                    props={{
                      ...component.previewProps,
                      color: "augment/primary/600",
                    }}
                    noContainer={true}
                  />
                  <ComponentPreview
                    componentName={component.componentName}
                    props={{
                      ...component.previewProps,
                      color: "augment/red/500",
                    }}
                    noContainer={true}
                  />
                  <ComponentPreview
                    componentName={component.componentName}
                    props={{
                      ...component.previewProps,
                      color: "augment/green/600",
                    }}
                    noContainer={true}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Variants */}
      {component.variants && component.variants.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Variants</h2>
          <Tabs defaultValue={component.variants[0]} className="w-full">
            <TabsList>
              {component.variants.map((variant) => (
                <TabsTrigger key={variant} value={variant}>
                  {variant}
                </TabsTrigger>
              ))}
            </TabsList>
            {component.variants.map((variant) => (
              <TabsContent key={variant} value={variant}>
                <div className="border rounded-lg p-6 bg-background">
                  <div className="flex flex-wrap gap-4 items-center">
                    <ComponentPreview
                      componentName={component.componentName || ""}
                      props={{
                        ...component.previewProps,
                        variant,
                      }}
                      noContainer={true}
                    />
                    {component.slug === "button" && (
                      <>
                        <ComponentPreview
                          componentName={component.componentName || ""}
                          props={{
                            ...component.previewProps,
                            variant,
                            color: "augment/primary/600",
                          }}
                          noContainer={true}
                        />
                        <ComponentPreview
                          componentName={component.componentName || ""}
                          props={{
                            ...component.previewProps,
                            variant,
                            color: "augment/red/500",
                          }}
                          noContainer={true}
                        />
                        <ComponentPreview
                          componentName={component.componentName || ""}
                          props={{
                            ...component.previewProps,
                            variant,
                            color: "augment/green/600",
                          }}
                          noContainer={true}
                        />
                      </>
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}

      {/* 커스터마이징 사항 */}
      {component.slug === "button" && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">커스터마이징 사항</h2>
          <div className="space-y-6">
            {/* 추가된 Props */}
            <div>
              <h3 className="text-base font-semibold mb-3">추가된 Props</h3>
              <div className="space-y-3">
                <div className="border rounded-lg p-4 bg-muted/50">
                  <div className="font-mono text-sm font-semibold mb-1">
                    inactivated?: boolean
                  </div>
                  <p className="text-sm text-muted-foreground">
                    비활성화 상태를 제어합니다.{" "}
                    <code className="text-xs bg-background px-1 py-0.5 rounded">
                      disabled
                    </code>
                    와 달리 시각적으로는 활성화 상태를 유지하면서 상호작용만
                    비활성화합니다.
                  </p>
                </div>
                <div className="border rounded-lg p-4 bg-muted/50">
                  <div className="font-mono text-sm font-semibold mb-1">
                    frontBumper?: 'thick' | 'thin' | 'both'
                  </div>
                  <p className="text-sm text-muted-foreground">
                    버튼 앞쪽(왼쪽) 여백을 제어합니다. 아이콘과 텍스트 사이
                    간격을 조정할 때 사용합니다.
                  </p>
                </div>
                <div className="border rounded-lg p-4 bg-muted/50">
                  <div className="font-mono text-sm font-semibold mb-1">
                    backBumper?: 'thick' | 'thin' | 'both'
                  </div>
                  <p className="text-sm text-muted-foreground">
                    버튼 뒤쪽(오른쪽) 여백을 제어합니다. 텍스트와 아이콘 사이
                    간격을 조정할 때 사용합니다.
                  </p>
                </div>
                <div className="border rounded-lg p-4 bg-muted/50">
                  <div className="font-mono text-sm font-semibold mb-1">
                    relaxBorder?: boolean
                  </div>
                  <p className="text-sm text-muted-foreground">
                    테두리 색상을 완화합니다. outlined variant에서 테두리
                    투명도를 낮춥니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 기본값 변경 */}
            <div>
              <h3 className="text-base font-semibold mb-3">기본값 변경</h3>
              <div className="border rounded-lg p-4 bg-muted/50">
                <ul className="space-y-2 text-sm">
                  <li>
                    <code className="text-xs bg-background px-1 py-0.5 rounded">
                      variant
                    </code>
                    : <span className="text-muted-foreground">'contained'</span>{" "}
                    (MUI 기본값: 'text')
                  </li>
                  <li>
                    <code className="text-xs bg-background px-1 py-0.5 rounded">
                      size
                    </code>
                    : <span className="text-muted-foreground">'small'</span>{" "}
                    (MUI 기본값: 'medium')
                  </li>
                  <li>
                    <code className="text-xs bg-background px-1 py-0.5 rounded">
                      color
                    </code>
                    :{" "}
                    <span className="text-muted-foreground">
                      'augment/gray/800'
                    </span>{" "}
                    (커스텀 색상 팔레트)
                  </li>
                  <li>
                    <code className="text-xs bg-background px-1 py-0.5 rounded">
                      disableElevation
                    </code>
                    : <span className="text-muted-foreground">true</span> (MUI
                    기본값: false)
                  </li>
                </ul>
              </div>
            </div>

            {/* 추가된 Variants & Sizes */}
            <div>
              <h3 className="text-base font-semibold mb-3">
                추가된 Variants & Sizes
              </h3>
              <div className="border rounded-lg p-4 bg-muted/50">
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Variants:</strong>{" "}
                    <code className="text-xs bg-background px-1 py-0.5 rounded">
                      customA
                    </code>
                    ,{" "}
                    <code className="text-xs bg-background px-1 py-0.5 rounded">
                      customB
                    </code>
                  </li>
                  <li>
                    <strong>Sizes:</strong>{" "}
                    <code className="text-xs bg-background px-1 py-0.5 rounded">
                      extraLarge
                    </code>
                    ,{" "}
                    <code className="text-xs bg-background px-1 py-0.5 rounded">
                      customA
                    </code>
                    ,{" "}
                    <code className="text-xs bg-background px-1 py-0.5 rounded">
                      customB
                    </code>
                  </li>
                </ul>
              </div>
            </div>

            {/* 스타일 변경 */}
            <div>
              <h3 className="text-base font-semibold mb-3">스타일 변경</h3>
              <div className="border rounded-lg p-4 bg-muted/50">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • children을{" "}
                    <code className="text-xs bg-background px-1 py-0.5 rounded">
                      span
                    </code>
                    으로 감싸서 커스텀 스타일링 적용
                  </li>
                  <li>
                    • 텍스트 변환 제거 (
                    <code className="text-xs bg-background px-1 py-0.5 rounded">
                      textTransform: 'none'
                    </code>
                    )
                  </li>
                  <li>• 커스텀 색상 팔레트 사용 (augment/gray/800 등)</li>
                  <li>• Ripple 애니메이션 커스터마이징</li>
                  <li>• contained variant에 기본 테두리 추가</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 사용법 링크 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">사용법</h2>
        <p className="text-muted-foreground mb-4">
          자세한 사용법과 API 문서는 MUI 공식 문서를 참고하세요.
        </p>
        <Link
          href={`https://mui.com/material-ui/react-${component.slug}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          MUI {component.name} 문서 보기
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
