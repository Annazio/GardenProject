import { useParams } from 'react-router-dom'
import ButtonUI from '../../UI/ButtonUI'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slice/cartSlice';
import style from './style.module.css'
import { useCalculateDiscount } from '../../utils/useCalculateDiscount';
import { ProductPrice } from '../../component/ProductPrice';

export default function SingleItemPage() {
  const { id } = useParams()
  const products = useSelector(({ products }) => products.list);

  const dispatch = useDispatch()
  const addProduct = () => dispatch(addToCart(+id))


  if (products.length === 0) {
    return ''
  }
  const { image, title, description, price } = products.find(item => item.id === +id);

  // const discount = useCalculateDiscount(price, discont_price)

  return (
    <div className='container'>
      <div single_item_wrapper>
        <h1 className={style.title}>{title}</h1>
        <div className={style.image_wrapper}>
          <img src={"http://localhost:3333" + image} alt={title} />
        </div>
        <div className={style.detail_wrapper}>
          
          {/* <p>{price}</p>
          <p>{discont_price}</p>
          <p>{discount}</p> */}
          <ButtonUI text="To cart" onClick={addProduct} />
          <div className={style.description}>
            <p>Description </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

