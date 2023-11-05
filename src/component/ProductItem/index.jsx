import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'
import ButtonUI from '../../UI/ButtonUI';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slice/cartSlice';
import { useCalculateDiscount } from '../../utils/useCalculateDiscount';
import ByCondition from '../../UI/ByCondition';


export default function ProductItem({id, image, title, price, discont_price}) {

  const dispatch = useDispatch();
  const addProduct = () => dispatch(addToCart(id))
  
  const discount = useCalculateDiscount(price, discont_price)
 


  return (
    <Link to={`/products/${id}`}>
      <div>
		<img src={"http://localhost:3333" + image} alt={title}  className={style.product_img}/>
       
        <ButtonUI text="Add to cart" onClick={addProduct}/>
     
	  </div>
      <p>{price}</p>
      {/* <ByCondition condition={{discont_price} > 0}>
          <p>{discont_price}</p>
      </ByCondition> */}
      <p>{discont_price}</p>
      <p>{discount}</p>
	  <h3 className={style.product_title}>{title}</h3>
        
    </Link>
  )
}