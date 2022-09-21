import Square from "./Square";
import { useEffect, useState } from "react";

export default function Grid({ rowNum = 3, columnNum = 3 }) {
  const ROW_STYLE = {
    display: "flex",
  };
  const initialColumns = [];
  for (let i = 0; i < columnNum; i++) {
    initialColumns.push(false);
  }
  const dimension = [];
  for (let j = 0; j < rowNum; j++) {
    dimension.push([...initialColumns]);
  }

  const [board, setBoard] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);
  const [pencil, setPencil] = useState(true);

  document.addEventListener("keydown", () => {
    setPencil((prev) => !prev);
  });

  function handleRow(row, column) {
    setBoard((prev) => {
      let arr = [...prev];
      arr[row][column] = pencil;
      return [...arr];
    });
  }

  return (
    <>
      {pencil ? (
        <>
          <h3>Pencil Selected</h3>
          <h4>Press any key to select Eraser</h4>
        </>
      ) : (
        <>
          <h3>Eraser Selected</h3>
          <h4>Press any key to select Pencil</h4>
        </>
      )}
      {board.map((arr, i) => {
        return (
          <div key={i} style={ROW_STYLE}>
            {arr.map((square, j) => {
              return (
                <Square
                  key={`${i}${j}`}
                  row={i}
                  column={j}
                  handleRow={handleRow}
                  marked={board[i][j]}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}
