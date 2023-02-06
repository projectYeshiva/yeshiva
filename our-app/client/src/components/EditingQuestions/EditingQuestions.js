import React, { useEffect, useState } from "react";
import Question from "../Question/Question";
import Button from "../Button/Button";

const EditingQuestions = ({ categories }) => {
  const [saveQuestion, setSaveQuestion] = useState("");
  const [saveAgdara, setSaveAgdara] = useState([]);
  const [saveSelectSoog, setSaveSelectSoog] = useState("");
  const [saveMasecet,setSaveMasecet] = useState("")

  // Avi is testing code addition

  // console.log(saveQuestion);

  return (
    <div>
      <input
        type={"text"}
        placeholder="הקלד שאלה"
        onChange={(e) => setSaveQuestion(e.target.value)}
      />
      <p>סווג את השאלה</p>
      {categories.map((el) => (
        <Question
          label={el.label}
          select={el.select}
          value={el.value}
          onChange={(e)=>{            setSaveAgdara([...saveAgdara,e.value]);
            ;}}
            
            // console.log(el.onChange);
            // console.log(el.value);
            // setSaveAgdara(el.value);
            // setSaveSelectSoog(el.value)
            // setSaveMasecet(el.value)
          // }}
        />
      ))}
      <input
        type={"text"}
        placeholder="פרק"
        onChange={(e) => console.log(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="דף"
        onChange={(e) => console.log(e.target.value)}
      />
      <br />
      <Button
        onClick={
          () =>{ 
            console.log(saveAgdara,saveSelectSoog,saveMasecet)
          console.log(saveQuestion);}

          // setSaveSelect([e.value])
        }
        text="שמור"
        // onClick={(e) => {
        //   setSaveSelect([
        //     e.target.parentNode.children[2].children[2].children[2].children[0]
        //       .children[0].innerText,
        //     e.target.parentNode.children[3].children[2].children[2].children[0]
        //       .children[0].innerText,
        //     e.target.parentNode.children[4].children[2].children[2].children[0]
        //       .children[0].innerText,
        //     e.target.parentNode.children[5].children[2].children[2].children[0]
        //       .children[0].innerText,
        //   ]);
        // }}
      />
    </div>
  );
};

export default EditingQuestions;
