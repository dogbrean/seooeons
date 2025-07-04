"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function MySwiper() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/profile_2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/profile_3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/profile_4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/profile_5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/profile_6.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
