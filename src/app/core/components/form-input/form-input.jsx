const FormInput = ({ label, ...otherProps }) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <input
        type="text"
        className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
        {...otherProps}
      />
    </label>
  );
};

export default FormInput;
