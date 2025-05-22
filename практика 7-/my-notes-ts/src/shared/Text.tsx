import React from "react";

type TextSize = "small" | "medium" | "large" | "xl";
type TextColor = "primary" | "secondary" | "danger" | "muted";

interface TextProps {
  size?: TextSize;
  color?: TextColor;
  className?: string;
  children: React.ReactNode;
}

const classes = {
  colors: {
    primary: "text-gray-800",
    secondary: "text-blue-500",
    danger: "text-red-500",
    muted: "text-gray-400",
  },
  sizes: {
    small: "text-sm",
    medium: "text-base",
    large: "text-xl font-semibold",
    xl: "text-2xl font-bold",
  },
};

const Text: React.FC<TextProps> = ({
  size = "medium",
  color = "primary",
  children,
  className = "",
}) => {
  return (
    <span className={`${classes.sizes[size]} ${classes.colors[color]} ${className}`}>
      {children}
    </span>
  );
};

export default Text;
