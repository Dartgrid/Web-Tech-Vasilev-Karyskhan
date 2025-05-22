import React from "react";

type ButtonColor = "blue" | "secondary" | "gray" | "amber";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  color = "blue",
  title,
  onClick,
  type = "button",
  className = "",
  children,
  ...rest
}) => {
  const defaultClass =
    "flex items-center justify-center rounded-2 h-[40px] w-[max-content] px-4 py-2 transition duration-150 cursor-pointer select-none";

  const classes = {
    colors: {
      blue: {
        button: "bg-blue-600 hover:bg-blue-700",
        text: "text-white",
      },
      secondary: {
        button: "bg-red-500 hover:bg-red-600",
        text: "text-white",
      },
      gray: {
        button: "bg-gray-300 hover:bg-gray-400",
        text: "text-gray-800",
      },
      amber: {
        button: "bg-amber-700 hover:bg-amber-800",
        text: "text-white",
      },
    },
    sizes: {
      small: "rounded-[100px] text-sm py-1 px-3 h-[32px]",
      medium: "rounded-[14px] text-base py-2 px-5 h-[40px]",
      large: "rounded-[16px] text-lg py-3 px-6 min-h-[56px]",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={
        defaultClass +
        " " +
        (classes.sizes[size] || "") +
        " " +
        (classes.colors[color]?.button || "") +
        " " +
        className
      }
      {...rest}
    >
      <span className={classes.colors[color]?.text}>
        {title || children}
      </span>
    </button>
  );
};
