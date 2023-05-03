import React from "react";
import Select from "./Select";

const Form = ({options}) => {
  return (
    <div>
      {" "}
      <Select options={options} />
    </div>
  );
};

export default Form;
