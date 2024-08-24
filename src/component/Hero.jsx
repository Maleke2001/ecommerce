import  { useState, useEffect } from 'react';
import Navbar from './Navbar';


const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % movies.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <div>
      <Navbar/>
  
    <div className="relative overflow-hidden w-full h-[600px] bg-gray-800">
      <div
      
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-full flex-shrink-0 h-full"
          >
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title || 'Movie Poster'} 
              className="w-full h-full object-cover rounded-lg"

            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Hero;
