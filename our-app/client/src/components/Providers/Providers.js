import React, { useState } from "react";
import Button from "../../components/Button/Button";
import ProvidersCommoneDetail from '../ProvidersCommoneDetail/ProvidersCommoneDetail';
import ProvidersPrivateDetail from "../ProvidersPrivateDetail/ProvidersPrivateDetail";

const Providers = ({masectot}) => {
  const [click, setClick] = useState({
    providersPrivateDetail: false,
    providersCommoneDetail: false,
  });
  const buttons = ["הספקים-מגמה", "הספקים-אישי"];

  return (
    <div>
      {buttons.map((el) => (
        <Button
          text={el}
          onClick={(e) =>
            e.currentTarget.innerText == "הספקים-אישי"
              ? setClick({
                  providersPrivateDetail: true,
                  providersCommoneDetail: false,
                })
              : e.currentTarget.innerText == "הספקים-מגמה"
              ? setClick({
                  providersPrivateDetail: false,
                  providersCommoneDetail: true,
                })
              : ""
          }
        />
      ))}
      {click.providersPrivateDetail ? <ProvidersCommoneDetail masectot={masectot}/> : ""}
      {click.providersCommoneDetail ? <ProvidersCommoneDetail masectot={masectot}/> : ""}
    </div>
  );
};

export default Providers;
