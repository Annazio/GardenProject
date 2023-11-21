import React from 'react'
import style from './style.module.css'
import CategoriesList from '../../component/CategoriesList'

export default function CategoriesPage() {
  return (
      <div className='container'>
        <h1 className={style.categories_title}>Categories</h1>
        <CategoriesList />
      </div>
  )
}
