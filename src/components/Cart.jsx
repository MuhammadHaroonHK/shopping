import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <div>
            <button onClick={() => dispatch(decrement(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increment(item.id))}>+</button>
          </div>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button>Checkout (Coming Soon)</button>
      <Link to="/products">Continue Shopping</Link>
    </div>
  );
};

export default Cart;
