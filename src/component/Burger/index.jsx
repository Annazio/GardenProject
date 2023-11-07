// import React from 'react'
// import style from './style.module.css'

// export default function Burger() {
//   return (
//     <div className={style.burger}>
//         <span></span>
//         <span></span>
//         <span></span>
//     </div>
//   )
// }
import React from 'react';
import style from './style.module.css';

export default function Burger({ open, onClick }) {
  return (
    <div className={style.burger} onClick={onClick}>
      <div className={`${style.bar} ${open ? style.open : ''}`} />
      <div className={`${style.bar} ${open ? style.open : ''}`} />
      <div className={`${style.bar} ${open ? style.open : ''}`} />
    </div>
  );
}