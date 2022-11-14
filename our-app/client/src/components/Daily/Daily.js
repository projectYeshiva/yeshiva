import React from 'react'
import Input from '../Input/Input'

const Daily = () => {

// const dataDaily = [
//     {placeholder:'הקלד שיעור'},
//     {placeholder:'הקלד שם ר"מ'},
//     {placeholder:'הקלד מגמה'}]

    const dataDaily = [
        'הקלד שיעור',
        'הקלד שם ר"מ',
        'הקלד מגמה']
        
  return (
    <div>
        <form>
        <br />
        <select>
          <option>מבחן שבועי</option>
          <option>מבחן חודשי</option>
          <option>מבחן כללי</option>
          <option>מבחן חצי שנתי</option>
          <option>מבחן שנתי</option>
        </select>
        <br />
        {dataDaily.map((el) => <Input type={'text'} placeholder={el}/>)}
      </form>
    </div>
  )
}

export default Daily