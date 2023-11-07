import React from 'react'
import style from './style.module.css'
import NotFound from '../../assets/images/NotFound.png'

export default function NotFoundPage() {
  return (
    <section className={style.notfound}>
      <img src={NotFound} alt="Not found page " />
    </section>
  )
}
