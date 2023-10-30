import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'
import ButtonUI from '../../UI/ButtonUI';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slice/cartSlice';

export default function ProductItem({id, image, title, price}) {

  const dispatch = useDispatch();
  const addProduct = () => dispatch(addToCart(id))


  const [isHovered, setIsHovered] = useState(false);


  return (
    <Link to='#'>
      <div className={`${style.image_wrapper} ${isHovered ? style.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
		<img src={"http://localhost:3333" + image} alt={title}  className={style.product_img}/>
        {isHovered && (
        <ButtonUI text="Add to cart" onClick={addProduct}/>
      )}
	  </div>
      <p>{price}</p>
	  <h3 className={style.product_title}>{title}</h3>
        
    </Link>
  )
}