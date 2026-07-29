import { type HTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Background variant */
  bg?: "white" | "muted" | "dark" | "brand";
  /** Remove vertical padding */
  flush?: boolean;
  /** Constrain content width */
  container?: boolean;
}

const bgVariants = {
  white: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  dark: "bg-gray-850 text-white",
  brand: "bg-brand-blue text-white",
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, bg = "white", flush = false, container = true, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={clsx(
          "relative",
          bgVariants[bg],
          !flush && "section",
          className,
        )}
        {...props}
      >
        {container ? (
          <div className="container">{children}</div>
        ) : (
          children
        )}
      </section>
    );
  },
);

Section.displayName = "Section";
