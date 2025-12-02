import type React from "react";

export interface AdditionalPreviewProps {
  color?: string;
  [key: string]: any;
}

export interface CustomizationProp {
  name: string;
  type: string;
  description: string;
}

export interface DefaultValueChange {
  prop: string;
  customValue: string;
  muiDefault?: string;
  note?: string;
}

export interface AdditionalVariant {
  type: "variant" | "size" | "margin";
  values: string[];
}

export interface StyleChange {
  description: string;
  code?: string;
}

export type CodeExampleSection = "basic" | "variants";

export interface CodeExample {
  title?: string;
  previews?: AdditionalPreviewProps[];
  code: string;
  // 어떤 섹션 아래에 보여줄 코드인지
  section?: CodeExampleSection;
  // variants 섹션인 경우, 특정 variant에만 보여줄지 (없으면 모든 variant에 표시)
  variant?: string;
  // 필요하면 직접 JSX로 렌더링할 수 있는 예제 컴포넌트
  render?: React.ComponentType;
}

export interface ComponentDetailConfig {
  slug: string;
  designNote?: string | string[];
  // augment 컬러 토큰을 사용하는지 여부
  isAugmentColor?: boolean;
  // 코드 예제
  usageExamples?: CodeExample[];
  // 커스터마이징 사항
  customization?: {
    addedProps?: CustomizationProp[];
    defaultValueChanges?: DefaultValueChange[];
    additionalVariants?: AdditionalVariant[];
    styleChanges?: StyleChange[];
  };
}
