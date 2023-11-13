import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slice/categoriesSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./style.module.css"
import { Pagination } from 'swiper/modules';
import ButtonUI from '../../UI/ButtonUI'

import 'swiper/css';
import 'swiper/css/pagination';
import { Link, useNavigate } from 'react-router-dom';
import CategoryItem from '../CategoryItem';

export default function Slider() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])

  const { status, list } = useSelector(({ categories }) => categories)


  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/categories');
  // }


  return (
    <div className='container'>
      <section id="slider_section">
        <div className={style.section_title}>
          <h1>Catalog</h1>
          <Link className={style.all_categories_link} to="/categories">
             <p className={style.categories_title}>All Categories</p>
          </Link>
          {/* <ButtonUI text="All Categories" onClick={handleClick} /> */}
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
                    <CategoryItem {...category} />
                    {/* <Link to={`/categories/${category.id}`}>

                      <div className={style.category_container}>
                        <div className={style.image_container}>
                          <img className={style.category_image} src={"http://localhost:3333" + category.image} alt={category.title} />
                        </div>
                        <h3>{category.title}</h3>
                      </div>
                    </Link> */}
                  </SwiperSlide>
                  )
                }
              </Swiper>
            </div>

            : status === 'error'
              ? <h2>Loading error</h2>

              : status === 'loading'
                ? <h2>Loading</h2>
                : ''
        }
      </section>
    </div>

  )
}
