const BUTTON_TYPE_CLASSES = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
