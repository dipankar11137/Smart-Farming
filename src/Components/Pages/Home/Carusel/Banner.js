import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Weather from '../Weather/Weather';

const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Pagination, Navigation]}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://diplomatist.com/wp-content/uploads/2020/04/Precision-Farming_footer_07.15.19-1-scaled.jpg"
            alt=""
          />
          <div className="absolute top-0 right-0">
            <Weather />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.analyticsinsight.net/wp-content/uploads/2021/05/Agriculture-Robots.jpg"
            alt=""
          />
          <div className="absolute top-0 right-0">
            <Weather />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.zenadrone.com/wp-content/uploads/2022/10/ZenaDrone-1000-in-Smart-Farming-1-1.jpg"
            alt=""
          />
          <div className="absolute top-0 right-0">
            <Weather />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;