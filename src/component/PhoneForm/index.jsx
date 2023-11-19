import React from 'react'
import InputUI from '../../UI/InputUI'
import ButtonUI from '../../UI/ButtonUI'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { fetchDiscount, fetchOrder } from '../../store/slice/orderDiscountSlice'
import style from "./style.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useCart } from '../../utils/useCart'
import { cleanCart } from '../../store/slice/cartSlice'

export default function PhoneForm({ textButton, contentButton, contentInput, placeholderInput, nameInput, typeInput }) {


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange' })

  const dispatch = useDispatch()


  const onSubmit = (data) => {
    nameInput === 'order'? dispatch(fetchOrder(data.phone)) : dispatch(fetchDiscount(data.phone))
    dispatch(cleanCart())
    reset()
    
    // toast(nameInput === 'order'? `Thanks for your order!` : `5% discount code has been sent to the entered phone number `, {
    //   position: "top-right",
    //   autoClose: 1000,
    //   hideProgressBar: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   style: {
    //     background: "green", 
    //     color: "white", 
      
    //   }
    // })

  }

  const phoneInput = register('phone', {
    required: 'Phone number required',
    pattern: {
      value: /^\+?\d{5,13}$/,
      message: 'Your phone number should contain 5 to 13 characters'

    }


  })
  return (
    // <div>
      <form className={style.phone_form} onSubmit={handleSubmit(onSubmit)}>
        <InputUI
          placeholder={placeholderInput}
          type={typeInput}
          name={nameInput}
          content = {contentInput}
          validation={phoneInput}
        />
        {/* {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>} */}
        {errors.phone && <p className={`${style.error}  ${style.active}`}>{errors.phone.message}</p>}
    
        <ButtonUI text={textButton} content={contentButton} type="submit" />
        {/* <ToastContainer/> */}
      </form>
     
    // </div>
  )
}


