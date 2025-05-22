const Input = (props) => {
  const {
    size = "medium",
    color = "primary",
    className = "",
    ...rest
  } = props;

  const classes = {
    colors: {
      primary: "border-gray-300 focus:border-blue-500",
      secondary: "border-blue-400 focus:border-blue-600",
      danger: "border-red-400 focus:border-red-600",
    },
    sizes: {
      small: "h-8 px-2 text-sm",
      medium: "h-10 px-4 text-base",
      large: "h-12 px-6 text-lg",
    },
  };

  return (
    <input
      className={
        `block rounded-md border ${classes.colors[color]} ${classes.sizes[size]} ${className}`
      }
      {...rest}
    />
  );
};

export default Input;
