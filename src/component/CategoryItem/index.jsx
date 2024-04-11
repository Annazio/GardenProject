import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'

export default function CategoryItem({ id, image, title }) {
  return (
    <Link to={`/categories/${id}`}>
      <div className={style.category_item_wrapper}>
        <div className={style.image_wrapper}>
          <img src={"https://gardenprojectserver.onrender.com" + image} alt={title} />
        </div>
        <h3 className={style.category_title}>{title}</h3>
      </div>

    </Link>

  )
}

