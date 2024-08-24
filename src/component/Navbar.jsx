import { FaSearch,FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
      <div className='fixed top-0 w-full z-50 flex items-center justify-between p-4 bg-gray-800 text-white'>
       <Link to ="/">
              <h1 className='text-3xl font-bold'>MOVIES</h1>
       </Link>
          
     
  
        <nav>
          <ul className='flex mr-44 space-x-4'>
          <Link to="movies">
             <li className='cursor-pointer text-2xl hover:text-gray-400'>Movies</li>
          </Link>
           <Link to="tvshow">
             <li className='cursor-pointer text-2xl hover:text-gray-400'>TV Show</li>
           </Link>
            <div className='flex'>
            <li className='cursor-pointer text-2xl hover:text-gray-400'>Genres</li>
            <FaCaretDown className="ml-2 mt-3" />
            </div>
          </ul>
        </nav>
   
  
        <div className="relative w-96 max-w-screen-lg">
        <input
          type="text"
          placeholder="Type what you want"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
      </div>
      </div>
    );
  }
  
  export default Navbar;
  