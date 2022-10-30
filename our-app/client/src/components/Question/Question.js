import React, { useState, useEffect } from "react";
import Select from "react-select";

const Question = ({ label, select ,onChange}) => {
  //  const [saveSelect, setSaveSelect] = useState();
  //  var sss=""
  // console.log(saveSelect);

  // useEffect(() => {

  //   // setSaveSelect(sss)
  //   console.log("saveSelect");
  // }, []);

  return (
    <div>
      <label>{label}</label>
      <br />
      <Select options={select} onChange={onChange}
      //  onChange={(e) =>{
      //   console.log('aaa');
      //   // console.log(e.value);
      //   sss=e.value
      //     // setSaveSelect(e.value)
      //     console.log(sss)}
      //   } 

      
      />
      
    </div>
  );
};

export default Question;
