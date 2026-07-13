import MovieCard from './MovieCard';

function MovieSection({ title, moviesList }) {
    return (
        <>
            {moviesList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </>
    )
}

export default MovieSection;