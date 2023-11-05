import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductItem from '../../component/ProductItem'
import { fetchCategoryById } from '../../store/slice/categoriesSlice'

export default function SingleCategoryPage() {

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => { 
      dispatch(fetchCategoryById(id))
    }, [dispatch])
    
    const {list, title} = useSelector(({categories}) => categories)
    
  return (
    <div>
        <h1>{title}</h1>
        {
            list.map(product => <ProductItem key={product.id} {...product}/>)
        }
    </div>
  )
}
