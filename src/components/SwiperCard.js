import React, { useRef, useState } from "react";
// import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperCard.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="./images/expert.png" alt="image" />
                </div>
                <span>Name</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="./images/expert.png" alt="image" />
                </div>
                <span>Name</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="./images/expert.png" alt="image" />
                </div>
                <span>Name</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperCard;
