"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Palette, Monitor, Layers, Box, Sparkles } from "lucide-react";
import { AppBreadcrumb } from "@/components/layout/breadcrumb";

// Breakpoint 데이터
const breakpoints = {
  mobile: { value: 0, label: "Mobile", description: "0px 이상" },
  tablet: { value: 600, label: "Tablet", description: "600px 이상" },
  desktop: { value: 1440, label: "Desktop", description: "1440px 이상" },
};

// Color Palette 데이터
const colorCategories = [
  {
    name: "Gray",
    description: "기본 회색 계열",
    colors: [
      { name: "gray/50", light: "#FAFAFA", dark: "#18181B" },
      { name: "gray/100", light: "#F5F5F5", dark: "#313135" },
      { name: "gray/200", light: "#E7E7E8", dark: "#4C4C50" },
      { name: "gray/300", light: "#D2D2D3", dark: "#6D6D70" },
      { name: "gray/400", light: "#BCBCBC", dark: "#88888A" },
      { name: "gray/500", light: "#88888A", dark: "#BCBCBC" },
      { name: "gray/600", light: "#6D6D70", dark: "#D2D2D3" },
      { name: "gray/700", light: "#4C4C50", dark: "#E7E7E8" },
      { name: "gray/800", light: "#313135", dark: "#F5F5F5" },
      { name: "gray/900", light: "#18181B", dark: "#FAFAFA" },
    ],
  },
  {
    name: "Primary",
    description: "메인 브랜드 색상",
    colors: [
      { name: "primary/50", light: "#F2F2FF", dark: "#212170" },
      { name: "primary/100", light: "#E6E6FF", dark: "#2F2F9B" },
      { name: "primary/200", light: "#CECEFF", dark: "#3E3ECD" },
      { name: "primary/300", light: "#AEAEFF", dark: "#4E4EFF" },
      { name: "primary/400", light: "#8E8EFF", dark: "#6A6AFF" },
      { name: "primary/500", light: "#6A6AFF", dark: "#8E8EFF" },
      { name: "primary/600", light: "#4E4EFF", dark: "#AEAEFF" },
      { name: "primary/700", light: "#3E3ECD", dark: "#CECEFF" },
      { name: "primary/800", light: "#2F2F9B", dark: "#E6E6FF" },
      { name: "primary/900", light: "#212170", dark: "#F2F2FF" },
    ],
  },
  {
    name: "Red (Danger)",
    description: "위험, 오류 상태",
    colors: [
      { name: "red/50", light: "#FFF2F3", dark: "#790801" },
      { name: "red/100", light: "#FFD1D4", dark: "#930901" },
      { name: "red/200", light: "#FFA6AB", dark: "#AC0B01" },
      { name: "red/300", light: "#FF757D", dark: "#C60C01" },
      { name: "red/400", light: "#FF4F5A", dark: "#DF0E01" },
      { name: "red/500", light: "#DF0E01", dark: "#FF4F5A" },
      { name: "red/600", light: "#C60C01", dark: "#FF757D" },
      { name: "red/700", light: "#AC0B01", dark: "#FFA6AB" },
      { name: "red/800", light: "#930901", dark: "#FFD1D4" },
      { name: "red/900", light: "#790801", dark: "#FFF2F3" },
    ],
  },
  {
    name: "Orange (Sale)",
    description: "세일, 할인 정보",
    colors: [
      { name: "orange/50", light: "#FFF3DF", dark: "#822C0C" },
      { name: "orange/100", light: "#FFD9A5", dark: "#A1330B" },
      { name: "orange/200", light: "#FFBD6D", dark: "#CC4102" },
      { name: "orange/300", light: "#FF9532", dark: "#E95603" },
      { name: "orange/400", light: "#FF760A", dark: "#FF5C00" },
      { name: "orange/500", light: "#FF5C00", dark: "#FF760A" },
      { name: "orange/600", light: "#E95603", dark: "#FF9532" },
      { name: "orange/700", light: "#CC4102", dark: "#FFBD6D" },
      { name: "orange/800", light: "#A1330B", dark: "#FFD9A5" },
      { name: "orange/900", light: "#822C0C", dark: "#FFF3DF" },
    ],
  },
  {
    name: "Yellow (Warning)",
    description: "경고, 주의 상태",
    colors: [
      { name: "yellow/50", light: "#FFFDEA", dark: "#7C390B" },
      { name: "yellow/100", light: "#FFF6C5", dark: "#984508" },
      { name: "yellow/200", light: "#FFEE85", dark: "#BB5A02" },
      { name: "yellow/300", light: "#FFDF46", dark: "#E28200" },
      { name: "yellow/400", light: "#FFCD1B", dark: "#FFAB00" },
      { name: "yellow/500", light: "#FFAB00", dark: "#FFCD1B" },
      { name: "yellow/600", light: "#E28200", dark: "#FFDF46" },
      { name: "yellow/700", light: "#BB5A02", dark: "#FFEE85" },
      { name: "yellow/800", light: "#984508", dark: "#FFF6C5" },
      { name: "yellow/900", light: "#7C390B", dark: "#FFFDEA" },
    ],
  },
  {
    name: "Green (Success)",
    description: "성공, 완료 상태",
    colors: [
      { name: "green/50", light: "#EDFCF4", dark: "#0C4834" },
      { name: "green/100", light: "#D4F7E3", dark: "#0D583F" },
      { name: "green/200", light: "#ADEDCC", dark: "#0E6E4D" },
      { name: "green/300", light: "#78DDAF", dark: "#118A5D" },
      { name: "green/400", light: "#41C68D", dark: "#1EAB74" },
      { name: "green/500", light: "#1EAB74", dark: "#41C68D" },
      { name: "green/600", light: "#118A5D", dark: "#78DDAF" },
      { name: "green/700", light: "#0E6E4D", dark: "#ADEDCC" },
      { name: "green/800", light: "#0D583F", dark: "#D4F7E3" },
      { name: "green/900", light: "#0C4834", dark: "#EDFCF4" },
    ],
  },
  {
    name: "Cyan (Info)",
    description: "정보, 알림 상태",
    colors: [
      { name: "cyan/50", light: "#F0FAFF", dark: "#0A5170" },
      { name: "cyan/100", light: "#DFF4FF", dark: "#056387" },
      { name: "cyan/200", light: "#B9EBFE", dark: "#0076A4" },
      { name: "cyan/300", light: "#7BDDFE", dark: "#0093CB" },
      { name: "cyan/400", light: "#34CCFC", dark: "#0AB8EF" },
      { name: "cyan/500", light: "#0AB8EF", dark: "#34CCFC" },
      { name: "cyan/600", light: "#0093CB", dark: "#7BDDFE" },
      { name: "cyan/700", light: "#0076A4", dark: "#B9EBFE" },
      { name: "cyan/800", light: "#056387", dark: "#DFF4FF" },
      { name: "cyan/900", light: "#0A5170", dark: "#F0FAFF" },
    ],
  },
];

