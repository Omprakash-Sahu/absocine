import { useState, useEffect } from 'react';
import MovieSection from './components/MovieSection';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY


function App() {

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loadingTrendingMovies, setLoadingTrendingMovies] = useState(true);
  const [loadingPopularMovies, setLoadingPopularMovies] = useState(true);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
        if (!response.ok) {
          throw new Error("Failed to fetch trending movies.");
        }
        const data = await response.json();
        setTrendingMovies(data.results);
        setLoadingTrendingMovies(false);
      } catch (error) {
        console.log(error);
        setLoadingTrendingMovies(false);
      }
    }

    fetchTrendingMovies();
  }, [])

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) {
          throw new Error("Failed to fetch popular movies.");
        }
        const data = await response.json();
        setPopularMovies(data.results);
        setLoadingPopularMovies(false);        
      } catch (error) {
        console.log(error);
        setLoadingPopularMovies(false);
      }
    }

    fetchPopularMovies();
  }, [])

  console.log(trendingMovies)
  console.log(popularMovies)
  if (loadingTrendingMovies || loadingPopularMovies) return <div>Loading...</div>;
  
  return (
    <>
      <MovieSection title="Trending" moviesList={trendingMovies}/>
      <MovieSection title="Popular" moviesList={popularMovies} />
    </>
  )

}

export default App;

