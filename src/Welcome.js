export function Welcome({ name, profilePic }) {
  return (
    <div>
      <img src={profilePic} alt={name} className="profile" />
      <h1>Hello {name}</h1>
      {/* <Counter /> */}
    </div>
  );
}
