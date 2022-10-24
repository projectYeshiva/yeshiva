import React, { useState } from "react";
import Select from "react-select";
import Question from "../../components/Question/Question";
import { Navigate, useNavigate } from "react-router-dom";

const Tests = () => {
  const [click, setClick] = useState(false);
  console.log(click);
  const navigate = useNavigate();

  const clickEvent = () => {
    navigate("../מבחנים/עריכת שאלות");
  };

  return (
    <div>
      <button>עריכת מבחן</button>

      <button onClick={clickEvent}>עריכת שאלות</button>
    </div>
  );
};

export default Tests;
