import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CategoryItem from '../CategoryItem';
import { fetchCategories } from '../../store/slice/categoriesSlice';

export default function CategoriesList({id, title, image}) {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchCategories(id));
    }, [id])

    const {status, list} = useSelector(({categories}) => categories)

    
  return (
    <>
    {
        status === 'ready'
        ?
      
        <div>
            {
              list.map(category => <CategoryItem key={category.id} title={category.title} image={category.image}/>)
            }
        </div>

        : status === 'error'
        ? <h2>Loading error</h2>

        :status === 'loading'
        ? <h2>Loading</h2>
        : ''
    }
    </>
  )
}

