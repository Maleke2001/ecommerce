import { useState, useEffect } from 'react';

import Hero from '../component/Hero';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=926f95050d982f9d9ad3103b9c1c0fb4");
      const json = await response.json();
      setMovies(json.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (

    <div>
    <Hero/>
  
    <div className="bg-[#2c3e50] min-h-screen flex flex-col items-center p-4">

     <h1 className="mt-4 text-5xl mr-[780px] text-white">Top Movies</h1>
      <div className="grid grid-cols-4 gap-[45px] mt-[35px]">
        {movies.slice(0, 4).map((data) => (
          <div key={data.id} className="flex flex-col items-center">
            <img 
              className="w-[200px] h-[320px] object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} 
              alt={data.title || 'Movie Poster'} 
            />
            <p className="mt-2 text-center text-white font-semibold max-w-[200px] truncate">
              {data.title}
            </p>
          </div>
        ))}
      </div>




      <h1 className="mt-16 text-5xl mr-[780px] text-white">TV Show</h1>
      <div className="grid grid-cols-4 gap-[45px] mt-[35px]">
        {movies.slice(0, 4).map((data) => (
          <div key={data.id} className="flex flex-col items-center">
            <img 
              className="w-[200px] h-[320px] object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} 
              alt={data.title || 'Movie Poster'} 
            />
            <p className="mt-2 text-center text-white font-semibold max-w-[200px] truncate">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;
