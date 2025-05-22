import React from "react";

type TextareaColor = "primary" | "secondary" | "gray" | "blue";
type TextareaSize = "small" | "medium" | "large";

interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  textareaSize?: TextareaSize;
  color?: TextareaColor;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  textareaSize = "medium",
  color = "primary",
  className = "",
  ...rest
}) => {
  const classes = {
    colors: {
      primary: "border-gray-300 focus:border-blue-600 focus:ring-blue-500",
      secondary: "border-red-400 focus:border-red-600 focus:ring-red-500",
      gray: "border-gray-300 focus:border-gray-500 focus:ring-gray-400",
      blue: "border-blue-500 focus:border-blue-700 focus:ring-blue-300",
    },
    sizes: {
      small: "text-sm rounded-md px-3 py-2",
      medium: "text-base rounded-md px-4 py-2",
      large: "text-lg rounded-lg px-6 py-4",
    },
  };

  return (
    <textarea
      className={
        "border w-full outline-none resize-y transition duration-150 " +
        (classes.sizes[textareaSize] || "") +
        " " +
        (classes.colors[color] || "") +
        " " +
        className
      }
      {...rest}
    />
  );
};