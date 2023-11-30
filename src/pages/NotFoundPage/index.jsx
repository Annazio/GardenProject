import React from 'react'
import style from './style.module.css'
import NotFound from '../../assets/images/notFound.svg'

export default function NotFoundPage() {
  return (
    <div className="container">
    <section className={style.notfound}>
      <img src={NotFound} alt="Not found page " />
    </section>
    </div>
  )
}
