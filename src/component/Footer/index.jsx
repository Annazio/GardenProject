import React from 'react'
import style from "./style.module.css"
import {icons} from "../../data/icons"
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className={style.footer}>
        <div className="container">
          <div className={style.contacts}>
             
              <div className={style.contacts_wrapper}>
                <h2 className={style.title}>Contact</h2>
                <p className={style.phone}>+49 999 999 99 99</p>
                
                <ul className={style.social_icons}> 
                        {icons.map((el) => (<li className={style.icon} key={el.id}>
                          <Link to="#">
                          {el.icon}
                          {el.name}
                          </Link>
                          </li>))}
                    </ul>
              </div>

              <div className={style.address_wrapper}>
                <h2 className={style.title}>Address</h2>
                <div className={style.coordination_wrapper}>
                  <Link>
                      <p className={style.address}>Linkstraße 2, 8 OG, 10785,</p>
                      <span className={style.address}>Berlin, Deutschland</span>
                  </Link>
                </div>
                <p className={style.working_hours}>Working hours:</p>
                <p className={style.time}>24 hours a day</p>
              </div>

          </div>

          <div className={style.map_wrapper}>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4102804173835!2d13.372521312304544!3d52.507913737007804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2sLinkstra%C3%9Fe%202%2F8.%20Etage%2C%2010785%20Berlin!5e0!3m2!1sde!2sde!4v1697622009373!5m2!1sde!2sde" 
                  className={style.map}
                  title="Garden Shop Address"
               ></iframe>
          </div>

        </div>
    </footer>
  )
}

