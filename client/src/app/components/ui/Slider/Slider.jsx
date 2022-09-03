import React from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = ({ images }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation
      slidesPerView={1}
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      {images.map((i) => (
        <SwiperSlide key={i}>
          <img src={i} alt="sneakers" className={styles.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