// Custom Color Palette 데이터
const customColors = [
  {
    category: "Gray Dim (투명도)",
    description: "검은색 기반 투명도 색상",
    colors: [
      { name: "gray/dim/50", value: "#0000000A", alpha: "4%" },
      { name: "gray/dim/100", value: "#00000014", alpha: "8%" },
      { name: "gray/dim/200", value: "#0000001f", alpha: "12%" },
      { name: "gray/dim/300", value: "#0000003d", alpha: "24%" },
      { name: "gray/dim/400", value: "#00000052", alpha: "32%" },
      { name: "gray/dim/500", value: "#00000066", alpha: "40%" },
      { name: "gray/dim/600", value: "#0000008f", alpha: "56%" },
      { name: "gray/dim/700", value: "#000000b8", alpha: "72%" },
      { name: "gray/dim/800", value: "#000000cc", alpha: "80%" },
    ],
  },
  {
    category: "Primary Dim (투명도)",
    description: "Primary 색상 기반 투명도",
    colors: [
      { name: "primary/dim/100", value: "#4d4dff0a", alpha: "4%" },
      { name: "primary/dim/200", value: "#4d4dff14", alpha: "8%" },
      { name: "primary/dim/300", value: "#4d4dff1f", alpha: "12%" },
      { name: "primary/dim/400", value: "#4d4dff29", alpha: "16%" },
      { name: "primary/dim/500", value: "#4d4dff4d", alpha: "30%" },
      { name: "primary/dim/600", value: "#4d4dff80", alpha: "50%" },
    ],
  },
];

