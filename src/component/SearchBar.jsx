
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ placeholder = "Type what you want", onChange, value }) => {
  return (
    <div className="relative w-96 max-w-screen-lg">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={onChange}
        value={value}
      />
      <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default SearchBar;
