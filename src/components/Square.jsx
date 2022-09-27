export default function Square({
  gridSize,
  marked,
  column,
  handleBoard,
  row,
  resolution,
}) {
  const SQUARE_STYLE = {
    width: `${gridSize / resolution}px`,
    height: `${gridSize / resolution}px`,
    backgroundColor: "#444",
    outline: "solid black 1px",
    // userSelect: "none",
  };
  const MARKED = {
    backgroundColor: "#BBB",
  };

  return (
    <div
      onClick={() => handleBoard(row, column)}
      style={marked ? { ...SQUARE_STYLE, ...MARKED } : { ...SQUARE_STYLE }}
    ></div>
  );
}
