import { cn } from "@/lib/utils";

interface RadiusBlockProps {
  name: string;
  variable: string;
  className: string;
}

export function RadiusBlock({ name, variable, className }: RadiusBlockProps) {
  return (
    <div className="flex items-center gap-4">
      <div className={cn("size-12 bg-primary", className)} />
      <div>
        <div className="font-medium">{name}</div>
        <code className="font-mono text-muted-foreground text-sm">
          --{variable}
        </code>
      </div>
    </div>
  );
}
