import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const names = [
    {
      name: "Pradeep",
      profilePic:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      name: "Abishek",
      profilePic:
        "https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg",
    },
    {
      name: "Ajith",
      profilePic:
        "https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/w320-h640/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg",
    },
  ];
  return (
    <div className="App">
      {/* {names.map((nm) => (
        <Msg name={nm.name} profilePic={nm.profilePic} />
      ))} */}
      {names.map(({ name, profilePic }) => (
        <Msg name={name} profilePic={profilePic} />
      ))}
    </div>
  );
}

export default App;

function Counter() {
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
        value={(like / (like + dislike)) * 100}
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

function Msg({ name, profilePic }) {
  return (
    <div>
      <img src={profilePic} alt={name} />
      <h1>Hello {name}</h1>
      <Counter />
    </div>
  );
}
