import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemove = (id, name) => {
    dispatch(removeItem(id));
    toast.error(`${name} removed from cart`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 text-xl">
          <p className="mb-4">Your cart is empty. Start adding some lovely plants! 🌱</p>
          <Link to="/products" className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-colors duration-200 inline-block">
            Go to Products
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-6 mb-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-md p-4 space-y-4 sm:space-y-0 sm:space-x-4">
                <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-green-600 font-bold text-lg">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(decrement(item.id))}
                    className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increment(item.id))}
                    className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item.id, item.name)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-200 self-center sm:self-auto"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="text-right text-2xl font-bold text-gray-800 mb-6 border-t pt-4">
            <h3>Total: <span className="text-green-700">${totalPrice.toFixed(2)}</span></h3>
          </div>

          <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-md">
              Checkout (Coming Soon)
            </button>
            <Link to="/products" className="bg-gray-300 text-gray-800 py-3 px-8 rounded-md hover:bg-gray-400 transition-colors duration-200 font-semibold text-center">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
