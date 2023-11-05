import { useParams } from 'react-router-dom'
import ButtonUI from '../../UI/ButtonUI'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slice/cartSlice';
import { useEffect, useState } from 'react';

export default function SingleItemPage() {
  const {id} = useParams()
  const products = useSelector(({products}) => products.list);

  const dispatch = useDispatch()
    const addProduct = () => dispatch(addToCart(+id))

    if (products.length === 0){
      return ''
    }
    const {image, title, description, price} = products.find(item => item.id === +id);


  return (
    <div className='container'>
        <h3>{title}</h3>
        <img src={"http://localhost:3333" + image} alt={title} />
        <p>{price}</p>
        <ButtonUI text="To cart" onClick={addProduct}/>
        <p>Description {description}</p>
    </div>
  ) 
}
 
