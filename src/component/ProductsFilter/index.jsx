import React, { useEffect, useState } from 'react'
import InputUI from '../../UI/InputUI'
// import { priceFilter} from '../../store/slice/productSlice'
import { useDispatch } from 'react-redux'
import style from "./style.module.css"
import { useLocation } from 'react-router-dom'
// import { discountHandler } from '../../store/slice/productSlice'

export default function ProductsFilter({ priceFilter, sort, discountHandler }) {

  const location = useLocation()
  const isOnSalePage = location.pathname === '/products/sale'


  const [price, setPrice] = useState({ min: 0, max: Infinity })
  const dispatch = useDispatch();
  
   const [checked, setChecked] = useState(false)


  useEffect(() => {
    dispatch(priceFilter(price));
    dispatch(discountHandler(checked))
  }, [price, dispatch, priceFilter, checked, discountHandler ])


  const priceHandler = {
    min: value => + value,
    max: value => value === '' ? Infinity : +value
  }

  const changePrice = ({ target }) => {
    const { name, value } = target
    setPrice(state => ({ ...state, [name]: priceHandler[name](value) }))
  }


   const changeCheckbox = ({target}) => {
    const value = target.checked
    setChecked(value)
  }
    



  const selectOptions = [
    {id:1, title: 'by title: from A to Z', value: 1},
    {id:2, title: 'by title: from Z to A', value: 2},
    {id:3, title: 'by price ascending', value: 3},
    {id:4, title: 'by price descending', value: 4},
  ]

  const selectHandler = (event) => {
    dispatch(sort(+event.target.value));
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
      {!isOnSalePage &&<label>
            Discounted items
            <InputUI
            type="checkbox"
            name='discounted'
            value={checked}
            onChange={changeCheckbox}
            />
        </label>}
        
      </div>
    
      <div>
        <span>Sorted</span>
         <select onChange={selectHandler}>
          {/* <option selected disabled>By default</option> */}
          <option defaultValue="">By default</option>
          {
            selectOptions.map(elem => (
              <option key={elem.id}  value={elem.value}>
                {elem.title}
              </option>
            ))
          }
         </select>
      </div>
    </div>
  )
}
