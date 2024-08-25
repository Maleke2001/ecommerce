import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Hero = ({ searchTerm, setSearchTerm, movies = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (movies.length > 0) { // Ensure movies is defined and has length
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % movies.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [movies]);

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  
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
};

export default Hero;
