export function ColorBox({ color }) {
  const styles = {
    height: "25px",
    width: "250px",
    marginTop: "10px",
    background: color,
  };
  return <div style={styles} className="color-box"></div>;
}
