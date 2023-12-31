import React from "react";

const Input = ({
  placeholder,
  type,
  id,
  htmlFor,
  label,
  onChange,
  name,
  value,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={htmlFor} className="text-white text-sm font-normal">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="border border-white rounded text-sm py-2 px-4 bg-[rgba(255,255,255,3%)] placeholder:text-xs"
      />
    </div>
  );
};

export default Input;
