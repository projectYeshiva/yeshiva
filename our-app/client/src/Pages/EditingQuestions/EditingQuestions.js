import React, { useEffect, useState } from 'react'
import Question from '../../components/Question/Question'

const EditingQuestions = ({categories}) => {
    const [saveQuestion,setSaveQuestion]=useState([])
    const [saveSelect, setSaveSelect] = useState([]);
    const [saveSelectSoog, setSaveSelectSoog] = useState([]);


    // console.log(saveQuestion);
    console.log(saveSelect)

  return (
    <div>
        <input type={"text"} placeholder="הקלד שאלה" onChange={(e)=>setSaveQuestion(e.target.value)}/>
        <p>סווג את השאלה</p>
           {categories.map((el) => <Question label={el.label} select={el.select}
            // onChange={ (e)=> {console.log(e.value);
            //     setSaveSelect([...saveSelect,e.value]) } }  
           />
           )}
        <button
        onClick={(e) => {
          setSaveSelect([
            e.target.parentNode.children[2].children[2].children[2].children[0]
              .children[0].innerText,
            e.target.parentNode.children[3].children[2].children[2].children[0]
              .children[0].innerText,
            e.target.parentNode.children[4].children[2].children[2].children[0]
              .children[0].innerText,
            e.target.parentNode.children[5].children[2].children[2].children[0]
              .children[0].innerText,
          ]);
        }}
      >שמור</button>
    </div>
  )
}

export default EditingQuestions