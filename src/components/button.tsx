import React from "react";

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
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
