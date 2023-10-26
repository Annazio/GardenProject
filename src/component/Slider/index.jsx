import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slice/categoriesSlice';
import {Swiper,SwiperSlide} from "swiper/react";
import style from "./style.module.css"

export default function CategoriesList({id}) {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchCategories(id));
    }, [id])

    const {status, list} = useSelector(({categories}) => categories)

    
  return (
    <div className='container'>
    {
        status === 'ready'
        ?
         
        <div>
          <Swiper className={style.slider_wrapper}
            slidesPerView={4}
            spaceBetween={20}
            freeMode={true}     
            navigation
            pagination={{ clickable: true }}
          >
            {
              list.map(category => <SwiperSlide key={category.id}>
                <div className={style.category_container}>
                  <div className={style.image_container}>
                   <img className={style.category_image} src={"http://localhost:3333" + category.image} alt={category.title} /> 
                  </div>
                   <h3>{category.title}</h3>   
                </div>
              </SwiperSlide> 
              )
            }
            </Swiper>
        </div>

        : status === 'error'
        ? <h2>Loading error</h2>

        :status === 'loading'
        ? <h2>Loading</h2>
        : ''
    }
    </div>
  )
}

