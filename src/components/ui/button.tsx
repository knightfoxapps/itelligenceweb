import { type ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-secondary-blue active:bg-brand-blue/90 shadow-sm",
  secondary:
    "bg-brand-gold text-gray-850 hover:bg-brand-gold/90 active:bg-brand-gold/80 shadow-sm",
  outline:
    "border-2 border-current bg-transparent hover:bg-white/10 active:bg-white/20",
  ghost:
    "bg-transparent hover:bg-gray-100 active:bg-gray-300/50",
  link:
    "bg-transparent underline-offset-4 hover:underline p-0 h-auto",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const classes = clsx(
      "inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
      "disabled:opacity-50 disabled:pointer-events-none",
      variants[variant],
      variant !== "link" && sizes[size],
      className,
    );

    if (href) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
