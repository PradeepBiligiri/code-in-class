import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Msg
        name="Pradeep"
        profilePic="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <Msg
        name="Abishek"
        profilePic="https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg"
      />
      <Msg
        name="Ajith"
        profilePic="https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/w320-h640/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg"
      />
    </div>
  );
}

export default App;

function Msg({ name, profilePic }) {
  return (
    <div>
      <img src={profilePic} alt={name} />
      <h1>Hello {name}</h1>
    </div>
  );
}
