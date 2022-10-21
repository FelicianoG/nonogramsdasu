import logo from "../logo.svg";
import { useContext } from "react";
import ContextValue from "../context/ColorContext.js";

const CROSSED = {
  backgroundImage: `url(${logo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export default function Square({ marked, crossed, column, handleBoardClick, handleBoardDrag, row, top, right, bottom, left }) {
  const { drawMode } = useContext(ContextValue);
  const color = drawMode ? "-two" : "";

  return (
    <div
      onMouseEnter={(e) => handleBoardDrag(row, column, e)}
      onMouseDown={(e) => handleBoardClick(row, column, e)}
      className={`square${marked ? " marked" : ""}${top ? ` top${color}` : ""}${bottom ? ` bot${color}` : ""}${left ? ` left${color}` : ""}${
        right ? ` right${color}` : ""
      }${crossed ? " crossed" : ""}`}
      style={crossed ? CROSSED : null}
    ></div>
  );
}
