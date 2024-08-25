import React, { useState, useEffect, useRef } from 'react';
import Hero from '../component/Hero';
import Pagination from '../component/Pagination'; // Ensure Pagination component is correctly imported

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const imgRefs = useRef([]);

  const getMovies = async (page = 1) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=926f95050d982f9d9ad3103b9c1c0fb4&page=${page}&language=en-US`);
      const json = await response.json();
      setMovies(json.results);
      setTotalPages(json.total_pages);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0.1,
      }
    );

    imgRefs.current.forEach(img => {
      if (img) {
        observer.observe(img);
      }
    });

    return () => {
      imgRefs.current.forEach(img => {
        if (img) {
          observer.unobserve(img);
        }
      });
    };
  }, [movies]);

  return (
    <div>
      <Hero movies={movies} />

      <div className="bg-[#2c3e50] min-h-screen flex flex-col items-center p-4">
        <h1 className="mt-4 text-5xl mr-[780px] text-white">Movies</h1>
        
        <div className="grid grid-cols-4 gap-[45px] mt-[35px]">
          {movies.slice(0, 8).map((data, index) => (
            <div key={data.id} className="flex flex-col items-center">
              <img
                ref={el => (imgRefs.current[index] = el)}
                data-src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title || 'Movie Poster'}
                className="w-[200px] h-[320px] object-cover rounded-md"
              />
              <p className="mt-2 text-center text-white font-semibold max-w-[200px] truncate">
                {data.title}
              </p>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Movies;
