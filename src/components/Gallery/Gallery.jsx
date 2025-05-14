import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="container">
          <div className="gallery__wrapper">
            <div className="foto">
              <img src="./foto1.png" alt="" />
              <h1>одежда</h1>
            </div>
            <div className="foto">
              <img src="./foto2.png" alt="" />
              <h1>обувь</h1>
            </div>
            <div className="foto-3">
              <div className="fot">
                <img src="./foto3.png" alt="" />
                <h1 className="h11">аксессуары</h1>
              </div>
              <div className="fot">
                <img src="./foto4.png" alt="" />
                <h1 className="h12">сумки</h1>
              </div>
              <div className="fot">
                <img src="./foto5.png" alt="" />
                <h1 className="h13">для спорта</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sh">
        <div className="container">
          <div className="sh_wrapper">
            <ul>
              <h1>Для вечерних прогулок</h1>
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
    </>
  );
};

export default Gallery;