import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { SliderProducts } from '../../data/products';
import './Slider.css';

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }}
        modules={[Pagination, Navigation]}
        className='myswiper'
        loop
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className='slide-content'>
              <img src={slide.img} alt='product' className='img-product'/>
              <div className='info'>
                <p className='name'>{slide.name}</p>
                <p className='detail'>{slide.detail}</p>
                <span className='price'>{slide.price}$</span>
                <br/>
                <button className='shop-now'>Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
