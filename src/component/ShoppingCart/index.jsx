import React from 'react'
import ShoppingCartItem from '../ShoppingCartItem'
import { useCart } from '../../utils/useCart'
import ByCondition from '../../UI/ByCondition'
import EmptyShoppingCart from '../EmptyShoppingCart'

export default function ShoppingCart() {
    const cart = useCart()
console.log(cart);

    
    // const productsList = productId ? productId : localStorage.getItem("ProductId")

  return (
    <div>
       <h1>Shopping Cart</h1>
        {
          cart.map(item => <ShoppingCartItem key={item.id} {...item} />)
        }
        <ByCondition condition={cart.length === 0}>
            <EmptyShoppingCart/>
        </ByCondition>
    </div>
  )
}
