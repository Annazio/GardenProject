import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Swiper, SwiperSlide} from "swiper/react";
import style from "./style.module.css"
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { fetchProducts } from '../../store/slice/productSlice';
import ProductItem from '../ProductItem';

export default function SaleSlider() {
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchProducts());
    }, [dispatch])

    const {status, list} = useSelector(({products}) => products)

    const saleArr = list.filter(item=> item.discont_price)

  
  return (
    <div className='container'>
      <section id="sale_slider_section">
    <div className={style.section_title}>
      <h3>Sale</h3>
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
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
          
            {
              saleArr.map(product => <SwiperSlide key={product.id} > 
              <ProductItem {...product} />
                {/* <Link to={`/products/${product.id}`}>
                <div className={style.product_container}>
                  <div className={style.image_container}>
                   <img className={style.product_image} src={"http://localhost:3333" + product.image} alt={product.title} /> 
                  </div>
                  <div className={style.price_container}>
                      <p>{product.price}</p>
                      <p>{product.discont_price}</p>
                      <p>{discount}</p>
                  </div>
                   <h3>{product.title}</h3>   
                </div>
            </Link> */}
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
