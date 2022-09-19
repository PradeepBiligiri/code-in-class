import { Navigate, useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton } from "@mui/material";

export function MovieDeatails({ moviList }) {
  const { id } = useParams();
  const Navigate = useNavigate();
  const movie = moviList[id];
  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };

  return (
    <div>
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-spec">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="movie-rating" style={styles}>
            ⭐ {movie.rating}
          </p>
        </div>
        <p>{movie.summary}</p>
        <div className="movie-details-back-button">
          <IconButton color="primary" onClick={() => Navigate(-1)}>
            <KeyboardBackspaceIcon sx={{ fontSize: "40px" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
