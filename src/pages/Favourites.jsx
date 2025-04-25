import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favourites } = useMovieContext();

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      {favourites.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            No Favourite Movies Yet
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Start adding movies to your list ❤️
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-6">Your Favourite Movies</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {favourites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Favourites;
