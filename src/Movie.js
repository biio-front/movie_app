import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, rating, runtime, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}/>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <p className="movie__yearAndRuntime">{year}, {runtime}minutes</p>
        <ul className="genres">
         {genres.map((genre, i) => (<li key={i} className="genres__genre">{genre}</li>))}
         {/* map api는 key를 필요로함! */}
        </ul>
        <p className="movie__rating">{rating}</p>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
}

Movie.prototypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
