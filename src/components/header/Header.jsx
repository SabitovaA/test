import React, { useState } from 'react'
import cls from './Header.module.css'

function Header({theme,setTheme}) {
  const clickInput = () => {    
    setTheme(!theme)
    console.log(theme)
  }
  return (
    <header className={cls.header}>
      <p>Header</p>
      {/* <label className={`${cls.switch} ${theme ? cls.switch_active : ""}`} htmlFor="" > */}
        <input onClick={clickInput}  type="radio"/>
        {/* <span  className={cls.slider}></span>
      </label> */}
    </header>
  )
}

export default Header