import { ComponentDetailConfig } from "./types";
import { buttonConfig } from "./button";
import { textFieldConfig } from "./text-field";
import { checkboxConfig } from "./checkbox";
import { switchConfig } from "./switch";
import { iconButtonConfig } from "./icon-button";
import { radioConfig } from "./radio";
import { formControlLabelConfig } from "./form-control-label";
import { formHelperTextConfig } from "./form-helper-text";
import { inputAdornmentConfig } from "./input-adornment";
import { ratingConfig } from "./rating";
import { selectConfig } from "./select";
import { toggleButtonConfig } from "./toggle-button";
import { alertConfig } from "./alert";
import { alertTitleConfig } from "./alert-title";
import { dialogConfig } from "./dialog";
import { accordionConfig } from "./accordion";
import { paginationConfig } from "./pagination";
import { chipConfig } from "./chip";
import { drawerConfig } from "./drawer";
import { bottomNavigationConfig } from "./bottom-navigation";
import { tooltipConfig } from "./tooltip";
import { dividerConfig } from "./divider";
import { typographyConfig } from "./typography";
import { designIconConfig } from "./design-icon";
import { designLabelConfig } from "./design-label";
import { designStatConfig } from "./design-stat";
import { loaderConfig } from "./loader";
import { menuConfig } from "./menu";
import { tabsConfig } from "./tabs";
import { skeletonConfig } from "./skeleton";
import { circularProgressConfig } from "./circular-progress";
import { snackbarConfig } from "./snackbar";
import { linearProgressConfig } from "./linear-progress";
import { stepperConfig } from "./stepper";

export * from "./types";

export const componentDetailConfigs: Record<string, ComponentDetailConfig> = {
  button: buttonConfig,
  "text-field": textFieldConfig,
  checkbox: checkboxConfig,
  switch: switchConfig,
  "icon-button": iconButtonConfig,
  radio: radioConfig,
  "form-control-label": formControlLabelConfig,
  "form-helper-text": formHelperTextConfig,
  "input-adornment": inputAdornmentConfig,
  rating: ratingConfig,
  select: selectConfig,
  "toggle-button": toggleButtonConfig,
  alert: alertConfig,
  "alert-title": alertTitleConfig,
  dialog: dialogConfig,
  accordion: accordionConfig,
  pagination: paginationConfig,
  chip: chipConfig,
  drawer: drawerConfig,
  "bottom-navigation": bottomNavigationConfig,
  tooltip: tooltipConfig,
  divider: dividerConfig,
  typography: typographyConfig,
  "design-icon": designIconConfig,
  "design-label": designLabelConfig,
  "design-stat": designStatConfig,
  loader: loaderConfig,
  menu: menuConfig,
  tabs: tabsConfig,
  skeleton: skeletonConfig,
  "circular-progress": circularProgressConfig,
  snackbar: snackbarConfig,
  "linear-progress": linearProgressConfig,
  stepper: stepperConfig,
};

export function getComponentDetailConfig(
  slug: string
): ComponentDetailConfig | undefined {
  return componentDetailConfigs[slug];
}
