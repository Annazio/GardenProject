import React from 'react'
import ShoppingCartItem from '../ShoppingCartItem'
import { useCart } from '../../utils/useCart'

export default function ShoppingCart() {
    const card = useCart()

    console.log(card);

  return (
    <div>
        {
          card.map(item => <ShoppingCartItem key={item.id} {...item} />)
        }
    </div>
  )
}
