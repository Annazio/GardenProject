import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from './links'
import s from './style.module.css'

export default function Nav() {
    const className = ({isActive}) => isActive ? s.active : ''

  return (
    <div>
        <nav>
            {
            links.map(({id, title, link}) =>
            <NavLink className={className} key={id} to={link}>{title}</NavLink> )
            }
        </nav>
    </div>
  )
}
