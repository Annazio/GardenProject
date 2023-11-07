import React from 'react'
import style from './style.module.css'
import CategoriesList from '../../component/CategoriesList'

export default function CategoriesPage() {
  return (
    <section className={style.categories_page}>
      <div className='container'>
        <CategoriesList />
      </div>
    </section>

  )
}
