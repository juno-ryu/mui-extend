"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 브랜드 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">MUI Extend</h3>
            <p className="text-sm text-muted-foreground">
              Design System Showcase
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/components"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  컴포넌트 카탈로그
                </Link>
              </li>
              <li>
                <Link
                  href="/tokens"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  디자인 토큰
                </Link>
              </li>
              <li>
                <Link
                  href="/playground"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Playground
                </Link>
              </li>
            </ul>
          </div>

          {/* 정보 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">정보</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>문서 버전: 1.0.0</li>
              <li>최종 업데이트: {currentYear}</li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} MUI Extend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

