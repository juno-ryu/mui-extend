"use client";

interface ComponentDemoProps {
  component: React.ComponentType;
  variant?: string;
}

export function ComponentDemo({ component: Component, variant }: ComponentDemoProps) {
  return (
    <div className="border rounded-lg p-6 bg-background">
      <Component />
    </div>
  );
}

