"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { AppBreadcrumb } from "@/components/layout/breadcrumb";
import Link from "next/link";
import { useComponentData } from "@/features/showcase/hooks/use-component-data";
import { getCategoryLabel } from "@/features/showcase/constants/categories";

type CategoryMap = {
  [key: string]: string;
};

const CATEGORY_MAP: CategoryMap = {
  inputs: "Input",
  "data-display": "Data display",
  feedback: "Feedback",
  surfaces: "Surfaces",
  navigation: "Navigation",
  layout: "Layout",
};

const CATEGORY_ORDER = [
  "Input",
  "Layout",
  "Navigation",
  "Feedback",
  "Data display",
  "Surfaces",
];

export default function ComponentsPage() {
  const [query, setQuery] = useState("");
  const { components } = useComponentData();

  const grouped = useMemo(() => {
    const lowered = query.trim().toLowerCase();

    return CATEGORY_ORDER.map((category) => {
      const items = components.filter((component) => {
        const componentCategory =
          CATEGORY_MAP[component.category] || component.category;
        if (componentCategory !== category) return false;
        if (!lowered) return true;

        const nameMatch = component.name.toLowerCase().includes(lowered);
        const categoryMatch = componentCategory.toLowerCase().includes(lowered);

        return nameMatch || categoryMatch;
      });

      return {
        category,
        items,
      };
    }).filter((group) => group.items.length > 0);
  }, [query, components]);

  const totalCount = components.length;

  return (
    <div className="space-y-8">
      <AppBreadcrumb
        items={[
          { label: "홈", href: "/" },
          { label: "Components" },
        ]}
      />

      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Components</h1>
        <p className="text-sm text-muted-foreground">
          컴포넌트를 카테고리별로 빠르게 탐색할 수 있는 리스트입니다.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-muted-foreground">
          총 <span className="font-semibold text-foreground">{totalCount}</span>
          개의 컴포넌트
        </div>
        <div className="w-full md:w-72">
          <Input
            placeholder="컴포넌트 이름 또는 카테고리로 검색..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>

      <div className="space-y-10">
        {grouped.length === 0 && (
          <div className="text-sm text-muted-foreground">
            검색 결과가 없습니다. 검색어를 다시 입력해 주세요.
          </div>
        )}

        {grouped.map((group) => (
          <section key={group.category} className="space-y-4">
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold">{group.category}</h2>
              <span className="text-xs text-muted-foreground">
                {group.items.length}개
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <Link
                  key={item.id}
                  href={`/components/${item.slug}`}
                  className="flex w-full flex-col rounded-md border bg-card px-4 py-3 text-sm text-card-foreground shadow-sm transition-colors hover:bg-accent md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-0.75rem)]"
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="mt-1 text-xs text-muted-foreground">
                    {getCategoryLabel(item.category)}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
