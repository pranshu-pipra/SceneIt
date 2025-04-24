function MovieCard({ movie }) {
  function onFavouriteClick() {
    alert("clciked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poste">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>
            Like
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
