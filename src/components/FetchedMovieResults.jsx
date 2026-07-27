function FetchedMovieResults({ searchedMovieResults, searchTerm }) {

    if (!searchTerm) return null;

    if (searchedMovieResults.length === 0) {
        return <div className="bg-red-500 text-white w-full px-3 py-1">"{searchTerm}" not found.</div>
    }

    return (
        <div className="bg-white/20 backdrop-blur-[10px] w-full h-[40vh] overflow-y-auto border-t border-white/20 absolute">
            {searchedMovieResults.map((movie) => (
                <div key={movie.id} className="border-b border-white/20 px-3 py-1.5 text-sm text-white">{movie.title}</div>
            ))}
        </div>
    )
}

export default FetchedMovieResults;