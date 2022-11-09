import { useState } from "react";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { IconButton } from "@mui/material";
import { useEffect } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const styles = {
    color: like >= 20 ? "orange" : "deepskyblue",
  };

  const IncrementLike = () => {
    setLike(like + 1);
    // console.log(like);
  };

  const DecrementLike = () => {
    setDislike(dislike + 1);
    // console.log(dislike);
  };

  // useEffect(() => {
  //   console.log("Like Update👍", like);
  // }, [like, dislike]);

  return (
    <div className="counter-container">
      {like >= 10 ? (
        <h1 style={styles}>You have won the people's 💖😍🥰</h1>
      ) : null}
      <div className="counter-botton-container">
        <Button variant="text" aria-label="Like button" onClick={IncrementLike}>
          👍
          <Badge
            badgeContent={like}
            color="primary"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          ></Badge>
        </Button>

        <Button
          variant="text"
          aria-label="disike button"
          onClick={DecrementLike}
        >
          👎
          <Badge
            badgeContent={dislike}
            color="error"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          ></Badge>
        </Button>
        <div>
          <IconButton aria-label="delete button" color="error">
            <DeleteIcon />
          </IconButton>
          <IconButton ria-label="Edit button" color="secondary">
            <ModeEditOutlineIcon />
          </IconButton>
        </div>
        {/* <p>{count}</p> */}
      </div>
    </div>
  );
}
