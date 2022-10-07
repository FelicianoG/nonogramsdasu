import logo from "../logo.svg";
import cross from "../cross.svg";

const CROSSED = {
  backgroundImage: `url(${logo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export default function Square({
  marked,
  crossed,
  column,
  handleBoardClick,
  handleBoardDrag,
  row,
  top,
  right,
  bottom,
  left,
}) {
  return (
    <div
      onMouseEnter={(e) => handleBoardDrag(row, column, e)}
      onMouseDown={(e) => handleBoardClick(row, column, e)}
      className={`square${marked ? " marked" : ""}${top ? " top" : ""}${
        bottom ? " bot" : ""
      }${left ? " left" : ""}${right ? " right" : ""}${
        crossed ? " crossed" : ""
      }`}
      style={crossed ? CROSSED : null}
    ></div>
  );
}
