import React from 'react'
import ProductList from '../../component/ProductList'
import style from "./style.module.css"

export default function ProductListPage() {
  return (
    <div className="container">
         <h1 className={style.title}>All Products</h1>
         <ProductList/>
    </div>
  )
}
