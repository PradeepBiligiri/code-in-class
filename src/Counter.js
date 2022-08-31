import { useState } from "react";

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
        <button
          onClick={() => {
            setLike(like + 1);
            console.log(like);
          }}
        >
          👍{like}
        </button>

        <button
          onClick={() => {
            setDislike(dislike + 1);
            console.log(dislike);
          }}
        >
          👎{dislike}
        </button>
        {/* <p>{count}</p> */}
      </div>
    </div>
  );
}
