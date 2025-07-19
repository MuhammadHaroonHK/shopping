import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdHome, MdLocalFlorist, MdShoppingCart } from 'react-icons/md'; // Importing icons

const Header = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header className="bg-green-700 p-4 shadow-md flex justify-between items-center flex-wrap">
      <h1 className="text-white text-3xl font-bold mb-2 md:mb-0">Greenhouse Store</h1>
      <nav className="flex space-x-4 text-lg items-center"> {/* Added items-center here */}
        <Link to="/" className="text-white hover:text-green-200 transition-colors duration-200 flex items-center space-x-1">
          <MdHome className="text-xl" /> <span className='font-bold'>Home</span>
        </Link>
        <Link to="/products" className="text-white hover:text-green-200 transition-colors duration-200 flex items-center space-x-1">
          <MdLocalFlorist className="text-xl" /> <span className='font-bold'>Products</span>
        </Link>
        <Link to="/cart" className="text-white hover:text-green-200 transition-colors duration-200 flex items-center space-x-1">
          <MdShoppingCart className="text-xl" /> <span className='font-bold'>Cart (<span className="font-semibold">{totalItems}</span>)</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;