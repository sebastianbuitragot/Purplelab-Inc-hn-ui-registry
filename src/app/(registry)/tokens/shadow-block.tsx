import { cn } from "@/lib/utils";

interface ShadowBlockProps {
  name: string;
  variable: string;
  className: string;
}

export function ShadowBlock({ name, variable, className }: ShadowBlockProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={cn("size-12 bg-background border rounded-lg", className)}
      />
      <div>
        <div className="font-medium">{name}</div>
        <code className="font-mono text-muted-foreground text-sm">
          --{variable}
        </code>
      </div>
    </div>
  );
}
