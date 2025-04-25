import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      if (searchQuery.trim() === "") {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } else {
        const results = await searchMovies(searchQuery);
        setMovies(results);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center"
      >
        <input
          type="text"
          placeholder="Search for movies..."
          className="bg-white text-black px-4 py-2 rounded-md w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-300"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-yellow-400 border-opacity-50"></div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-center text-red-500 mb-6 text-lg">{error}</div>
      )}

      {/* Movie Grid */}
      {!loading && !error && (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
