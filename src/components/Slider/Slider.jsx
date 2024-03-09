import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { SliderProducts } from '../../data/products';
import './Slider.css'

const Slider = () => {
 return (
    <div className="s-container">
      <Swiper
      breakpoints ={{
        640: {
          slidesPerView: 3
        },
        0: {
          slidesPerView: 1
        }
      }}
        modules={[Pagination, Navigation]}
        className='myswiper'
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        navigation={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className='left-s'>
              <div className='name'>
                <span style={{ fontWeight: 'bold', color: 'white'}}>{slide.name}</span>
                <span style={{ fontWeight: 'bold', color: 'black'}}>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop Now</div>
            </div>
            <img src={slide.img} alt='product' className='img-product'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
 );
};

export default Slider;
