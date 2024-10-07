import React from 'react'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

// function Navigation() {
//   return (
//     <>
//     <nav className="flex sm:justify-center space-x-4">
//         {[
//             ['Home', '/'],
//             // ['Version 1', '/version1'],
//         ].map(([title, url]) => (
//             <a key={title} href={url} className="rounded-lg px-3 py-2 font-semibold text-slate-800 hover:bg-slate-700 hover:text-slate-100 dark:text-slate-100 dark:hover:text-slate-800 dark:hover:bg-zinc-300">{title}</a>
//         ))}
//         <ThemeSwitch />
//     </nav>
//     </>
//   )
// }

function Navigation() {
  return (
    <nav className="flex justify-between items-center px-4 py-2">
      <div>
        {[['Home', '/']].map(([title, url]) => (
            <a key={title} href={url} className="rounded-lg px-3 py-2 font-semibold text-slate-800 hover:bg-slate-700 hover:text-slate-100 dark:text-slate-100 dark:hover:text-slate-800 dark:hover:bg-zinc-300">{title}</a>
        ))}
      </div>
      <div className="flex-grow"></div>
      <div className="flex-shrink-0">
        <ThemeSwitch />
      </div>
    </nav>
  )
}

export default Navigation