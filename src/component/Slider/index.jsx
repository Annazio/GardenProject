import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slice/categoriesSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./style.module.css"
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import CategoryItem from '../CategoryItem';

export default function Slider() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])

  const { status, list } = useSelector(({ categories }) => categories)


  return (
    <div className='container'>
      <section id="slider_section">
        <div className={style.section_title}>
          <h1>Catalog</h1>
          <Link className={style.all_categories_link} to="/categories">
             <p className={style.categories_title}>All Categories</p>
          </Link>
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
                breakpoints={{
                  401: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  // 1024: {
                  //   slidesPerView: 5,
                  //   spaceBetween: 50,
                  // },
                }}
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