// Gradient 데이터
const gradients = [
  {
    name: "partnership/VVIP",
    value:
      "linear-gradient(95deg, #FFE584 -5.38%, #F6AE34 36.14%, #F1CF4D 72.71%, #F08700 103.7%)",
    description: "VVIP 등급 그라데이션",
  },
  {
    name: "partnership/VIP",
    value:
      "linear-gradient(95deg, #8AAAEE -5.38%, #5F85D7 36.14%, #84A6F2 72.71%, #345DB2 103.7%)",
    description: "VIP 등급 그라데이션",
  },
  {
    name: "partnership/Partner",
    value:
      "linear-gradient(95deg, #A6A6FC -5.38%, #77F 36.14%, #A3A3FF 72.71%, #4E4EFF 103.7%)",
    description: "Partner 등급 그라데이션",
  },
];

// Augment Color Palette 데이터 (버튼, input 등에 사용)
const augmentColorExamples = [
  {
    category: "Primary Augment",
    description: "Primary 색상의 augment 변형 (버튼, input 등에 사용)",
    colors: [
      { name: "augment/primary/300", base: "#AEAEFF" },
      { name: "augment/primary/400", base: "#8E8EFF" },
      { name: "augment/primary/500", base: "#6A6AFF" },
      { name: "augment/primary/600", base: "#4E4EFF" },
      { name: "augment/primary/700", base: "#3E3ECD" },
    ],
  },
  {
    category: "Red (Danger) Augment",
    description: "Danger 상태의 augment 변형",
    colors: [
      { name: "augment/red/400", base: "#FF4F5A" },
      { name: "augment/red/500", base: "#DF0E01" },
      { name: "augment/red/600", base: "#C60C01" },
    ],
  },
  {
    category: "Green (Success) Augment",
    description: "Success 상태의 augment 변형",
    colors: [
      { name: "augment/green/400", base: "#41C68D" },
      { name: "augment/green/500", base: "#1EAB74" },
      { name: "augment/green/600", base: "#118A5D" },
    ],
  },
  {
    category: "Orange (Sale) Augment",
    description: "Sale 상태의 augment 변형",
    colors: [
      { name: "augment/orange/400", base: "#FF760A" },
      { name: "augment/orange/500", base: "#FF5C00" },
      { name: "augment/orange/600", base: "#E95603" },
    ],
  },
  {
    category: "Blue Augment",
    description: "Blue 색상의 augment 변형",
    colors: [
      { name: "augment/blue/400", base: "#5DA3FD" },
      { name: "augment/blue/500", base: "#377FFA" },
      { name: "augment/blue/600", base: "#2C67F0" },
    ],
  },
];

// State Palette 데이터
const statePalette = [
  {
    name: "state/danger",
    light: "#DF0E01",
    dark: "#FF4F5A",
    description: "위험 상태",
  },
  {
    name: "state/sale",
    light: "#FF5C00",
    dark: "#FF760A",
    description: "세일 상태",
  },
  {
    name: "state/warning",
    light: "#FFAB00",
    dark: "#FFCD1B",
    description: "경고 상태",
  },
  {
    name: "state/success",
    light: "#1EAB74",
    dark: "#41C68D",
    description: "성공 상태",
  },
  {
    name: "state/info",
    light: "#0AB8EF",
    dark: "#34CCFC",
    description: "정보 상태",
  },
];

