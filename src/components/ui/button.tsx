import React, { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "default" | "ghost" | "outline" | "link";
type ButtonSize = "default" | "sm" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export default function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";

  let variantClasses = "";
  switch (variant) {
    case "ghost":
      variantClasses = "bg-transparent text-foreground hover:bg-foreground/10";
      break;
    case "outline":
      variantClasses = "border border-border bg-transparent text-foreground hover:bg-foreground/5";
      break;
    case "link":
      variantClasses = "bg-transparent text-primary underline-offset-4 hover:underline";
      break;
    default:
      variantClasses = "bg-primary text-white hover:brightness-90";
  }

  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "px-4 py-1 text-xs";
      break;
    case "icon":
      sizeClasses = "p-2 w-10 h-10";
      break;
    default:
      sizeClasses = "px-6 py-2 text-sm";
  }

  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
}
