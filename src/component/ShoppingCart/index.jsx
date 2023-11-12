import React, { useEffect } from 'react'
import ShoppingCartItem from '../ShoppingCartItem'
import { useCart } from '../../utils/useCart'
import ByCondition from '../../UI/ByCondition'
import EmptyShoppingCart from '../EmptyShoppingCart'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io';
import style from "./style.module.css"
import Order from '../Order'
import { useSelector } from 'react-redux'


export default function ShoppingCart() {
  //  const cart = useCart()

  // useEffect(() => {() => cart()}, [cart])

  const {list} = useSelector((state) => state.cartSlice)
  console.log(list);

  return (

    <div className={style.cart_wrapper}>

      <div className={style.cart_header}>
        <h1>Shopping Cart</h1>
        <Link className={style.back_btn} to="/products/all">
          <p>Back to the store</p>
          <IoIosArrowForward />
        </Link>
      </div>

      <div className={style.cart_details_container}>
        <div>
          {
            // list.map(item => <ShoppingCartItem key={item.id} {...item} />)
            // cart.map(item => <ShoppingCartItem key={item.id} {...item} />)
          }
          <ByCondition condition={list.length === 0}>
          {/* <ByCondition condition={cart.length === 0}> */}

            <EmptyShoppingCart />
          </ByCondition>
        </div>

        <Order />
      </div>
    </div>
  )
}