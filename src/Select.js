import React from "react";

const Select = ({ options, onSelect }) => {
  const onSelectHandler = (e) => {
    onSelect(e.target.value);
  };
  return (
    <>
      <select name="persons" onChange={onSelectHandler}>
        {options &&
          options.map((option) => (
            <option key={option?.id} value={option?.name}>
              {option?.name}
            </option>
          ))}
      </select>
    </>
  );
};

export default Select;
