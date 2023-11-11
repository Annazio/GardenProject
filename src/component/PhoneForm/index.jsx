import React from 'react'
import InputUI from '../../UI/InputUI'
import ButtonUI from '../../UI/ButtonUI'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { fetchDiscount, fetchOrder } from '../../store/slice/orderDiscountSlice'
import style from "./style.module.css"

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
    reset()
  }

  const phoneInput = register('phone', {
    required: 'Phone number required',
    pattern: {
      value: /^\+?\d{5,13}$/,
      message: 'Your phone number should contain 5 to 13 characters'

    }
  })
  return (
    <div>
      <form className={style.phone_form} onSubmit={handleSubmit(onSubmit)}>
        <InputUI
          placeholder={placeholderInput}
          type={typeInput}
          name={nameInput}
          content = {contentInput}
          validation={phoneInput}
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
    
        <ButtonUI text={textButton} content={contentButton} type="submit" />
      </form>
    </div>
  )
}


