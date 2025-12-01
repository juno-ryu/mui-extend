export interface PropInfo {
  name: string;
  type: string;
  defaultValue?: string;
  description?: string;
  required: boolean;
}

export function usePropsExtraction(componentPath?: string): PropInfo[] {
  // TODO: react-docgen-typescript를 사용한 자동 추출 구현
  // 현재는 빈 배열 반환
  return [];
}

