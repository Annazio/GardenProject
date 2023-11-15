import { NavLink } from 'react-router-dom'
import { links } from './links'
import style from './style.module.css'

export default function Nav({nav}) {
 
  const className = ({isActive}) => isActive ? style.active : ''

  return (
    <div>
        <nav className={nav? [style.nav, style.active].join(' ') : [style.nav]}>
            {
            links.map(({id, title, link}) =>
            <NavLink className={className}  key={id} to={link}>{title}</NavLink> )
            }
        </nav>
    </div>
  )
}

