import React, { useState } from "react";
import Select from "react-select";

const Question = ({ label, select ,onChange}) => {
  //  const [saveSelect, setSaveSelect] = useState([]);
  // console.log(saveSelect);
  return (
    <div>
      <label>{label}</label>
      <br />
      <Select options={select} onChange={onChange}
      //  onChange={(e) =>{
      //     setSaveSelect([...saveSelect,e.value])
      //     console.log(saveSelect)}
      //   } 

      
      />
      
    </div>
  );
};

export default Question;
