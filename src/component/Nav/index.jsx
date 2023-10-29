import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from './links'
import style from './style.module.css'

export default function Nav() {
    const className = ({isActive}) => isActive ? style.active : ''

  return (
    <div>
        <nav>
            {
            links.map(({id, title, link}) =>
            <NavLink className={`${className} ${style.link}`}  key={id} to={link}>{title}</NavLink> )
            }
        </nav>
    </div>
  )
}

// 26.10

// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { links } from './links'
// import style from './style.module.css'

// export default function Nav() {
//     const className = ({isActive}) => isActive ? style.active : ''

//   return (
//     <div>
//         <nav>
//             {
//             links.map(({id, title, link}) =>
//             <NavLink className={className}  key={id} to={link}>{title}</NavLink> )
//             }
//         </nav>
//     </div>
//   )
// }


