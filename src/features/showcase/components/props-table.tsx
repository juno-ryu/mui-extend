"use client";

interface PropInfo {
  name: string;
  type: string;
  defaultValue?: string;
  description?: string;
  required: boolean;
}

interface PropsTableProps {
  props: PropInfo[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Prop</th>
            <th className="text-left p-2">Type</th>
            <th className="text-left p-2">Default</th>
            <th className="text-left p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b">
              <td className="p-2">
                {prop.name}
                {prop.required && (
                  <span className="ml-1 text-destructive">*</span>
                )}
              </td>
              <td className="p-2 font-mono text-sm">{prop.type}</td>
              <td className="p-2 text-muted-foreground">
                {prop.defaultValue || "-"}
              </td>
              <td className="p-2">{prop.description || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

