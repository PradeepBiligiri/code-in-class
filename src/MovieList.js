import { useState } from "react";
import { Counter } from "./Counter";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import { Card, CardActions, CardContent, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export function MovieList({ moviList }) {
  return (
    <div>
      <div className="movie-list">
        {moviList.map((mv, index) => (
          <Movies key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}
function Movies({ movie, id }) {
  const [show, setShow] = useState(false);
  const Navigate = useNavigate();
  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };
  return (
    <Card sx={{ height: "min-content" }} className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent>
        <div className="movie-spec">
          <div className="name-toggle-container">
            <h2 className="movie-name">{movie.name}</h2>
            <IconButton
              color="primary"
              aria-label="Summary toggle button"
              onClick={() => setShow(!show)}
              className="toggle-button"
            >
              {show ? <KeyboardControlKeyIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <IconButton
              color="primary"
              aria-label="Summary toggle button"
              onClick={() => Navigate(`/movies/${id}`)}
              className="toggle-button"
            >
              <InfoIcon />
            </IconButton>
          </div>
          <p className="movie-rating" style={styles}>
            ⭐ {movie.rating}
          </p>
        </div>

        {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>

      <div></div>
    </Card>
  );
}
