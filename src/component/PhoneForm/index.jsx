import React from 'react'
import InputUI from '../../UI/InputUI'
import ButtonUI from '../../UI/ButtonUI'
import { useForm } from 'react-hook-form'
import { fetchDiscountOrder } from '../../store/slice/orderDiscountSlice'

export default function PhoneForm({ textButton, contentButton, contentInput, placeholderInput, nameInput, typeInput }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange' })

console.log(errors.phone);
  const onSubmit = () => {
   
  // const {nameInput} = event.target;

  // const data = {
  //   nameInput: +nameInput.value
  // }

  // fetchDiscountOrder(data);
  // console.log(data);


    // const nameInputValue = data.nameInput;
    
    // const requestData = {
    //   nameInput: nameInputValue
    // };

    
    // fetchDiscountOrder(requestData);
    // console.log(requestData);




    // fetchDiscountOrder(nameInput);
    // console.log(nameInput);
    reset()
  }

  // const phoneInput = register('phone', {
  //   required: 'Phone number required',
  //   pattern: {
  //     value: /^\+?\d{5,13}$/,
  //     message: 'Your phone number should contain 5 to 13 characters'

  //   }
  // })
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputUI
          placeholder={placeholderInput}
          type={typeInput}
          name={nameInput}
          content = {contentInput}
          {
            ...register('phone', {
              required: true,
              maxLength: 3
              // pattern: {
              //   value: /^\+?\d{5,13}$/,
              //   message: 'Your phone number should contain 5 to 13 characters'
          
              // }
            })
          }
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
    
        <ButtonUI text={textButton} content={contentButton} type="submit" />
      </form>
    </div>
  )
}


// {errors.phone && <p className={style.error} style={{ color: 'red' }}>{errors.phone.message}</p>}
