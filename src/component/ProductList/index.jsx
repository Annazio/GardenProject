import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../ProductItem';
import { fetchProducts } from '../../store/slice/productSlice';
import style from './style.module.css'
import ProductsFilter from '../ProductsFilter';

export default function ProductList({id}) {

const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchProducts(id));
    }, [id, dispatch])

    const {status, list} = useSelector(({products}) => products)

  

  return (
    <div>
      <ProductsFilter/>
    <div>
        {
        status === 'ready'
        ?
      
        <div className={style.product_list_container}>
            {
              list
              .filter(({show}) => Object.values(show).every(elem => elem))
              .map(product => <ProductItem key={product.id} {...product}/>)
            }
        </div>

        : status === 'error'
        ? <h2>Loading error</h2>

        :status === 'loading'
        ? <h2>Loading</h2>
        : ''
    }
    </div>
    </div>
  )
}