import React from 'react'
import Nav from '../Nav'
import Logo from "../../assets/images/Logo.png"
import shopping_bag from "../../assets/icons/shopping_bag.svg"
import style from "./style.module.css"
import ButtonUI from '../../UI/ButtonUI'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.wrapper}>

            <div className={style.left_part}>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
              <ButtonUI text="Catalog" type="header_btn" />
            </div>
          
            <div className={style.right_part}>
                <Nav/>
                <Link to="/shoppingcard">
                    <img src={shopping_bag} alt="Shopping Bag" />
                </Link>
            </div>

        </div>
      </div>
    </header>
  )
}

