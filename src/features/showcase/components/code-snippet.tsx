"use client";

interface CodeSnippetProps {
  code: string;
  language?: string;
}

export function CodeSnippet({ code, language = "tsx" }: CodeSnippetProps) {
  return (
    <div className="relative">
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
}

