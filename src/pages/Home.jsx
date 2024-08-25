import { useState, useEffect } from 'react';
import Hero from '../component/Hero';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=926f95050d982f9d9ad3103b9c1c0fb4");
      const json = await response.json();
      setMovies(json.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const getTvShows = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=926f95050d982f9d9ad3103b9c1c0fb4");
      const json = await response.json();
      setTvShows(json.results);
    } catch (error) {
      console.error('Error fetching TV shows:', error);
    }
  };

  useEffect(() => {
    getMovies();
    getTvShows();
  }, []);

  // Filter movies and TV shows based on search term
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTvShows = tvShows.filter(tvShow =>
    tvShow.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} movies={filteredMovies} />

      <div className="bg-[#2c3e50] min-h-screen flex flex-col items-center p-4">
        <h1 className="mt-4 text-5xl mr-[780px] text-white">Top Movies</h1>
        <div className="grid grid-cols-4 gap-[45px] mt-[35px]">
          {filteredMovies.slice(0, 4).map((data) => (
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

        <h1 className="mt-16 text-5xl mr-[780px] text-white">TV Shows</h1>
        <div className="grid grid-cols-4 gap-[45px] mt-[35px]">
          {filteredTvShows.slice(0, 4).map((data) => (
            <div key={data.id} className="flex flex-col items-center">
              <img 
                className="w-[200px] h-[320px] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} 
                alt={data.name || 'TV Show Poster'} 
              />
              <p className="mt-2 text-center text-white font-semibold max-w-[200px] truncate">
                {data.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
