import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="body_wrapper">
            <a href="#">
              <img src="/a1.png" alt="" />
              <p>покупка</p>
            </a>
            <a href="#">
              <img src="/a2.png" alt="" />
              <p>доставка</p>
            </a>
            <a href="#">
              <img src="/a3.png" alt="" />
              <p>pre-loved</p>
            </a>
            <a href="#">
              <img src="/a1.png" alt="" />
              <p>custom</p>
            </a>
            <a href="#">
              <img src="/a2.png" alt="" />
              <p>custom</p>
            </a>
            <a href="#">
              <img src="/a3.png" alt="" />
              <p>pre-loved</p>
            </a>
          </div>
        </div>
      </div>

      <div className="part1">
        <div className="container">
          <div className="part1_wrapper">
            <ul>
              <h1>Cамое популярное сейчас </h1>
              <button className="btn1">Перейти</button>
            </ul>

            <div className="cards">
              <div className="card">
                <ul>
                  <p>hot</p>
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
                  <p>hot</p>
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
                  <p>hot</p>
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
                  <p>hot</p>
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
            </div>
          </div>


          <div className="part2_wrapper">
            <ul>
              <h1>Новинки</h1>
              <button className="btn1">Перейти</button>
            </ul>

            <div className="cards">
              <div className="card">
                <ul>
                  <p className="p1">pre-loved</p>
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
                  <p className="p2">NEW</p>
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
                  <p className="p3">-40%</p>
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
                  <p className="p4">hot</p>
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

export default Body;
