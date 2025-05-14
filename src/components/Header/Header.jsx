import React from "react";
import "./Header.css";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="top">
              <img src="./str.png" alt="" />
              <h1>Гарантия лучшей цены</h1>
              <img src="./str.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="swipre">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./f1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./f1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./f1.png" alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="container">
          <div className="swipre__wrapper">

              <div className="menu">
                <ul className="ul111">
                  <li>Одежда</li>
                  <li>Обувь</li>
                  <li>Аксессуары</li>
                  <li>Сумки</li>
                  <li>Товары для спорта</li>
                </ul>

                <img className="imm" src="./icon.png" alt="" />

                <ul className="ul222">
                  <li>
                    <img src="./c1.png" alt="" />
                  </li>
                  <li>
                    <img src="./c2.png" alt="" />
                  </li>
                  <li>
                    <img src="./c3.png" alt="" />
                  </li>
                </ul>
              </div>

              <div className="swiper-content">
              <h1>
                распродажа <br />
                товаров для неё
              </h1>
              <button>Перейти в каталог</button>



              </div>
        
          </div>
        </div>
      </div>
    </>
  );
};



export default Header;
