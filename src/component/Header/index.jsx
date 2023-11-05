import React from 'react'
import Nav from '../Nav'
import Logo from "../../assets/images/Logo.png"
import shopping_bag from "../../assets/icons/shopping_bag.svg"
import style from "./style.module.css"
import ButtonUI from '../../UI/ButtonUI'
import { Link, useNavigate } from 'react-router-dom';
import Burger from '../Burger'
// import { HashLink } from 'react-router-hash-link'


export default function Header() {

  
  const navigate = useNavigate();


  const handleClick = () =>{
  navigate('/');
  }

  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.wrapper}>

            <div className={style.left_part}>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
             {/* <HashLink to="#slider_section" smooth={true} duration={500}> */}
               <a href='#slider_section'>
               <ButtonUI text="Catalog" content="header_btn" onClick={handleClick} />
               </a>
              {/* </HashLink> */}
            </div>
          
            <div className={style.right_part}>
                <Nav/>
                <Link className={style.bag_link} to="/shoppingcard">
                    <img src={shopping_bag} alt="Shopping Bag" />
                </Link>
            </div>
            
           

        </div>
        <Burger/>
      </div>
    </header>
  )
}


  // "react-router-hash-link": "^2.4.3",