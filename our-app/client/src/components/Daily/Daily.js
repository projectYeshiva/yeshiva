import React from 'react'
import Input from '../Input/Input'
import Select from '../Select/Select'

const Daily = () => {

// const dataDaily = [
//     {placeholder:'הקלד שיעור'},
//     {placeholder:'הקלד שם ר"מ'},
//     {placeholder:'הקלד מגמה'}]
const soogim=["מבחן כללי","מבחן שנתי","מבחן חצי שנתי","מבחן חודשי","מבחן שבועי"]
    const dataDaily = [
        'הקלד שיעור',
        'הקלד שם ר"מ',
        'הקלד מגמה']
        const options = [
          {
            label: " סוג מבחן",
            option: soogim,
          }]
          
        
  return (
    <div>
        <form>
        <br />
        <Select options={options}/>
        
        {/* <select>          
          <option>מבחן שבועי</option>
          <option>מבחן חודשי</option>
          <option>מבחן כללי</option>
          <option>מבחן חצי שנתי</option>
          <option>מבחן שנתי</option>
        </select>
        <label>    סוג מבחן</label> */}
        <br />
        {dataDaily.map((el) => <Input type={'text'} placeholder={el}/>)}
      </form>
    </div>
  )
}

export default Daily