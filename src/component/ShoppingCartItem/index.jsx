import React from 'react'
import style from "./style.module.css"
import { useDispatch } from 'react-redux'
import {  decrAmount, incrAmount, removeItem } from '../../store/slice/cartSlice';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';


export default function ShoppingCartItem({id, image, title, count, price, discont_price}) {
  const dispatch = useDispatch()

  const decr = () => dispatch(decrAmount(id))
  const incr = () => dispatch(incrAmount(id))

  const remove = () => dispatch(removeItem(id))
  //   const remove = () => {
  //   dispatch(removeItem(id))
  //   toast(`Removed from the shopping cart!`, {
  //     position: "top-right",
  //     autoClose: 1000,
  //     hideProgressBar: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     style: {
  //       background: "green", 
  //       color: "white", 
  //     boxShadow: 'none'
  //     }
  //   })
  // }

  return (
    <div className={style.item_container}>
      
        <div className={style.image_wrapper}>
          <img src={"http://localhost:3333" + image} alt={title} />
        </div>

        <div className={style.title_counter_wrapper}>
        <p>{title}</p>
        
          <div className={style.counter}>
              <AiOutlineMinus className={style.decr_btn} onClick={decr}/>
              <p>{count}</p>
              <AiOutlinePlus className={style.incr_btn} onClick={incr}/>
          </div>
        </div>

        <div className={style.price_container}>
          {discont_price && <p className={style.actual_price}>{discont_price}$</p>}
          {discont_price ? 
          <p className={style.old_price}>{price}<span>$</span></p>
          : 
          <p className={style.actual_price}>{price}<span>$</span></p>
          }
       </div>
        <IoMdClose className={style.remove_btn} onClick={remove}/>
    </div>
  )
}
