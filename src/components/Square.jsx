export default function Square({
  gridSize,
  marked,
  column,
  handleRow,
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
      onClick={() => handleRow(row, column)}
      style={marked ? { ...SQUARE_STYLE, ...MARKED } : { ...SQUARE_STYLE }}
    ></div>
  );
}
