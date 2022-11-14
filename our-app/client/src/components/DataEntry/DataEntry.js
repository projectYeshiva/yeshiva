import React, { useState } from "react";
import Button from "../Button/Button";
import Daily from "../Daily/Daily";
import Shinun from "../Shinun/Shinun";
import Mezimunim from "../Mezimunim/Mezimunim";

const DataEntry = () => {
  const [Classification, setClassification] = useState({
    Daily: false,
    Shinun: false,
    Mezimunim: false,
  });

  const TestTypes = [
    { title: "מזומנים" },
    { title: "שינון" },
    { title: 'אחה"צ' },
    { title: 'לפנה"צ' },
  ];

  return (
    <div>
        <div style={{
        display: "flex",
        justifyContent: "space-around",
        fontSize: "1.5em",
      }}>
      {TestTypes.map((el) => (
        <Button
          text={el.title}
          onClick={(e) =>
            // e.currentTarget.innerText === 'לפנה"צ' || 'אחה"צ'
            //   ? setClassification({
            //       Daily: true,
            //       Shinun: false,
            //       Mezimunim: false,
            //     })
            //   :
               e.currentTarget.innerText === 'שינון'
              ? setClassification({
                  Daily: false,
                  Shinun: true,
                  Mezimunim: false,
                })
              : e.currentTarget.innerText === 'מזומנים'
              ? setClassification({
                  Daily: false,
                  Shinun: false,
                  Mezimunim: true,
                })
              : setClassification({
                Daily: true,
                Shinun: false,
                Mezimunim: false,
              })
          }
        />
      ))}
      </div>
      <div>
      {Classification.Daily ? <Daily /> : ""}
      {Classification.Shinun ? <Shinun /> : ""}
      {Classification.Mezimunim ? <Mezimunim /> : ""}
      </div>
    </div>
   
  );
};

export default DataEntry;
