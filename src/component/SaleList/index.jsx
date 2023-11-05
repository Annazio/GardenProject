import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slice/productSlice';
import ProductItem from '../ProductItem';

export default function SaleList({id}) {

    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchProducts(id));
    }, [id])

    const {status, list} = useSelector(({products}) => products)

    const saleArr = list.filter(item=> item.discont_price)
   

    
  return (
    <div>
        {
            status === 'ready'
            ?
        
            <div>
                {
                saleArr.map(product => <ProductItem key={product.id} {...product}/>)
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
