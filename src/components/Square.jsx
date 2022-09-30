export default function Square({
  gridSize,
  marked,
  column,
  handleBoard,
  row,
  resolution,
  top,
  right,
  bottom,
  left,
}) {
  return (
    <div
      onClick={() => handleBoard(row, column)}
      className={`square ${marked ? "marked" : null} ${top ? "top" : null} ${
        bottom ? "bot" : null
      } ${left ? "left" : null} ${right ? "right" : null}`}
    ></div>
  );
}
