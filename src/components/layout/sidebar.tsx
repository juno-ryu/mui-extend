"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ComponentCategory,
  CATEGORIES,
  getCategoryLabel,
} from "@/features/showcase/constants/categories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useComponentData } from "@/features/showcase/hooks/use-component-data";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

export function Sidebar({
  isOpen = true,
  onClose,
  className = "",
}: SidebarProps) {
  const pathname = usePathname();
  const { getComponentsByCategory } = useComponentData();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const sidebarContent = (
    <nav
      className="h-full overflow-y-auto p-4"
      aria-label="컴포넌트 네비게이션"
    >
      {/* 메인 네비게이션 */}
      <div className="mb-6">
        <h2 className="px-3 text-xs font-semibold uppercase tracking-wider mb-2 text-gray-400">
          SECTIONS
        </h2>
        <div className="space-y-1">
          <Link
            href="/"
            className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive("/")
                ? "bg-primary/10 text-primary font-medium"
                : "text-foreground hover:bg-muted"
            }`}
          >
            홈
          </Link>
          <Link
            href="/tokens"
            className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive("/tokens")
                ? "bg-primary/10 text-primary font-medium"
                : "text-foreground hover:bg-muted"
            }`}
          >
            디자인 토큰
          </Link>
          <Link
            href="/playground"
            className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive("/playground")
                ? "bg-primary/10 text-primary font-medium"
                : "text-foreground hover:bg-muted"
            }`}
          >
            Playground
          </Link>
        </div>
      </div>

      {/* 카테고리별 컴포넌트 목록 */}
      <div className="space-y-2">
        <h2 className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Components
        </h2>
        <Accordion type="multiple" defaultValue={CATEGORIES} className="w-full">
          {CATEGORIES.map((category) => {
            const categoryComponents = getComponentsByCategory(category);
            return (
              <AccordionItem
                key={category}
                value={category}
                className="border-none"
              >
                <AccordionTrigger className="px-3 py-2 hover:no-underline hover:bg-muted rounded-lg text-sm">
                  <span className="text-foreground">
                    {getCategoryLabel(category)}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-4 pt-1">
                  <div className="space-y-1">
                    {categoryComponents.length > 0 ? (
                      categoryComponents.map((component) => (
                        <Link
                          key={component.id}
                          href={`/components/${component.slug}`}
                          className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                            pathname === `/components/${component.slug}`
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {component.name}
                        </Link>
                      ))
                    ) : (
                      <div className="px-3 py-1.5 text-sm text-muted-foreground">
                        컴포넌트가 없습니다
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </nav>
  );

  return (
    <>
      {/* 모바일 오버레이 */}
      {onClose && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* 모바일 사이드바: 토글 가능 */}
      {onClose && (
        <aside
          className={`
            fixed left-0 top-0 h-full w-64 bg-background z-50 b transform transition-transform duration-300 md:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }
            ${className}
          `}
          aria-label="사이드바 네비게이션"
        >
          {sidebarContent}
        </aside>
      )}

      {/* 데스크톱 사이드바: 항상 표시 */}
      <aside
        className={`
          hidden md:block w-64 bg-background h-full
          ${className}
        `}
        aria-label="사이드바 네비게이션"
      >
        {sidebarContent}
      </aside>
    </>
  );
}
