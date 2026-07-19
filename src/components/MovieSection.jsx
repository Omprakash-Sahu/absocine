import MovieCard from './MovieCard';

function MovieSection({ title, moviesList }) {
    return (
        <div className='flex flex-col gap-3 px-3 mt-2'>
            <h2 className='text-base text-white font-semibold'>{title}</h2>
            <div className='flex gap-3 pb-4 w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory'>
                {moviesList.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieSection;