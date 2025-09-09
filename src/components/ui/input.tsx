import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type : string;
  placeholder:string
}

const Input: React.FC<InputProps> = ({ type,placeholder,  label, id, className, ...props }) => {

  return (
    <div className="flex flex-col gap-1">
      <label  className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
  
        placeholder={placeholder}
        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        type={type}
        {...props}
      />
    </div>
  );
};

export default Input;
