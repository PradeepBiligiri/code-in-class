import { useState } from "react";
import { Counter } from "./Counter";
import { AddMovie } from "./AddMovie";

export function MovieList({ moviList }) {
  return (
    <div>
      <AddMovie moviList={moviList} />
      <div className="movie-list">
        {moviList.map((mv, index) => (
          <Movies key={index} movie={mv} />
        ))}
      </div>
    </div>
  );
}
function Movies({ movie }) {
  const [show, setShow] = useState(true);
  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };
  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-spec">
        <h2 className="movie-name">{movie.name}</h2>
        <p className="movie-rating" style={styles}>
          ⭐ {movie.rating}
        </p>
      </div>
      <button onClick={() => setShow(!show)} className="toggle-button">
        Toogle Summery
      </button>
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter />
      <div></div>
    </div>
  );
}
