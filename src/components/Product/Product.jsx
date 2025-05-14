import React, { useEffect, useState } from 'react';
import './Product.css'; // Импортируем стили

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Замените на путь к вашему файлу db.json или API-запрос
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/posts'); // Ваш локальный сервер json-server
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.
            price}</p>
            <p className="product-color">Цвет: {product.color}</p>
            <p className="product-brand">Бренд: {product.brand}</p>
            <p className="product-category">Категория: {product.category}</p>
            <p className="product-status">{product.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
