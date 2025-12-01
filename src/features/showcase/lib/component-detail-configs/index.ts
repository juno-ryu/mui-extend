import { ComponentDetailConfig } from "./types";
import { buttonConfig } from "./button";
import { textFieldConfig } from "./text-field";
import { checkboxConfig } from "./checkbox";
import { switchConfig } from "./switch";
import { iconButtonConfig } from "./icon-button";

export * from "./types";

export const componentDetailConfigs: Record<string, ComponentDetailConfig> = {
  button: buttonConfig,
  "text-field": textFieldConfig,
  checkbox: checkboxConfig,
  switch: switchConfig,
  "icon-button": iconButtonConfig,
};

export function getComponentDetailConfig(
  slug: string
): ComponentDetailConfig | undefined {
  return componentDetailConfigs[slug];
}
