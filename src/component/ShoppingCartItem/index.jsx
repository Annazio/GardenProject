import React from 'react'
import style from "./style.module.css"
import ButtonUI from '../../UI/ButtonUI'
import { useDispatch } from 'react-redux'
import {  decrAmount, incrAmount, removeItem } from '../../store/slice/cartSlice';

export default function ShoppingCartItem({id, image, title, count, price}) {
  const dispatch = useDispatch()

  const decr = () => dispatch(decrAmount(id))
  const incr = () => dispatch(incrAmount(id))
  const remove = () => dispatch(removeItem(id))

  return (
    <div className={style.shopping_item}>
        <img src={"http://localhost:3333" + image} alt={title} />
        <p>{title}</p>
        
        <div className={style.counter}>
            <ButtonUI text="-" onClick={decr}/>
            <p>{count}</p>
            <ButtonUI text="+" onClick={incr}/>
        </div>
        
        <p>{price}</p>

        <ButtonUI text="x" onClick={remove}/>
    </div>
  )
}
