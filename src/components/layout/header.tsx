"use client";

import Link from "next/link";
import { Menu, Box } from "lucide-react";

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-1 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-16 items-center px-4">
        {/* 모바일 메뉴 버튼 */}
        <button
          onClick={onMenuToggle}
          className="md:hidden p-2 hover:bg-muted rounded-lg mr-2"
          aria-label="메뉴 열기"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* 로고 및 브랜드명 (좌측 정렬) */}
        <Link href="/" className="flex items-center gap-1 group">
          <div className="relative">
            <Box className="h-5 w-5  transition-colors" />
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-md font-bold">MUI Extend</span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs">v 1.0.0</span>
          <span className="text-xs text-gray-400">2025.11.29</span>
        </div>
      </div>
    </header>
  );
}
