import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CategoryItem from '../CategoryItem';
import { fetchCategories } from '../../store/slice/categoriesSlice';
import style from "./style.module.css"

export default function CategoriesList() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchCategories());
    }, [dispatch])

    const {status, list} = useSelector(({categories}) => categories)

    
  return (
    <div className={style.categories_wrapper}>
      <h1>Categories</h1>
    {
        status === 'ready'
        ?
      
        <div className={style.categories_list_container}>
            {
              list.map(category => <CategoryItem key={category.id} {...category}/>)
            }
        </div>

        : status === 'error'
        ? <h2>Loading error</h2>

        :status === 'loading'
        ? <h2>Loading</h2>
        : ''
    }
    </div>
  )
}

