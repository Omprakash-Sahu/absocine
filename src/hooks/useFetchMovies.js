import { useState, useEffect } from "react";

function useFetchMovies(url) {
    const [ moviesList, setMoviesList ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(url);
                let query = url.split('&')[1];
                console.log(`Fetched for ${query}`);
                if(!response.ok) {
                    throw new Error("Failed to fetch movies.");
                }
                const data = await response.json();
                setMoviesList(data.results);
                setLoading(false);
            } catch (error) {
                console.log(error);        
                setLoading(false);
            }
        }

        fetchMovies();
    }, [url]);
    
    return { moviesList, loading };
}

export default useFetchMovies;