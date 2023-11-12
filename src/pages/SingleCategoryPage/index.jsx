import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductItem from '../../component/ProductItem'
import { fetchCategoryById, priceFilter } from '../../store/slice/categoriesSlice'
import ProductsFilter from '../../component/ProductsFilter'
import Container from '../../UI/Container'

export default function SingleCategoryPage() {

    const {id} = useParams()
    const dispatch = useDispatch()

    const {status, productsList, title} = useSelector(({categories}) => categories)
    
    // const [tempList, setTempList] = useState()
    useEffect(() => { 
      
      
      
      // if(!list.show){
         dispatch(fetchCategoryById(id))
      // }else{
      //   console.log("🚀 ~ file: index.jsx:19 ~ SingleCategoryPage ~ list:", list)
      //   setTempList(list.filter(({show}) => Object.values(show).every(elem => elem)))
      // }

    }, [id, dispatch])
    


  
   
    
     

  return (
    <div className='container'>
        <h1>{title}</h1>
        <ProductsFilter priceFilter={priceFilter}/>
        
        {
            status === 'ready'
            ?

        <Container>
        {
           productsList
           .filter(({show}) => Object.values(show).every(elem => elem))
           .map(product => <ProductItem key={product.id} {...product}/>)
        }
        </Container>
          : status === 'error'
          ? <h2>Loading error</h2>

          :status === 'loading'
          ? <h2>Loading</h2>
          : ''
      }
    
    </div>
  )
}
