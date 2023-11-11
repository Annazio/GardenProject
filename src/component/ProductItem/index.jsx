import { useNavigate } from 'react-router-dom'
import style from './style.module.css'
import ButtonUI from '../../UI/ButtonUI';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slice/cartSlice';
import { useCalculateDiscount } from '../../utils/useCalculateDiscount';
import { getProductId } from '../../store/slice/productSlice';


export default function ProductItem({ id, image, title, price, discont_price }) {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const addProduct = () => dispatch(addToCart(id))

  const discount = useCalculateDiscount(price, discont_price)

  function handleSingleProduct(id) {
    dispatch(getProductId(id));
    localStorage.setItem("ProductId", JSON.stringify(id))
    navigate('/products/:id')
  }



  return (
    <div>

      <div onClick={() => handleSingleProduct(id)}>
        <img src={"http://localhost:3333" + image} alt={title} className={style.product_img} />
      </div>

      <ButtonUI text="Add to cart" onClick={addProduct} />

      <div onClick={() => handleSingleProduct(id)}>
        <p>{price}$</p>
        {discont_price && <p>{discont_price}$</p>}
        {discont_price && price && <p>-{discount}%</p>}

        <h3 className={style.product_title}>{title}</h3>
      </div>
    </div>
  )
}