import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'
import ButtonUI from '../../UI/ButtonUI';

export default function ProductItem({image, title, price}) {

  const [isHovered, setIsHovered] = useState(false);


  return (
    <Link to='#'>
      <div className={`${style.image_wrapper} ${isHovered ? style.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
		<img src={"http://localhost:3333" + image} alt={title} />
        {isHovered && (
        <ButtonUI text="Add to card"/>
      )}
	  </div>
      <p>{price}</p>
	  <h3 className={style.product_title}>{title}</h3>
        
    </Link>
  )
}



