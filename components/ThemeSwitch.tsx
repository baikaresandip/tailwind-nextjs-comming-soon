"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
    setTheme('dark')
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className='container mx-auto p-4 text-center'>
      <div className='float-right md:float-left'> 
        {/* <select 
            value={theme} 
            onChange={e => setTheme(e.target.value)} 
            className='
              text-slate-800 p-2 rounded-full 
              dark:text-white border-solid border-2
            '>
          <option value="system">System</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select> */}

        <button 
          className='text-slate-800 p-2 font-semibold rounded-lg border-solid border-2 border-slate-800 dark:border-gray-900  dark:text-white'
          onClick={ () => theme === 'dark' ? setTheme('light'): setTheme('dark') } 
        >  
         <span className='px-6'>  {theme === 'dark' ? "Light" : "Dark"} </span>
        </button>
      </div>
    </header>
  )
}

export default ThemeSwitch