import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='fixed top-0 w-full z-50 flex items-center justify-between p-4 bg-gray-800 text-white'>
      <Link to="/">
        <h1 className='text-3xl font-bold'>MOVIES</h1>
      </Link>
      
      <nav>
        <ul className='flex mr-44 space-x-4'>
          <Link to="/movies" className='cursor-pointer text-2xl hover:text-gray-400'>
            <li className='cursor-pointer text-2xl hover:text-gray-400'>Movies</li>
          </Link>
          <Link to="/tvshow">
            <li className='cursor-pointer text-2xl hover:text-gray-400'>TV Show</li>
          </Link>
          <div className='flex'>
            <li className='cursor-pointer text-2xl hover:text-gray-400'>Genres</li>
            <FaCaretDown className="ml-2 mt-3" />
          </div>
        </ul>
      </nav>
  
      <SearchBar 
        placeholder='Search movies...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
