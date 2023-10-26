import React from 'react'
import style from "./style.module.css"
import flowers from "../../assets/images/flowers.png"
import ButtonUI from '../../UI/ButtonUI'
export default function Sale() {
  return (
    <section className={style.sale}>
        <div className='container'>
            <div className={style.sale_wrapper}>
                <div className={style.left_wrapper}>
                    <div className={style.title_wrapper}>
                        <h2 className={style.title}>Sale</h2>
                        <p className={style.title_info}>New Season</p>
                    </div>
                    <ButtonUI text="Sale" content="sale_btn"/>
                </div>

                <div className={style.right_wrapper}>
                    <img src={flowers} alt="Flowers" />
                </div>
            </div>
        </div>
    </section>
  )
}
