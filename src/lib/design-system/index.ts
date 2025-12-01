// design-system 연결 유틸리티

// 동적 import를 사용하여 빌드 타임에 모든 컴포넌트를 로드하지 않도록 함
export async function getDesignSystemComponent(componentName: string) {
  try {
    // 동적 import로 필요한 컴포넌트만 로드
    const DesignSystemComponents = await import("@/core/design-systems");
    const Component = (DesignSystemComponents as any)[componentName];
    return Component || null;
  } catch (error) {
    console.warn(`Failed to load component ${componentName}:`, error);
    return null;
  }
}

// 동기 버전 (클라이언트 컴포넌트에서 사용)
export function getDesignSystemComponentSync(componentName: string) {
  try {
    // @ts-ignore - 동적 import이므로 타입 체크 우회
    const DesignSystemComponents = require("@/core/design-systems");
    const Component = (DesignSystemComponents as any)[componentName];
    return Component || null;
  } catch (error) {
    console.warn(`Failed to load component ${componentName}:`, error);
    return null;
  }
}

export function getDesignSystemTheme() {
  // TODO: design-system 테마 가져오기
  return null;
}

