import React from 'react'
import style from "./style.module.css"
import ButtonUI from '../../UI/ButtonUI'
import { useNavigate } from 'react-router-dom';

export default function Sale() {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate('/');
    }

    return (
        <div className={style.sale}>
            <div className='container'>
                <div className={style.sale_wrapper}>
                    <h1 className={style.title}>Sale
                        <span>New Season</span>
                    </h1>
                    <a href='#sale_slider_section'>
                        <ButtonUI text="Sale" content="sale_btn" onClick={handleClick} />
                    </a>
                </div>
            </div>
        </div>
    )
}
