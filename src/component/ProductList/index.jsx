import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../ProductItem';
import { fetchProducts } from '../../store/slice/productSlice';
import style from './style.module.css'

export default function ProductList({id}) {

const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchProducts(id));
    }, [id])

    const {status, list} = useSelector(({products}) => products)

    

  return (
    <div >
        {
        status === 'ready'
        ?
      
        <div className={style.product_list_container}>
            {
              list.map(product => <ProductItem key={product.id} {...product}/>)
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