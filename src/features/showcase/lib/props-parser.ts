import { PropInfo } from "@/features/showcase/hooks/use-props-extraction";

export function parsePropsFromTypeScript(
  componentPath: string
): PropInfo[] {
  // TODO: react-docgen-typescript를 사용한 Props 파싱 구현
  return [];
}

export function parsePropsFromMetadata(
  metadata: Record<string, any>
): PropInfo[] {
  // 수동으로 입력된 메타데이터에서 Props 정보 추출
  return [];
}

