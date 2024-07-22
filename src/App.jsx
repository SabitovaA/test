import { useState } from 'react'
import cls from'./App.module.css'
import Header from './components/header/Header'

function App() {
  const [theme,setTheme] = useState(false)
  return (
    <div className={!theme ? `${cls.App}` : `${cls.durck}`}>
     <Header theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
