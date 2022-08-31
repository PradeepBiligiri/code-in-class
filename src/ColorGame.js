import { useState } from "react";
import { ColorBox } from "./ColorBox";
import Button from "@mui/material/Button";

export function ColorGame() {
  const [color, setColor] = useState("orange");
  const style = {
    background: color,
  };
  const [colorList, setColorList] = useState([
    "orange",
    "Red",
    "yellow",
    "tan",
  ]);
  return (
    <div>
      <input
        style={style}
        type="text"
        value={color}
        placeholder="enter color name"
        onChange={(e) => setColor(e.target.value)}
      />
      <Button
        variant="outlined"
        onClick={() => {
          setColorList([...colorList, color]);
        }}
      >
        submit
      </Button>
      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
