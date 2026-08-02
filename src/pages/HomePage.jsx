import BannerContainer from '../components/BannerContainer';
import MovieSection from '../components/MovieSection';
import useFetchMovies from '../hooks/useFetchMovies';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const trendingUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

function HomePage() {

  const { moviesList:trendingMovies, loading:loadingTrendingMovies } = useFetchMovies(trendingUrl);
  const { moviesList:popularMovies, loading:loadingPopularMovies } = useFetchMovies(popularUrl);
  const { moviesList:topRatedMovies, loading:loadingTopRatedMovies } = useFetchMovies(topRatedUrl);
  const { moviesList:nowPlayingMovies, loading:loadingNowPlayingMovies } = useFetchMovies(nowPlayingUrl);
  const { moviesList:upcomingMovies, loading:loadingUpcomingMovies } = useFetchMovies(upcomingUrl);

  if (loadingTrendingMovies || loadingPopularMovies || loadingTopRatedMovies || loadingNowPlayingMovies || loadingUpcomingMovies) 
    return (
      <div className='bg-gray-500 text-white text-center'>Loading...</div>
    )

  return (
    <div className='bg-background flex flex-col'>
      <BannerContainer movie={trendingMovies[0]}/>
      <MovieSection title="Now Playing" moviesList={nowPlayingMovies} />
      <MovieSection title="Trending" moviesList={trendingMovies} />
      <MovieSection title="Popular" moviesList={popularMovies} />
      <MovieSection title="Top Rated" moviesList={topRatedMovies} />
      <MovieSection title="Upcoming" moviesList={upcomingMovies} />
    </div>
  )

}

export default HomePage;
