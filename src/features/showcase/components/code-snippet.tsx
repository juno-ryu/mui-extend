"use client";

import { Highlight, themes } from "prism-react-renderer";

interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeSnippet({
  code,
  language = "tsx",
  title,
}: CodeSnippetProps) {
  return (
    <div className="relative border rounded-lg overflow-hidden bg-[#1e1e1e]">
      {title && (
        <div className="px-4 py-2 border-b border-gray-700 bg-[#252526]">
          <span className="text-xs font-medium text-gray-400">{title}</span>
        </div>
      )}
      <Highlight theme={themes.oneDark} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-4 overflow-x-auto text-sm`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
