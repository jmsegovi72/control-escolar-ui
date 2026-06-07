export type AppShellDensity = "comfortable" | "compact";

export type AppShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: string;
  density?: AppShellDensity;
};
