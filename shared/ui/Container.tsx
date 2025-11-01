import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: Props) {
  return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
}
