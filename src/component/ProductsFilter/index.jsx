import React, { useEffect, useState } from 'react'
import InputUI from '../../UI/InputUI'
// import { priceFilter } from '../../store/slice/productSlice'
import { useDispatch } from 'react-redux'
import style from "./style.module.css"

export default function ProductsFilter({ priceFilter }) {

  const [price, setPrice] = useState({ min: 0, max: Infinity })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(priceFilter(price));
  }, [price, dispatch, priceFilter])


  const priceHandler = {
    min: value => + value,
    max: value => value === '' ? Infinity : +value
  }

  const changePrice = ({ target }) => {
    const { name, value } = target
    setPrice(state => ({ ...state, [name]: priceHandler[name](value) }))
  }

  return (
    <div className={style.input_wrapper}>
      <div>
        <label>
          Price:
          <InputUI
            placeholder="from"
            type="number"
            name='min'
            value={price.min === 0 ? '' : price.min}
            onChange={changePrice}
          />


          <InputUI
            placeholder="to"
            type="number"
            name='max'
            value={price.max === Infinity ? '' : price.max}
            onChange={changePrice}
          />

        </label>
      </div>

      <div>
        <label>
            Discounted items
            <InputUI
            type="checkbox"
            name='discounted'

            />
        </label>
      </div>
    
      <div>
         <label>
          Sorted
          <InputUI/>
         </label>
      </div>
    </div>
  )
}
