const FormInput = ({ label, ...otherProps }) => {
  return (
    <label className="flex flex-col w-full text-on-surface-variant">
      <span className="text-gray-700">{label}</span>
      <input
        type="text"
        className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-secondary-container
                    focus:ring-0 focus:border-secondary
                  "
        {...otherProps}
      />
    </label>
  );
};

export default FormInput;
