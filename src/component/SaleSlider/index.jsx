import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./style.module.css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { fetchProducts } from "../../store/slice/productSlice";
import ProductItem from "../ProductItem";
import 'swiper/css/navigation'

export default function SaleSlider() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { status, list } = useSelector(({ products }) => products);

  const saleArr = list.filter((item) => item.discont_price);

  return (
    <div className="container">
      <section id="sale_slider_section">
          <h1 className={style.section_title}>Sale</h1>

        {status === "ready" ? (
          <div className={style.swiper_container}>
            <Swiper
              className="mySwiper"
              // slidesPerView={4}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2500,
                stopOnLastSlide: false,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                401: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1100: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {saleArr.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductItem {...product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : status === "error" ? (
          <h2>Loading error</h2>
        ) : status === "loading" ? (
          <h2>Loading</h2>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}
