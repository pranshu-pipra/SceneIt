import { FaHeart } from "react-icons/fa";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFav, addToFav, removeFromFav } = useMovieContext();
  const favourite = isFav(movie.id);

  function onFavouriteClick(e) {
    e.preventDefault();
    if (favourite) {
      removeFromFav(movie.id);
    } else {
      addToFav(movie);
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        {/* Movie Image */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />

        {/* Heart Icon (top-right) */}
        <button
          onClick={onFavouriteClick}
          className={`absolute top-2 right-2 p-2 rounded-full shadow transition-colors duration-300 ${
            favourite
              ? "bg-white text-red-600 hover:bg-yellow-400"
              : "bg-white/30 text-white hover:bg-yellow-400"
          }`}
        >
          <FaHeart />
        </button>
      </div>

      {/* Movie Info */}
      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>
        <p className="text-sm text-gray-400">{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