// Shadow 데이터
const shadows = [
  { level: 0, value: "none", description: "그림자 없음" },
  {
    level: 1,
    value: "0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
    description: "매우 얕은 그림자",
  },
  {
    level: 2,
    value: "0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
    description: "얕은 그림자",
  },
  {
    level: 4,
    value: "0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
    description: "기본 그림자",
  },
  {
    level: 8,
    value: "0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
    description: "중간 그림자",
  },
  {
    level: 16,
    value: "0px 6px 30px 5px rgba(0, 0, 0, 0.12)",
    description: "깊은 그림자",
  },
  {
    level: 24,
    value: "0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
    description: "매우 깊은 그림자",
  },
];

// Z-Index 데이터
const zIndexValues = [
  { name: "mobileStepper", value: 2, description: "모바일 스테퍼" },
  { name: "fab", value: 2, description: "플로팅 액션 버튼" },
  { name: "speedDial", value: 2, description: "스피드 다이얼" },
  { name: "appBar", value: 2, description: "앱바" },
  { name: "drawer", value: 2, description: "드로어" },
  { name: "modal", value: 2, description: "모달" },
  { name: "snackbar", value: 2, description: "스낵바" },
  { name: "tooltip", value: 2, description: "툴팁" },
  { name: "category", value: 11, description: "카테고리" },
  { name: "header", value: 2, description: "헤더" },
];

