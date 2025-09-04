interface SpacingBlockProps {
  name: string;
  variable: string;
  value: string;
}

export function SpacingBlock({ name, variable, value }: SpacingBlockProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center size-12 border rounded">
        <div
          className="bg-primary rounded"
          style={{
            width: variable === "spacing" ? "var(--spacing)" : "1rem",
            height: variable === "spacing" ? "var(--spacing)" : "2px",
          }}
        />
      </div>
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-sm text-muted-foreground">{value}</div>
        <code className="font-mono text-muted-foreground text-sm">
          --{variable}
        </code>
      </div>
    </div>
  );
}
