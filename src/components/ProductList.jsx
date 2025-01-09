import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulents', thumbnail: '/aloe.jpg' },
    { id: 2, name: 'Snake Plant', price: 15, category: 'Succulents', thumbnail: '/snake.jpg' },
    { id: 3, name: 'Fern', price: 12, category: 'Ferns', thumbnail: '/fern.jpg' },
    { id: 4, name: 'Peace Lily', price: 18, category: 'Flowering', thumbnail: '/lily.jpg' },
    { id: 5, name: 'Cactus', price: 20, category: 'Succulents', thumbnail: '/cactus.jpg' },
    { id: 6, name: 'Orchid', price: 25, category: 'Flowering', thumbnail: '/orchid.jpg' },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.thumbnail} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
