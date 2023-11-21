import style from './style.module.css'
import { useCart } from '../../utils/useCart';
import PhoneForm from '../PhoneForm';
import { ToastContainer } from 'react-toastify';

export default function Order() {
  const list = useCart();
  
   const totalSum = list?.reduce((acc, { count, price, discont_price }) => {
    const productPrice = discont_price || price; 
    return acc + count * productPrice;
  }, 0);
  
  const roundedTotalSum = parseFloat(totalSum.toFixed(2));


  return (
    <div className={style.order_wrapper}>
      <h3 className={style.order_details_title}>Order details</h3>
      <div className={style.order_total_sum}>
        <p className={style.total_sum}>Total</p>
        <p className={style.amount}>{roundedTotalSum}<span>$</span></p>
      </div>
      <PhoneForm
        placeholderInput="Phone number"
        typeInput="tel"
        nameInput="order"
        contentInput="order_input"
        textButton="Order"
        contentButton="order_btn"
      
      />
      <ToastContainer/>
    </div>
  )
}
