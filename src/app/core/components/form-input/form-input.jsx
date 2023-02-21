const FormInput = ({ label, other = "", ...otherProps }) => {
  return (
    <label className="flex flex-col w-full text-on-surface-variant opacity-60">
      <span className="text-gray-700">{label}</span>
      <input
        type="text"
        className={`mt-0 block w-full px-0.5 border-0 border-b-2 border-secondary-container focus:ring-0 focus:border-secondary ${other}`}
        {...otherProps}
      />
    </label>
  );
};

export default FormInput;
