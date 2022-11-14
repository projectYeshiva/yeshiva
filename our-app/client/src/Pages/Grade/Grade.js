import React, { useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import DataEntry from "../../components/DataEntry/DataEntry";
import GeneralReports from "../../components/GeneralReports/GeneralReports";
import Letters from "../../components/Letters/Letters";
import "./Grade.css";

const Grade = () => {

  const [isClick, setIsClick] = useState({
    DataEntry: false,
    GeneralReports: false,
    Letters: false

  });
//   const [valueButton, setValueButton] = useState("");

//   const navigate = useNavigate();

  const mainNavigation = [
    {title: "מכתבים"},
    {title: "דוחות כלליים"},
    {title: " הזנת נתונים"}
  ];

//   console.log(isClick);

//   useEffect(() => {}, []);

  return (
    <div>
        <div className="nivut"
      style={{
        fontSize: "2em",
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
        "hover:BackgroundColor": "blue",
      }}>
      {mainNavigation.map((el) => (
        <Button
          text={el.title}
          onClick={(e) =>
            e.currentTarget.innerText === "הזנת נתונים"
              ? setIsClick({
                  DataEntry: true,
                  GeneralReports: false,
                  Letters: false,
                })
              : e.currentTarget.innerText === "דוחות כלליים"
              ? setIsClick({
                  DataEntry: false,
                  GeneralReports: true,
                  Letters: false,
                })
              : e.currentTarget.innerText === "מכתבים"
              ? setIsClick({
                  DataEntry: false,
                  GeneralReports: false,
                  Letters: true,
                })
              : ""
          }
        />
      ))}
      </div>
      <div>
        <br/>
      {isClick.DataEntry ? <DataEntry /> : ""}
      {isClick.GeneralReports ? <GeneralReports /> : ""}
      {isClick.Letters ? <Letters /> : ""}
      </div>
    </div>
  );
};

export default Grade;
