import { NavLink } from 'react-router-dom'
import { links } from './links'
import style from './style.module.css'

export default function Nav({ ...other }) {
 
  const className = ({isActive}) => isActive ? style.active : ''

  return (
        <nav className={style.nav}{ ...other } >
            {
            links.map(({id, title, link}) =>
            <NavLink className={className}  key={id} to={link}>{title}</NavLink> )
            }
        </nav>
  
  )
}


