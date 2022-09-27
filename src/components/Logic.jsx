import { cloneElement, useState, useEffect } from "react";
import arrDenester from "../utils";

export default function Logic({ children, winBoard }) {
  const [zoom, setZoom] = useState(200);
  const size = zoom;
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "w": {
          setZoom((prev) => prev + 10);
          break;
        }
        case "s": {
          setZoom((prev) => prev - 10);
          break;
        }
        default: {
          return;
        }
      }
    });
  }, []);

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
      console.log(arr);
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
    size,
  });
  return <div>{element}</div>;
}
