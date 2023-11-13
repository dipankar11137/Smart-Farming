import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './BannerStyle.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1092520698/photo/indian-farmer-at-onion-field.jpg?b=1&s=170667a&w=0&k=20&c=pGCpSylCt1jR82BrJxM-9aEwklSsVzK2MvXNfCic1EA="
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.bhmpics.com/downloads/wallpaper-of-indian-farmers/7.indian-farmer-spreading-fertilizer-in-the-green-banana-field.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/indian-happy-farmer-holding-empty-bottle-hands-happy-farmer-showing-white-bottle_898049-825.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/538889138/photo/african-woman-laughing.jpg?s=612x612&w=0&k=20&c=OJTMbnqP8x9v-Ly2KyXD_MGWMoEbJDcdcTX0Lc2dock="
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.farmafrica.org/images/news/2020/sunflower-image---flourishing-futures.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/a7/e4/df/a7e4df2c36e2fe72ac398dd630499526.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Farmer_of_Bangladesh.jpg/1200px-Farmer_of_Bangladesh.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://t3.ftcdn.net/jpg/03/88/54/50/360_F_388545000_s4RsrD79y9GA04jkCsM8SX3wOaO9nSOW.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.prothomalo.com/prothomalo-bangla%2F2023-08%2F2e97b3ea-f08f-4639-a88a-991bd1b0fc73%2F369894884_866212111769494_8237642227056904097_n.jpg?auto=format&q=35&w=1200&rect=0,422,1080,608"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