export default function TokensPage() {
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");
  const [tab, setTab] = useState<string>("colors");

  // URL 해시(#augment-colors)로 진입했을 때 Augment 탭을 기본 선택
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash === "#augment-colors" || hash === "#augment") {
      setTab("augment");
    }
  }, []);

  return (
    <div className="space-y-8">
      <AppBreadcrumb
        items={[
          { label: "홈", href: "/" },
          { label: "디자인 토큰" },
        ]}
      />

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Palette className="h-8 w-8" />
          <h1 className="text-3xl font-bold">디자인 토큰</h1>
        </div>
        <p className="text-muted-foreground">
          MUI Extend 디자인 시스템의 기본이 되는 토큰들을 확인하세요.
        </p>
      </div>

      <Separator />

      {/* Tabs */}
      <Tabs value={tab} onValueChange={setTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="colors" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>Colors</span>
          </TabsTrigger>
          <TabsTrigger value="augment" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>Augment</span>
          </TabsTrigger>
          <TabsTrigger value="custom" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>Custom</span>
          </TabsTrigger>
          <TabsTrigger value="state" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>State</span>
          </TabsTrigger>
          <TabsTrigger value="breakpoints" className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            <span>Breakpoints</span>
          </TabsTrigger>
          <TabsTrigger value="shadows" className="flex items-center gap-2">
            <Box className="h-4 w-4" />
            <span>Shadows</span>
          </TabsTrigger>
          <TabsTrigger value="zindex" className="flex items-center gap-2">
            <Layers className="h-4 w-4" />
            <span>Z-Index</span>
          </TabsTrigger>
        </TabsList>

        {/* Colors Tab */}
        <TabsContent value="colors" className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">컬러 팔레트</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setColorMode("light")}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  colorMode === "light"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                Light Mode
              </button>
              <button
                onClick={() => setColorMode("dark")}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  colorMode === "dark"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                Dark Mode
              </button>
            </div>
          </div>

          {colorCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {category.colors.map((color) => {
                  const currentColor =
                    colorMode === "light" ? color.light : color.dark;
                  return (
                    <div key={color.name} className="space-y-2">
                      <div
                        className="h-20 rounded-lg border shadow-sm"
                        style={{ backgroundColor: currentColor }}
                      />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{color.name}</p>
                        <p className="text-xs text-muted-foreground font-mono">
                          {currentColor}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Separator />
            </div>
          ))}

          {/* Common Colors */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Common</h3>
              <p className="text-sm text-muted-foreground">공통 색상</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div
                  className="h-20 rounded-lg border shadow-sm"
                  style={{ backgroundColor: "#FFFFFF" }}
                />
                <div className="space-y-1">
                  <p className="text-sm font-medium">white</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    #FFFFFF
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div
                  className="h-20 rounded-lg border shadow-sm"
                  style={{ backgroundColor: "#000000" }}
                />
                <div className="space-y-1">
                  <p className="text-sm font-medium">black</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    #000000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Augment Colors Tab */}
        <TabsContent
          value="augment"
          id="augment-colors"
          className="space-y-8"
        >
          <div>
            <h2 className="text-xl font-semibold">Augment 컬러 팔레트</h2>
            <p className="text-sm text-muted-foreground mt-2">
              MUI 테마에서 자동 생성되는 버튼, input 등 인터랙티브 컴포넌트 전용
              색상입니다.
              <br />각 색상은{" "}
              <code className="bg-muted px-1 py-0.5 rounded">main</code>,{" "}
              <code className="bg-muted px-1 py-0.5 rounded">light</code>,{" "}
              <code className="bg-muted px-1 py-0.5 rounded">dark</code>,{" "}
              <code className="bg-muted px-1 py-0.5 rounded">contrastText</code>{" "}
              변형을 포함합니다.
            </p>
          </div>

          {augmentColorExamples.map((group) => (
            <div key={group.category} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">{group.category}</h3>
                <p className="text-sm text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <div className="grid gap-6">
                {group.colors.map((color) => {
                  // MUI의 lighten/darken 로직 시뮬레이션
                  const lightenColor = (hex: string) => {
                    const num = parseInt(hex.replace("#", ""), 16);
                    const r = Math.min(255, ((num >> 16) & 255) + 51);
                    const g = Math.min(255, ((num >> 8) & 255) + 51);
                    const b = Math.min(255, (num & 255) + 51);
                    return `#${((r << 16) | (g << 8) | b)
                      .toString(16)
                      .padStart(6, "0")}`;
                  };
                  const darkenColor = (hex: string) => {
                    const num = parseInt(hex.replace("#", ""), 16);
                    const r = Math.max(0, ((num >> 16) & 255) - 51);
                    const g = Math.max(0, ((num >> 8) & 255) - 51);
                    const b = Math.max(0, (num & 255) - 51);
                    return `#${((r << 16) | (g << 8) | b)
                      .toString(16)
                      .padStart(6, "0")}`;
                  };

                  const light = lightenColor(color.base);
                  const dark = darkenColor(color.base);

                  return (
                    <div
                      key={color.name}
                      className="border rounded-lg p-4 space-y-3"
                    >
                      <h4 className="font-medium">{color.name}</h4>
                      <div className="grid grid-cols-4 gap-3">
                        <div className="space-y-2">
                          <div
                            className="h-16 rounded border"
                            style={{ backgroundColor: light }}
                          />
                          <div className="text-xs space-y-1">
                            <p className="font-medium">light</p>
                            <p className="text-muted-foreground font-mono">
                              {light}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div
                            className="h-16 rounded border ring-2 ring-primary"
                            style={{ backgroundColor: color.base }}
                          />
                          <div className="text-xs space-y-1">
                            <p className="font-medium">main</p>
                            <p className="text-muted-foreground font-mono">
                              {color.base}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div
                            className="h-16 rounded border"
                            style={{ backgroundColor: dark }}
                          />
                          <div className="text-xs space-y-1">
                            <p className="font-medium">dark</p>
                            <p className="text-muted-foreground font-mono">
                              {dark}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-16 rounded border bg-white flex items-center justify-center text-xs">
                            <span
                              style={{
                                color: color.base,
                                fontWeight: "bold",
                              }}
                            >
                              Text
                            </span>
                          </div>
                          <div className="text-xs space-y-1">
                            <p className="font-medium">contrastText</p>
                            <p className="text-muted-foreground">자동 계산</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Separator />
            </div>
          ))}

          <div className="bg-muted/50 border rounded-lg p-4 space-y-2">
            <h4 className="font-semibold">💡 Augment 색상이란?</h4>
            <p className="text-sm text-muted-foreground">
              Augment 색상은 MUI의{" "}
              <code className="bg-background px-1 py-0.5 rounded">
                augmentColor()
              </code>{" "}
              함수로 자동 생성됩니다. 각 base 색상에서{" "}
              <code className="bg-background px-1 py-0.5 rounded">
                lighten(0.2)
              </code>
              ,{" "}
              <code className="bg-background px-1 py-0.5 rounded">
                darken(0.2)
              </code>
              를 적용하여 light/dark 변형을 만들고, contrastText는 명도 대비를
              계산하여 자동으로 white 또는 gray/800을 선택합니다.
            </p>
          </div>
        </TabsContent>

        {/* Custom Colors Tab */}
        <TabsContent value="custom" className="space-y-8">
          <h2 className="text-xl font-semibold">커스텀 컬러</h2>

          {/* Dim Colors */}
          {customColors.map((group) => (
            <div key={group.category} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">{group.category}</h3>
                <p className="text-sm text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {group.colors.map((color) => (
                  <div key={color.name} className="space-y-2">
                    <div
                      className="h-20 rounded-lg border shadow-sm relative"
                      style={{
                        backgroundColor: color.value,
                        backgroundImage:
                          "repeating-conic-gradient(#e5e5e5 0% 25%, transparent 0% 50%) 50% / 20px 20px",
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-lg"
                        style={{ backgroundColor: color.value }}
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{color.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">
                        {color.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        투명도: {color.alpha}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Separator />
            </div>
          ))}

          {/* Gradients */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Gradient</h3>
              <p className="text-sm text-muted-foreground">
                파트너십 등급별 그라데이션
              </p>
            </div>
            <div className="space-y-4">
              {gradients.map((gradient) => (
                <div key={gradient.name} className="space-y-2">
                  <div
                    className="h-24 rounded-lg border shadow-sm"
                    style={{ background: gradient.value }}
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{gradient.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {gradient.description}
                    </p>
                    <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">
                      {gradient.value}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* State Palette Tab */}
        <TabsContent value="state" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">상태 팔레트</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setColorMode("light")}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  colorMode === "light"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                Light Mode
              </button>
              <button
                onClick={() => setColorMode("dark")}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  colorMode === "dark"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                Dark Mode
              </button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            애플리케이션 상태를 나타내는 색상 토큰
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {statePalette.map((state) => {
              const currentColor =
                colorMode === "light" ? state.light : state.dark;
              return (
                <div key={state.name} className="space-y-2">
                  <div
                    className="h-24 rounded-lg border shadow-sm"
                    style={{ backgroundColor: currentColor }}
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{state.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {state.description}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {currentColor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>

        {/* Breakpoints Tab */}
        <TabsContent value="breakpoints" className="space-y-6">
          <h2 className="text-xl font-semibold">반응형 중단점</h2>
          <div className="grid gap-4">
            {Object.entries(breakpoints).map(([key, data]) => (
              <div key={key} className="border rounded-lg p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{data.label}</h3>
                  <span className="text-2xl font-bold text-primary">
                    {data.value}px
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {data.description}
                </p>
                <div className="pt-2">
                  <code className="text-sm bg-muted px-2 py-1 rounded">
                    {key}: {data.value}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Shadows Tab */}
        <TabsContent value="shadows" className="space-y-6">
          <h2 className="text-xl font-semibold">그림자</h2>
          <div className="grid gap-6">
            {shadows.map((shadow) => (
              <div key={shadow.level} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-semibold">
                      Level {shadow.level}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {shadow.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-32 h-32 bg-background rounded-lg"
                    style={{ boxShadow: shadow.value }}
                  />
                  <code className="text-xs bg-muted px-3 py-2 rounded flex-1">
                    {shadow.value}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Z-Index Tab */}
        <TabsContent value="zindex" className="space-y-6">
          <h2 className="text-xl font-semibold">Z-Index 레이어</h2>
          <div className="space-y-3">
            {zIndexValues
              .sort((a, b) => b.value - a.value)
              .map((item) => (
                <div
                  key={item.name}
                  className="border rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {item.value}
                    </div>
                    <code className="text-xs text-muted-foreground">
                      z-index
                    </code>
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
