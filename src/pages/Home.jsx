import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Pk", release_date: "02/02/2016" },
    { id: 2, title: "Inception", release_date: "07/16/2010" },
    { id: 3, title: "The Dark Knight", release_date: "07/18/2008" },
    { id: 4, title: "Interstellar", release_date: "11/07/2014" },
    { id: 5, title: "3 Idiots", release_date: "12/25/2009" },
    { id: 6, title: "Parasite", release_date: "05/30/2019" },
    { id: 7, title: "Avengers: Endgame", release_date: "04/26/2019" },
    { id: 8, title: "Joker", release_date: "10/04/2019" },
    { id: 9, title: "The Shawshank Redemption", release_date: "09/23/1994" },
    { id: 10, title: "Forrest Gump", release_date: "07/06/1994" },
    { id: 11, title: "The Ma  trix", release_date: "03/31/1999" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies......"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
