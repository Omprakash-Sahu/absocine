function MovieCard({ movie }) {
    return (
        <div className="flex flex-col gap-1 relative min-w-30 h-fit snap-start">
            <div className="absolute top-0.5 right-0.5 bg-black/50 px-1.5 pt-0.5 rounded-xs">
                <p className="text-white text-xs font-medium">{movie.vote_average.toFixed(1)}</p>
            </div>
            <img className="w-30 h-45 object-cover" src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="Movie poster" />
            <p className="text-sm font-semibold text-white line-clamp-1" title={movie.title}>{movie.title}</p>
            <p className="text-xs font-medium text-white">{movie.release_date.slice(0, 4)}</p>
        </div>
    )
}

export default MovieCard;