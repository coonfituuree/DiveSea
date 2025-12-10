import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: Props) {
  return <div className={cn("mx-auto max-w-[1250px]", className)}>{children}</div>;
}
