"use client";

import Link from "next/link";
import { ArrowRight, Box, Package, Zap, Code, Palette } from "lucide-react";
import { useComponentData } from "@/features/showcase/hooks/use-component-data";
import { Badge } from "@/components/ui/badge";
import { AppBreadcrumb } from "@/components/layout/breadcrumb";

export default function Home() {
  const { components, getCategoryCounts } = useComponentData();
  const categoryCounts = getCategoryCounts();

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <AppBreadcrumb items={[{ label: "홈" }]} />

      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex gap-3 mb-4">
          <Box className="h-8 w-8" />
          <h1 className="text-3xl font-bold">MUI Extend</h1>
        </div>
      </div>

      {/* 프로젝트 소개 */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">프로젝트 소개</h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <Link
              href="https://github.com/juno-ryu/mui-extend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <Badge className="cursor-pointer inline-flex items-center gap-1">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                MUI Extend
              </Badge>
            </Link>{" "}
            는 Material-UI를 기반으로 커스터마이징된 디자인 시스템 컴포넌트를
            문서화하고 시연하는 용도의 프로젝트 입니다.
          </div>
          <span>이 프로젝트는 </span>

          <Link
            href="https://github.com/juno-ryu/core"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <Badge className="cursor-pointer inline-flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              core/design-systems
            </Badge>
          </Link>

          <span>
            {" "}
            에 정의된 커스텀 컴포넌트들을 쉽게 탐색하고, 각 컴포넌트의 사용법과
            MUI 원본과의 차이점 확인을 위해 만들었습니다.
          </span>
        </div>
      </div>

      {/* 주요 기능 */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">주요 기능</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 space-y-3">
            <Package className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">컴포넌트 탐색</h3>
            <p className="text-muted-foreground">
              카테고리별로 정리된 컴포넌트 목록을 통해 필요한 컴포넌트를 빠르게
              찾을 수 있습니다.
            </p>
          </div>
          <div className="border rounded-lg p-6 space-y-3">
            <Code className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">커스터마이징 확인</h3>
            <p className="text-muted-foreground">
              각 컴포넌트의 MUI 원본 대비 추가된 props, 변경된 기본값, 커스텀
              스타일 등을 상세히 확인할 수 있습니다.
            </p>
          </div>
          <div className="border rounded-lg p-6 space-y-3">
            <Palette className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">라이브 프리뷰</h3>
            <p className="text-muted-foreground">
              실제 컴포넌트를 렌더링하여 다양한 variant와 props 조합을 바로
              확인할 수 있습니다.
            </p>
          </div>
          <div className="border rounded-lg p-6 space-y-3">
            <Zap className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">빠른 참조</h3>
            <p className="text-muted-foreground">
              MUI 공식 문서로 바로 이동하여 더 자세한 API 정보를 확인할 수
              있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 통계 */}
      <div className="border rounded-lg p-8 bg-muted/50">
        <h2 className="text-xl font-semibold mb-6">컴포넌트 현황</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-2xl font-bold text-primary">
              {components.length}
            </div>
            <div className="text-sm text-muted-foreground">전체 컴포넌트</div>
          </div>
          {Object.entries(categoryCounts).map(([category, count]) => (
            <div key={category}>
              <div className="text-2xl font-bold text-primary">{count}</div>
              <div className="text-sm text-muted-foreground">{category}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 빠른 시작 */}
      <div className="border rounded-lg p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">빠른 시작</h2>
          <p className="text-sm text-muted-foreground">
            컴포넌트 리스트를 확인하고, 어떤 컴포넌트가 준비되어 있는지 한눈에
            살펴보세요.
          </p>
        </div>
        <Link
          href="/components"
          className="inline-flex items-center justify-center gap-1 rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-muted transition-colors"
        >
          컴포넌트 리스트 확인하기
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
