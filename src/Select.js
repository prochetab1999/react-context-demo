import React from "react";

const Select = ({ options }) => {
  return (
    <>
      <select name="persons">
        {options.map(option=> <option value={option?.id}>{option?.name}</option>)}
      </select>
    </>
  );
};

export default Select;
