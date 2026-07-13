function MovieCard({ movie }) {
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="Movie poster" />
        </>
    )
}

export default MovieCard