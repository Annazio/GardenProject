import React from 'react'
import style from './style.module.css'
import NotFound from '../../assets/images/NotFound.png'

export default function NotFoundPage() {
  return (
    <div>
      <section className={style.notfound}>
        <div className='container'>
            <img src={NotFound} alt="Not found page " />
        </div>
		</section>
    </div>
  )
}
