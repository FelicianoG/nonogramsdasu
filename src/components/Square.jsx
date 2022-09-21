export default function Square({ marked, column, handleRow, row }) {
  const SQUARE_STYLE = {
    width: "30px",
    height: "30px",
    backgroundColor: "gray",
    border: "solid white 2px",
  };
  const MARKED = {
    backgroundColor: "red",
  };

  return (
    <div
      onClick={() => handleRow(column, row)}
      style={marked ? { ...SQUARE_STYLE, ...MARKED } : { ...SQUARE_STYLE }}
    ></div>
  );
}
