import React from "react";
import "./Esp.css";

const Esp = () => {
  return (
    <>
      <div className="esp">
        <div className="container">
          <div className="esp__wrapper">
            <h1 className="esp-h1">Особенные категории</h1>
            <div className="esp_con">
              <div className="esp1">
                <p>
                  закастомизируем ваш <br /> гардероб
                </p>
                <h1>dealer.custom</h1>
                <a href="#">смотреть</a>
              </div>
              <div className="esp2">
                <p>
                  для тех, кто ценит <br /> осознанное потребление
                </p>
                <h1>pre-loved by dealer</h1>
                <a href="#">смотреть</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="sh">
        <div className="container">
          <div className="sh_wrapper">
            <ul>
              <h1>В наличии</h1>
              <button className="btn1">Перейти</button>
            </ul>

            <div className="cards">
              <div className="card">
                <ul>
                  <p className="p11">pre-loved</p>
                  <img src="./srar.png" alt="" />
                </ul>
                <img className="main_img" src="./sh3.png" alt="" />
                <div className="content">
                  <p>
                    Сумка <b>Jacquemus</b> <br />
                    Le Bambidou
                  </p>
                  <h1>21 999₽</h1>
                </div>
              </div>
              <div className="card">
                <ul>
                  <p className="p21">NEW</p>
                  <img src="./srar.png" alt="" />
                </ul>
                <img className="main_img" src="./sh2.png" alt="" />
                <div className="content">
                  <p>
                    Сумка <b>Jacquemus</b> <br />
                    Le Bambidou
                  </p>
                  <h1>21 999₽</h1>
                </div>
              </div>
              <div className="card">
                <ul>
                  <p className="p31">-40%</p>
                  <img src="./srar.png" alt="" />
                </ul>
                <img className="main_img" src="./sh1.png" alt="" />
                <div className="content">
                  <p>
                    Сумка <b>Jacquemus</b> <br />
                    Le Bambidou
                  </p>
                  <h1>21 999₽</h1>
                </div>
              </div>
              <div className="card">
                <ul>
                  <p className="p41">hot</p>
                  <img src="./srar.png" alt="" />
                </ul>
                <img className="main_img" src="./sh4.png" alt="" />
                <div className="content">
                  <p>
                    Сумка <b>Jacquemus</b> <br />
                    Le Bambidou
                  </p>
                  <h1>21 999₽</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="rec">
        <div className="container">
            <div className="rec__wrapper">
                <div className="rec1">
                    <h1>Продай свою пару <br />
                    вместе с нами</h1>
                    <p>Реализуем позиции, которые потеряли <br /> актуальность в вашем гардеробе</p>
                    <button>В каталог</button>
                </div>

                <div className="rec2">
                    <h1>Скидка 7%</h1>
                    <p>Получите скидку 7% на первую покупку при подписке <br /> на наши эксклюзивные акции, обновления и новости</p>
                    <button>Подписаться</button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Esp;
