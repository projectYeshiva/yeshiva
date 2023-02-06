import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Providers from "../../components/Providers/Providers";
import Create from "../../components/Create/Create";

const Diaries = ({masectot}) => {
  const [click, setClick] = useState({
    providers: false,
    create: false,
  });

  const buttons = ["הספקים","יצירת יומן"]
    // {
    //   text: "הספקים",
    //   path: "../diaries/providers",
    // },
    // {
    //   text: "יצירת יומן",
    //   path: "../diaries/create",
    // },
 
  console.log(click);

  return (
    <div>
      {buttons.map((el) => (
        <Button
          text={el}
          onClick={(e) =>
            e.currentTarget.innerText == "הספקים"
              ? setClick({
                  providers: true,
                  create: false,
                })
              : e.currentTarget.innerText == "יצירת יומן"
              ? setClick({
                  providers: false,
                  create: true,
                })
              : ""
          }
        />
      ))}
      {click.providers ? <Providers masectot={masectot}/> : ""}
      {click.create ? <Create /> : ""}
    </div>
  );
};

export default Diaries;
