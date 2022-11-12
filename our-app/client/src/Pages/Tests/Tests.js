import React, { useState } from "react";
import Select from "react-select";
import Question from "../../components/Question/Question";
import { Navigate, useNavigate } from "react-router-dom";
import EditingQuestions from "../../components/EditingQuestions/EditingQuestions";
import Button from "../../components/Button/Button";
import ConductingTest from "../../components/ConductingTest/ConductingTest";

const Tests = () => {
  const [click, setClick] = useState({
    EditingQuestions:false,
    ConductingTest:false
  });
  const agdarot=["רגיל","הבנה","בהירות","סיכום"];
  const agdara= agdarot.map((el) => ({ value: el, label: el }));  
  const masectot = ["שבת", "ברכות", "ראש השנה","זרעים","עירובין","פסחים","שקלים","יומא","סוכה","ביצה","תענית","מגילה","מועד קטן","חגיגה","כתובות","נדרים","נזיר","סוטה","יבמות","גיטין","קידושין","בבא קמא","בבא מציעא","בבא בתרא","סנהדרין","מכות","שבועות","עבודה זרה","זבחים","מנחות","חולין","בכורות","תמורה"];
  const masecet = masectot.map((el) => ({ value: el, label: el }));
  const soogim = ["גפת", "רשי", "גמרשי"];
  const soog = soogim.map((el) => ({ value: el, label: el }));
  
  const categories = [
    {
      label:"הגדרה",
      select: agdara
    },
    {
      label: "מסכת",
      select: masecet,
    },
    {
      label: "סוג",
      select: soog,
    },
  ];

  const classification = [
    {
      path: "EditingQuestions",
      title: "עריכת שאלות",
    },
    {
      path: "ConductingTest",
      title: "עריכת מבחן",
    },
  ];
  console.log(click);

//   useEffect(() => {}, []);

  return (
    <div
      className="nivut"
      style={{
        fontSize: "2em",
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
        "hover:BackgroundColor": "blue",
      }}
    >
      {classification.map((el) => (
        <Button
          text={el.title}
          onClick={(e) =>
            e.currentTarget.innerText == "עריכת שאלות"
              ? setClick({
                EditingQuestions: true,
                ConductingTest: false,
                })
              : e.currentTarget.innerText == "עריכת מבחן"
              ? setClick({
                  EditingQuestions: false,
                  ConductingTest: true,
                
                })
              : ""
          }
        />
      ))}
      {click.EditingQuestions ? <EditingQuestions categories={categories} /> : ""}
      {click.ConductingTest ? <ConductingTest /> : ""}

    </div>
  );
};

//   console.log(click);
//   const navigate = useNavigate();

//   const clickEvent = () => {
//     navigate("../מבחנים/עריכת שאלות");
//   };

//   return (
//     <div>
//       <button>עריכת מבחן</button>

//       <button onClick={clickEvent}>עריכת שאלות</button>
//     </div>
//   );
// 


export default Tests;
