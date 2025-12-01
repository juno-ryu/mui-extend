# MUI Extend

Next.js 기반 프로젝트입니다.

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn-ui
- **State Management**: 
  - Zustand (전역 상태)
  - @tanstack/react-query (서버 상태)
- **Form**: react-hook-form + zod
- **Icons**: lucide-react
- **Utilities**: 
  - dayjs (날짜/시간)
  - ts-pattern (패턴 매칭)
  - es-toolkit (유틸리티)
  - react-use (React 훅)

## 프로젝트 구조

```
src/
├── app/              # Next.js App Router
├── components/
│   └── ui/          # shadcn-ui 컴포넌트
├── constants/       # 공통 상수
├── hooks/           # 공통 훅
├── lib/             # 유틸리티 함수
└── remote/          # HTTP 클라이언트

src/features/
└── [featureName]/
    ├── components/  # 기능별 컴포넌트
    ├── constants/   # 기능별 상수
    ├── hooks/       # 기능별 훅
    ├── lib/         # 기능별 유틸리티
    └── api.ts       # API 함수
```

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## shadcn-ui 컴포넌트 추가

새로운 shadcn-ui 컴포넌트를 추가하려면:

```bash
npx shadcn@latest add [component-name]
```

예시:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## 네이밍 컨벤션

- **파일명**: kebab-case 사용
  - ✅ `feed-page.tsx`, `post-card.tsx`, `use-posts.ts`
  - ❌ `FeedPage.tsx`, `PostCard.tsx`, `usePosts.ts`

- **컴포넌트**: PascalCase로 export
- **훅**: camelCase로 export

## 주의사항

- 모든 컴포넌트는 `"use client"` 디렉티브를 사용해야 합니다.
- `page.tsx`의 params props는 Promise를 사용해야 합니다.
- Tailwind CSS v4를 사용하고 있습니다.

