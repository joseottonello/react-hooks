import { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export const Header = () => {
  const [ darkMode, setDarkMode ] = useState(false)
  const color = useContext(ThemeContext)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="header">
        <h1 style={{ color }}>React Hooks</h1>
        <button type='button' onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  )
}
