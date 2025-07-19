import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import image1 from '../assets/img1.avif'
import image2 from '../assets/img2.avif'
import image3 from '../assets/img3.avif'
import image4 from '../assets/img4.avif'
import image5 from '../assets/img5.avif'
import image6 from '../assets/img6.avif'


const ProductList = () => {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: 'Aloe Vera', img:image1, price: 10, category: 'Succulents', thumbnail: '/aloe.jpg' },
    { id: 2, name: 'Snake Plant', img:image2, price: 15, category: 'Succulents', thumbnail: '/snake.jpg' },
    { id: 3, name: 'Fern', img:image3, price: 12, category: 'Ferns', thumbnail: '/fern.jpg' },
    { id: 4, name: 'Peace Lily', img:image4, price: 18, category: 'Flowering', thumbnail: '/lily.jpg' },
    { id: 5, name: 'Cactus', img:image5, price: 20, category: 'Succulents', thumbnail: '/cactus.jpg' },
    { id: 6, name: 'Orchid', img:image6, price: 25, category: 'Flowering', thumbnail: '/orchid.jpg' },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8"> {/* Container for responsiveness and centering */}
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Our Products</h2> {/* Added a title */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Responsive grid */}
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"> {/* Product Card Styling */}
            <img src={product.img} alt={product.name} className="w-full h-48 object-contain bg-gray-100" /> {/* Image Styling */}
            <div className="p-4"> {/* Content Padding */}
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h3> {/* Product Name */}
              <p className="text-green-600 font-bold text-lg mb-3">${product.price.toFixed(2)}</p> {/* Price Formatting */}
              <button
                onClick={() => dispatch(addToCart(product))}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;