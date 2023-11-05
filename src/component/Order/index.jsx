import React from 'react'
import style from './style.module.css'
import { useDispatch } from 'react-redux';
import { useCart } from '../../utils/useCart';
import PhoneForm from '../PhoneForm';

export default function Order() {
    const dispatch = useDispatch()
    const cart = useCart();
    const totalSum = cart.reduce((acc, {count, price}) => acc + count * price, 0) 

  return (
    <div>
		<h3>Order details</h3>
			<div className={style.order_total_sum}>
				<p>Total</p>
				<p>{totalSum}</p>
			</div>
      <PhoneForm
        contentInput="order"
        placeholderInput="Phone number"
        textButton="Order"
        contentButton="order"
        type="order"
      />
	</div>
  )
}
