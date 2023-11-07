import React from 'react'
import style from "./style.module.css"
import dwarf from "../../assets/images/Dwarf.png"
import PhoneForm from '../PhoneForm'


export default function Discount
() {
  return (
    <div>
        <section className={style.discount}>
            <div className='container'>
                <div className={style.discount_wrapper}>
                   <div className={style.image}>
                        <img src={dwarf} alt="Dwarf" />
                   </div>
                </div>
                <div className={style.get_discount}>
                        <h2 className={style.discount_text}>
							5% off
							<span>on the first order</span>
						</h2>
                </div>
            </div>
            <PhoneForm
                placeholderInput="+49"
                typeInput="tel"
                nameInput="sale"
                contentInput="sale"
                textButton="Get a discount"
                contentButton="sale"
            />
        </section>

    </div>
  )
}
