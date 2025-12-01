import { ComponentDetailConfig } from "./types";
import { buttonConfig } from "./button";
import { textFieldConfig } from "./text-field";

export * from "./types";

export const componentDetailConfigs: Record<string, ComponentDetailConfig> = {
  button: buttonConfig,
  "text-field": textFieldConfig,
};

export function getComponentDetailConfig(
  slug: string
): ComponentDetailConfig | undefined {
  return componentDetailConfigs[slug];
}
