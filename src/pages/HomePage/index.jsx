import React from 'react'
import Sale from '../../component/Sale'
import Discount from '../../component/Discount'
import CategoriesList from '../../component/CategoriesList'

export default function HomePage() {
  return (
    <div>
        <Sale/>
        <Discount/>
        <CategoriesList/>
    </div>
  )
}
