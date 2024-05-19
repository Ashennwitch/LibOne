import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">
            Book List
          </Link>
        </li>
        <li>
          <Link to="/add" className="text-white hover:text-gray-300">
            Add Book
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;