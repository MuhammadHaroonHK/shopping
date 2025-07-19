import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://perenual.com/api/v2/species-list?key=sk-Jp0S687b746f8a2c311476`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((i) => i.id === product.id);
    if (existingItem) {
      toast.info("Product already in cart");
    } else {
      dispatch(addToCart(product));
      toast.success("Product added to cart");
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.length > 0 ? (
          data.map((plant) => (
            <div key={plant.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={plant.default_image?.medium_url || 'https://via.placeholder.com/150'}
                alt={plant.common_name || 'Unknown Plant'}
                className="w-full h-48 object-contain bg-gray-100"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{plant.common_name || 'Unnamed Plant'}</h3>
                <p className="text-green-600 font-bold text-lg mb-3">${(Math.random() * 20 + 5).toFixed(2)}</p>
                <button
                  onClick={() =>
                    handleAddToCart({
                      id: plant.id,
                      name: plant.common_name || 'Unnamed Plant',
                      img: plant.default_image?.medium_url || 'https://via.placeholder.com/150',
                      price: parseFloat((Math.random() * 20 + 5).toFixed(2)),
                      category: plant.genus || 'General',
                    })
                  }
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
