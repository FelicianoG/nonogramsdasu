export default function Square({
  marked,
  column,
  handleBoard,
  row,
  top,
  right,
  bottom,
  left,
}) {
  return (
    <div
      onClick={() => handleBoard(row, column)}
      className={`square${marked ? " marked" : ""}${top ? " top" : ""}${
        bottom ? " bot" : ""
      }${left ? " left" : ""}${right ? " right" : ""}`}
    ></div>
  );
}
