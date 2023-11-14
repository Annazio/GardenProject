import React from 'react'
import style from './style.module.css'

export default function Burger({open}) {
  return (
    <div className={`${style.burger} ${style[open]}`}>
        <span className={style.first_line}></span>
        <span className={style.second_line}></span>
        <span className={style.third_line}></span>
    </div>
  )
}
