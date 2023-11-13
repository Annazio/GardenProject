import React from 'react'
import style from "./style.module.css"
import dwarf from "../../assets/images/Dwarf.png"
import PhoneForm from '../PhoneForm'


export default function Discount
  () {
  return (
    <div className={style.discount}>
      <div className='container'>
        <div className={style.discount_wrapper}>
          <div className={style.image_wrapper}>
            <img src={dwarf} alt="Dwarf" />
          </div>


          <div>
            <h4 className={style.discount_title}>
              5% off <span>on the first order</span>
            </h4>

            <PhoneForm
              placeholderInput="+49"
              typeInput="tel"
              nameInput="sale"
              contentInput="discount_input"
              textButton="Get a discount"
              contentButton="get_discount"
            />
          </div>
        </div>
      </div>
    </div>
  )
}