import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Slider = ({ images }) => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="lg:w-1/2 rounded"
    >
      {images.map((i) => (
        <SwiperSlide key={i}>
          <img
            src={i}
            alt="sneakers"
            className="w-full lg:h-auto h-64 object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
