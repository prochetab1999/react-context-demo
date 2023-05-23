import React from "react";
import Select from "./Select";

const Form = ({ options, onFormUpdate }) => {
  const onSelect = (selectedOption) => {
    onFormUpdate(selectedOption);
  };
  return (
    <div>
      {" "}
      <Select options={options} onSelect={onSelect} />
    </div>
  );
};

export default Form;
