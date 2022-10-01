import Square from "./Square";

export default function Grid({ size = 200, rowNum = 3, board, handleBoard }) {
  return (
    <>
      <div className="grid">
        {board.map((arr, i) => {
          return (
            <div key={i} className={"grid-row"}>
              {arr.map((square, j) => {
                return (
                  <Square
                    gridSize={size}
                    resolution={rowNum}
                    key={`${i}${j}`}
                    row={i}
                    top={i % 5 === 0 && i !== 0}
                    left={j % 5 === 0 && j !== 0}
                    column={j}
                    handleBoard={handleBoard}
                    marked={board[i][j]}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
