import React, { useState } from 'react'
import Nav from '../Nav'
import Logo from "../../assets/images/Logo.svg"
import shopping_bag from "../../assets/icons/shopping_bag.svg"
import style from "./style.module.css"
import ButtonUI from '../../UI/ButtonUI'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useCart } from '../../utils/useCart'

export default function Header() {
  const list = useCart();
  const cartCount = list?.reduce((acc, { count }) => {
    return acc + count;
  }, 0);

  const navigate = useNavigate();
  const [nav, setNav] = useState(false)

  const handleClick = () => {
    navigate('/');
    setNav(false)
  }

  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.header_wrapper}>
          <div className={`${style.left_part} ${style[nav && 'active']}`}>
            <Link 
            onClick={() => setNav(false)}
            to="/" >
              <div className={style.logo}>
                <img src={Logo} alt="Logo" />
              </div>
            </Link>
            <a href='#slider_section'>
              <ButtonUI text="Catalog" content="header_btn" onClick={handleClick} />
            </a>
          </div>

          <div className={`${style.right_part} ${style[nav && 'active']}`}>
            {/* <div className={style.right_part_wrapper}> */}
            <Nav onClick={() => setNav(false)} />
            <Link 
                className={style.bag_link} 
                onClick={() => setNav(false)}
                to="/shoppingcard">
              <img src={shopping_bag} alt="Shopping Bag" />
              {cartCount > 0 && <p className={style.cartCount}>{cartCount}</p>}
            </Link>   
            {/* </div>      */}
          </div>

            <div
              onClick={() => setNav(!nav)}
              className={style.burger_btn}>
              {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
            </div>
        </div>
      </div>
    </header>
  )
}


