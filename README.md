# MUI Extend

Next.js 기반의 쇼케이스 프로젝트입니다.

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

## 설정

### Core 저장소 클론 및 Workspace 설정

이 프로젝트는 `core` 저장소를 workspace로 사용합니다. 다음 단계를 따라 설정하세요.

#### 1. Core 저장소 클론

```bash
git clone https://github.com/juno-ryu/core.git core
```

#### 2. Workspace 설정 확인

`package.json`에 이미 workspace 설정이 포함되어 있습니다:

```json
{
  "workspaces": ["core"]
}
```

#### 3. 의존성 설치

```bash
npm install
```

이 명령어는 루트 프로젝트와 `core` workspace의 모든 의존성을 자동으로 설치합니다.

> **참고**: Vercel 배포 시에는 `scripts/install.sh`가 자동으로 core 저장소를 클론하고 의존성을 설치합니다.

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
