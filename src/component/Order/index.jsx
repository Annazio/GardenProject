import React from 'react'
import style from './style.module.css'
import { useCart } from '../../utils/useCart';
import PhoneForm from '../PhoneForm';

export default function Order() {
  const cart = useCart();
  const totalSum = cart.reduce((acc, { count, price }) => acc + count * price, 0)

  return (
    <div className={style.order_wrapper}>
      <h3 className={style.order_details_title}>Order details</h3>
      <div className={style.order_total_sum}>
        <p className={style.total_sum}>Total</p>
        <p className={style.amount}>{totalSum}<span>$</span></p>
      </div>
      <PhoneForm
        placeholderInput="Phone number"
        typeInput="tel"
        nameInput="order"
        contentInput="order_input"
        textButton="Order"
        contentButton="order_btn"
      />
    </div>
  )
}
