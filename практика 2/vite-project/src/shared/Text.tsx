const Text = (props) => {
  const { size = "medium", color = "primary", children, as = "span", className = "" } = props;

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

  const Tag = as;

  return (
    <div className={`${classes.sizes[size]} ${classes.colors[color]} ${className}`}>
      {children}
    </div>
  );
};

export default Text;