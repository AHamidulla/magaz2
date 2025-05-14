import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="foot1">
              <ul className="u1">
                <li>
                  <img src="./g10.png" alt="" />
                </li>
                <li>
                  Ваш поставщик в мир лимитированного <br /> ассортимента с
                  доставкой по всему <br /> миру
                </li>
                <li className="imgli">
                  <img src="./f11.png" alt="" />
                  <img src="./f12.png" alt="" />
                </li>
              </ul>
              <ul className="u2">
                <li className="mainli">Каталог</li>
                <li>Одежда</li>
                <li>Обувь</li>
                <li>Аксессуары</li>
                <li>Сумки</li>
                <li>Товары для спорта</li>
                <li>Pre-loved</li>
                <li>Custom</li>
              </ul>
              <ul className="u3">
                <li className="mainli">Меню</li>
                <li>О нас</li>
                <li>Продать свою одежду</li>
                <li>Консьерж</li>
                <li>Клиентский сервис</li>
              </ul>
              <ul className="u4">
                <li className="mainli">Поддержка</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Частые вопросы</li>
                <li>Клиентский сервис</li>
                <li>Отследить заказ</li>
              </ul>
            </div>
            <div className="foot2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
