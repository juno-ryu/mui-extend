"use client";

import type { Metadata } from "next";
import "./globals.css";
import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <html lang="ko">
      <body>
        <div className="flex min-h-screen flex-col">
          <Header onMenuToggle={toggleSidebar} />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
            <main className="flex-1 overflow-auto">
              <div className="max-w-7xl mx-auto px-6 py-8">{children}</div>
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
