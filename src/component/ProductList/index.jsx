import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../ProductItem';
import { fetchProducts } from '../../store/slice/productSlice';

export default function ProductList({id}) {

const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchProducts(id));
    }, [id])

    const {status, list} = useSelector(({products}) => products)


  return (
    <>
        {
        status === 'ready'
        ?
      
        <div>
            {
              list.map(product => <ProductItem key={product.id} title={product.title} image={product.image} price={product.price}/>)
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
