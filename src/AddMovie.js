import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export function AddMovie({ moviList, setMoviList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const Navigate = useNavigate();

  const AddMovie = () => {
    const newMovie = { name, poster, rating, summary, trailer };
    console.log(newMovie);
    setMoviList([...moviList, newMovie]);
    Navigate(-1);
  };

  // const [addMovie, setAddmovie] = useState("");
  // const [addMovieList, setAddMovieList] = useState({ moviList });
  return (
    <div className="add-movies-form">
      <TextField
        label="Name"
        variant="filled"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        label="Poster"
        variant="filled"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
      />

      <TextField
        label="Rating"
        variant="filled"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <TextField
        label="Summary"
        variant="filled"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />

      <TextField
        label="Trailer"
        variant="filled"
        value={trailer}
        onChange={(e) => setTrailer(e.target.value)}
      />

      <Button variant="contained" onClick={AddMovie}>
        Add Movie
      </Button>
    </div>
  );
}
