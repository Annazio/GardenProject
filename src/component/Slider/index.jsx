import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slice/categoriesSlice';
import {Swiper, SwiperSlide} from "swiper/react";
import style from "./style.module.css"
import { Pagination } from 'swiper/modules';
import ButtonUI from '../../UI/ButtonUI'

import 'swiper/css';
import 'swiper/css/pagination';

export default function CategoriesList({id}) {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchCategories(id));
    }, [id, dispatch])

    const {status, list} = useSelector(({categories}) => categories)


  return (
    <div className='container'>
      <section id="slider_section">
    <div className={style.section_title}>
      <h3>Catalog</h3>
      <ButtonUI text="Catalog"/>
    </div>

    
    {
        status === 'ready'
        ?
         
        <div className={style.swiper_container}>
          <Swiper className="mySwiper"
            slidesPerView={4}
            spaceBetween={20}
            freeMode={true}     
            pagination={{ clickable: true }}
            modules={[Pagination]}
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
    </section>
    </div>
    
  )
}