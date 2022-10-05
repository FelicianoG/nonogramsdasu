import { cloneElement, useState } from "react";
import arrDenester from "../utils";

export default function Logic({ children, winBoard }) {
  const initialColumns = [];
  const rowNum = winBoard.length;
  const columnNum = winBoard[0].length;
  for (let i = 0; i < columnNum; i++) {
    initialColumns.push(false);
  }
  const dimension = [];
  for (let j = 0; j < rowNum; j++) {
    dimension.push([...initialColumns]);
  }

  const [board, setBoard] = useState(dimension);
  console.log(board);
  const win = JSON.stringify(board) === JSON.stringify(winBoard);

  let [temp, setTemp] = useState(true);
  document.addEventListener("keydown", (e) => {
    if (e.key === "e") {
      setTemp(false);
    } else if (e.key === "d") {
      setTemp(true);
    }
  });

  function handleBoard(row, column) {
    setBoard((prev) => {
      const arr = arrDenester(prev);
      arr[row][column] = temp;
      return arrDenester([...arr]);
    });
  }
  const element = cloneElement(children, {
    handleBoard,
    board,
    rowNum,
    columnNum,
    winBoard,
    win,
  });
  return <>{element}</>;
}
