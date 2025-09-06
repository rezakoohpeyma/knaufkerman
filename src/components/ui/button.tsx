import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function Button({
  children,
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`
        bg-primary text-text px-6 py-2 rounded-md text-sm font-medium font-vazirmatn
        hover:brightness-90 transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
}
