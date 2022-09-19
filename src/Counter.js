import { useState } from "react";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const styles = {
    color: like >= 20 ? "orange" : "deepskyblue",
  };
  return (
    <div className="counter-container">
      {like >= 10 ? (
        <h1 style={styles}>You have won the people's 💖😍🥰</h1>
      ) : null}
      <progress
        className="counter-progress"
        max="100"
        value={(like / (like + dislike)) * 100 || 0}
      ></progress>
      <div className="counter-botton-container">
        <Button
          variant="text"
          onClick={() => {
            setLike(like + 1);
            console.log(like);
          }}
        >
          👍
          <Badge badgeContent={like} color="primary"></Badge>
        </Button>

        <Button
          variant="text"
          onClick={() => {
            setDislike(dislike + 1);
            console.log(dislike);
          }}
        >
          👎
          <Badge badgeContent={dislike} color="secondary"></Badge>
        </Button>

        {/* <p>{count}</p> */}
      </div>
    </div>
  );
}
