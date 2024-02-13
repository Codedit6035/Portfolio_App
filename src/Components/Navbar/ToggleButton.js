import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

const ToggleButton = ({toggleMenu} ) => {
  return (
    <button onClick={toggleMenu} className='togglebutton'><IoCloseSharp /></button>
  )
}

export default ToggleButton