import React from "react";

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label className="flex flex-row gap-2">
      <input
        type="checkbox"
        className="w-5 accent-gray-490"
        checked={value}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
