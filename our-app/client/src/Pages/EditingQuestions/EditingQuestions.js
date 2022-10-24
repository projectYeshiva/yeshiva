import React, { useState } from 'react'
import Question from '../../components/Question/Question'

const EditingQuestions = ({categories}) => {
    const [saveQuestion,setSaveQuestion]=useState([])
    const [saveSelect, setSaveSelect] = useState([]);
    const [saveSelectSoog, setSaveSelectSoog] = useState([]);


    console.log(saveQuestion);
     

  return (
    <div>
        <input type={"text"} placeholder="הקלד שאלה" onChange={(e)=>setSaveQuestion(e.target.value)}/>
        <p>סווג את השאלה</p>
           {categories.map((el) => <Question label={el.label} select={el.select}
            onChange={ (e)=>
              // console.log(el.select.map((el)=>e.value))
              // (e) =>{
              {setSaveSelect([...saveSelect,e.value])
              console.log(saveSelect)}
            }  
        //    saveSelect={el.saveSelect}
        //    setSaveSelect={setSaveSelect}
           />
           )}
        <button onClick={()=>{
          setSaveSelectSoog(
          categories.map((el)=><Question select={el.select}/>));
          console.log(saveSelectSoog)
          setSaveSelectSoog(saveSelectSoog.props.select.map((el)=>el.value))
          console.log(saveSelectSoog);
          }}>שמור</button>
    
    
    </div>
  )
}

export default EditingQuestions