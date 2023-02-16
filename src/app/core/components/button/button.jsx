const BUTTON_TYPE_CLASSES = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary-container",
  transparent: "transparent",
};

const Button = ({
  children,
  buttonType,
  textTransform = "normal-case",
  shadow = "shadow-none",
  ...otherProps
}) => {
  return (
    <button
      className={`button text-label-medium rounded-full px-6 py-2 ${textTransform} ${shadow} ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
