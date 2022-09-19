import { useState } from "react";
import Button from "@mui/material/Button";

export function AddMovie({ moviList, setMoviList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const AddMovie = () => {
    const newMovie = { name, poster, rating, summary, trailer };
    console.log(newMovie);
    setMoviList([...moviList, newMovie]);
  };

  // const [addMovie, setAddmovie] = useState("");
  // const [addMovieList, setAddMovieList] = useState({ moviList });
  return (
    <div className="add-movies-form">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="poster"
        id="poster"
        placeholder="Poster"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
      />
      <input
        type="text"
        name="rating"
        id="rating"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="text"
        name="summary"
        id="summary"
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input
        type="text"
        name="trailer"
        id="trailer"
        placeholder="Trailer"
        value={trailer}
        onChange={(e) => setTrailer(e.target.value)}
      />
      <Button variant="contained" onClick={AddMovie}>
        Add Movie
      </Button>
    </div>
  );
}
