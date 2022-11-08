import React from "react";

const DataEntry = () => {
  return (
    <div>
      <form
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection:"column",
          justifyContent: "space-around",
          margin: "10px",
        }}
      >
        <select>
          <option>לפנה"צ</option>
          <option>אחה"צ</option>
        </select>
        <br />
        <select>
          <option>מבחן שבועי</option>
          <option>מבחן חודשי</option>
          <option>מבחן כללי</option>
          <option>מבחן חצי שנתי</option>
          <option>מבחן שנתי</option>
        </select>
        <br />
        <input type={"text"}  placeholder={"הקלד שיעור"} />
        <br />
        <input type={"text"}  placeholder={'הקלד שם הר"מ'} />
        <br />
        <input type={"text"}  placeholder={"הקלד מגמה"} />
      </form>
    </div>
  );
};

export default DataEntry;
