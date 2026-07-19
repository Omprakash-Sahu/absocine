function BannerContainer({ movie }) {

    if (!movie.backdrop_path) return null;

    return (
        <div className="w-full mb-2 relative">
            <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} alt="" />
            <div className="flex items-end absolute bottom-0 w-full h-[50%] bg-linear-to-t from-black/80 to-black/0">
                <h2 className="text-3xl font-semibold text-white ml-4 mb-3">{movie.title}</h2>
            </div>
        </div>
    )
}

export default BannerContainer;