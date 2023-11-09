import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slice/productSlice';
import ProductItem from '../ProductItem';
import ProductsFilter from '../ProductsFilter';

export default function SaleList({id}) {

    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchProducts(id));
    }, [id, dispatch])

    const {status, list} = useSelector(({products}) => products)

    const saleArr = list.filter(item=> item.discont_price)
   

    
  return (
    <div >
      <ProductsFilter/>
    <div>
        {
            status === 'ready'
            ?
        
            <div>
                {
                saleArr
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
