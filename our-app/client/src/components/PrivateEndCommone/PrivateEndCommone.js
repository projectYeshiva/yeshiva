import React, { useState,useEffect } from "react";
import axios from "axios";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";

const PrivateEndCommone = ({masectot}) => {
    const [select, setSelect] = useState({});
  const [isClick, setIsClick] = useState(false);
  console.log(isClick);
  const lessons = [
    "פאר טאגס",
    'שינון לפנה"צ',
    'חדש לפנה"צ',
    'שינון אחרה"צ',
    'חדש אחרה"צ',
  ];
  const lesson = lessons.map((el) => el);
  const periods = ["א", "ב", "ג", "ד"];
  const soog = ["רשי", 'גר"ש', 'גפ"ת'];
  const code = ["א", "ב", "ג"];
  const options = [
    {
      label: "סדר",
      option: lesson,
    },
    {
      label: "תקופה",
      option: periods,
    },
    {
      label: "מסכת",
      option: masectot,
    },
    {
      label: "סוג",
      option: soog,
    },
    {
      label: "קוד מגמה",
      option: code,
    },
  ];
  const inputChange = (e) => {
    const { type, value } = e.target;
    console.log(e.target.value);
    setSelect({ ...select, [value]: value });
    console.log(select);
  };
  useEffect(() => {
    try {
      async function fatch() {
        const data = await axios.post("http://localhost:5000/diariesTeam/save", {
          select
        });      
       
      }
      fatch();
      setIsClick(false);
    } catch (e) {}
  }, [isClick]);
  
const input=[
  {
    type:'text',
    label:'הספקים',
    placeholder:'הספקים'
  },
  {
    type:'date',
    label:'תחילת תקופה'
  },
  {
    type:'date',
    label:'סיום תקופה'
  }
]

  return (
    <div>
        <Select options={options} inputChange={inputChange} />
      {input.map((el)=>(<Input type={el.type} label={el.label} placeholder={el.placeholder}/>))}
      <Button onClick={setIsClick(true)} text={"שמור"}/>
    </div>
  )
}

export default PrivateEndCommone