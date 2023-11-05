import React from 'react'
import Sale from '../../component/Sale'
import Discount from '../../component/Discount'
import Slider from '../../component/Slider'
import SaleSlider from '../../component/SaleSlider'

export default function HomePage() {
  return (
    <div>
        <Sale/>
        <Slider/>
        <Discount/>
        <SaleSlider/>
    </div>
  )
}
