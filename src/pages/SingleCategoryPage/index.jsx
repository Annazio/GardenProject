import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductItem from '../../component/ProductItem'
import { fetchCategoryById } from '../../store/slice/categoriesSlice'
import ProductsFilter from '../../component/ProductsFilter'

export default function SingleCategoryPage() {

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => { 
      dispatch(fetchCategoryById(id))
    }, [id, dispatch])
    
    const { list, title} = useSelector(({categories}) => categories)
    
  return (
    <div>
        <h1>{title}</h1>
        <ProductsFilter/>
        
        <div>
        {
            list
            // .filter(({show}) => Object.values(show).every(elem => elem))
            .map(product => <ProductItem key={product.id} {...product}/>)
        }
        </div>
        
    
    </div>
  )
}
