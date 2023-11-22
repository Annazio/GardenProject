import React from 'react'
import style from "./style.module.css"

export default function EmptyShoppingCart() {
  return (
    <div className={style.empty_cart_wrapper}>
         <p className={style.empty_cart_message} >Your shopping cart is empty</p>
    </div>
  )
}
