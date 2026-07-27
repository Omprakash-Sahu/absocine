import { useEffect, useState } from "react";
import DefaultHeaderContent from "./DefaultHeaderContent";
import SearchBox from "./SearchBox";
import FetchedMovieResults from "./FetchedMovieResults";
import useFetchMovies from "../hooks/useFetchMovies";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Header() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
	const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
	const { moviesList:searchedMovieResults, loading:loadingSearchedMovieResults } = useFetchMovies(movieSearchUrl);

    if (!isSearchOpen) {
        return (
            <div className='sticky top-0 z-20 bg-background'>
                <DefaultHeaderContent isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}/>
            </div>
        )
    }

    return (
        <div className='sticky top-0 z-20 bg-background'>
            <SearchBox isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} setSearchTerm={setSearchTerm}/>
            
            {loadingSearchedMovieResults ? (
             	<div className="bg-gray-500 text-white w-full px-3 py-1">Loading ...</div>
            ) : (
                <FetchedMovieResults searchedMovieResults={searchedMovieResults} searchTerm={searchTerm}/>
            )}
        </div>
    )
}

export default Header;
