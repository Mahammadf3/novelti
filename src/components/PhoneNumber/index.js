import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState,useEffect } from 'react'

import "./index.css"

const PhoneNumber=(props)=>{
  const {activePhoneNumber}=props
    const [value, setValue] = useState()

    useEffect(() => {
     
      activePhoneNumber(value)
    }, [value, activePhoneNumber])

  return (
    <div className="phonContainer">
        <label htmlFor='phone'>phone Number(required)</label>
    <PhoneInput id="phone"
    className="phonContainer1"
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
      </div>
  )
}

export default PhoneNumber