const BUTTON_TYPE_CLASSES = {
  primary: "bg-primary-container",
  secondary: "bg-secondary-container",
  tertiary: "bg-tertiary-container",
  transparent: "transparent",
};

const Button = ({
  children,
  buttonType,
  textTransform = "normal-case",
  shadow = "shadow-none",
  other = "border-none",
  ...otherProps
}) => {
  return (
    <button
      className={`button text-label-medium rounded-full px-6 py-2 ${textTransform} ${shadow} ${BUTTON_TYPE_CLASSES[buttonType]} ${other}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
