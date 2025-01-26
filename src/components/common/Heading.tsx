import { cn } from "@/libs/utlis";

interface HeadingProps {
  children: string;
  className: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return (
    <p
      className={cn(
        "font-bold text-lg sm:text-[34px] text-white tracking-normal",
        className
      )}
    >
      {children}
    </p>
  );
}
