import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
      <TextField
        label="Name"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        label="Poster"
        variant="standard"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
      />

      <TextField
        label="Rating"
        variant="standard"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <TextField
        label="Summary"
        variant="standard"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />

      <TextField
        label="Trailer"
        variant="standard"
        value={trailer}
        onChange={(e) => setTrailer(e.target.value)}
      />

      <Button variant="contained" onClick={AddMovie}>
        Add Movie
      </Button>
    </div>
  );
}
