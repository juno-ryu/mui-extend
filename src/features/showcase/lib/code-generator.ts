import { ComponentMetadata } from "./component-registry";

export function generateImportCode(metadata: ComponentMetadata): string {
  return `import { ${metadata.name} } from '${metadata.importPath}';`;
}

export function generateUsageCode(
  metadata: ComponentMetadata,
  props?: Record<string, any>
): string {
  const propsString = props
    ? Object.entries(props)
        .map(([key, value]) => {
          if (typeof value === "string") {
            return `${key}="${value}"`;
          }
          return `${key}={${JSON.stringify(value)}}`;
        })
        .join(" ")
    : "";

  return `<${metadata.name}${propsString ? ` ${propsString}` : ""} />`;
}

export function generateFullCode(
  metadata: ComponentMetadata,
  props?: Record<string, any>
): string {
  const importCode = generateImportCode(metadata);
  const usageCode = generateUsageCode(metadata, props);

  return `${importCode}\n\n${usageCode}`;
}

