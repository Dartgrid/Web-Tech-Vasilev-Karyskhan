import React from "react";

export const Input = (props) => {
  const {
    size = "medium",
    color = "primary",
    className = "",
    ...rest
  } = props;

  const classes = {
    colors: {
      primary: "border-gray-300 focus:border-blue-600 focus:ring-blue-500",
      secondary: "border-red-400 focus:border-red-600 focus:ring-red-500",
      gray: "border-gray-300 focus:border-gray-500 focus:ring-gray-400",
      blue: "border-blue-500 focus:border-blue-700 focus:ring-blue-300",
    },
    sizes: {
      small: "h-[32px] px-3 text-sm rounded-md",
      medium: "h-[40px] px-4 text-base rounded-md",
      large: "h-[56px] px-6 text-lg rounded-lg",
    },
  };

  return (
    <input
      className={
        "border outline-none transition duration-150 " +
        (classes.sizes[size] || "") +
        " " +
        (classes.colors[color] || "") +
        " " +
        className
      }
      {...rest}
    />
  );
};
