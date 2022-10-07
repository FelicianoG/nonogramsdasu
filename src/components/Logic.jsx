import { cloneElement, useState, useEffect } from "react";
import arrDenester, { arrNegative } from "../utils";
import Switch from "./Switch";

export default function Logic({ children, winBoard, setWinBoard }) {
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
  const [crosses, setCrosses] = useState(dimension);

  // console.log(board);
  const win = JSON.stringify(board) === JSON.stringify(winBoard);

  const [temp, setTemp] = useState(true);
  const [tempCross, setTempCross] = useState(true);
  const [cross, setCross] = useState(false);

  function handleBoardClick(row, column, e) {
    setTemp(!e.target.classList.contains("marked"));
    setTempCross(!e.target.classList.contains("crossed"));
    if (cross && !e.target.classList.contains("marked")) {
      setCrosses((prev) => {
        const arr = arrDenester(prev);
        arr[row][column] = !prev[row][column];
        return arrDenester([...arr]);
      });
    } else if (!cross && !e.target.classList.contains("crossed")) {
      setBoard((prev) => {
        const arr = arrDenester(prev);
        arr[row][column] = !prev[row][column];
        return arrDenester([...arr]);
      });
    }
  }

  function handleBoardDrag(row, column, e) {
    if (cross && !e.target.classList.contains("marked")) {
      if (e) {
        if (e.buttons === 1) {
          setCrosses((prev) => {
            const arr = arrDenester(prev);
            arr[row][column] = tempCross;
            return arrDenester([...arr]);
          });
        }
      } else {
        setCrosses((prev) => {
          const arr = arrDenester(prev);
          arr[row][column] = tempCross;
          return arrDenester([...arr]);
        });
      }
    } else if (!cross && !e.target.classList.contains("crossed")) {
      if (e) {
        if (e.buttons === 1) {
          setBoard((prev) => {
            const arr = arrDenester(prev);
            arr[row][column] = temp;
            return arrDenester([...arr]);
          });
        }
      } else {
        setBoard((prev) => {
          const arr = arrDenester(prev);
          arr[row][column] = temp;
          return arrDenester([...arr]);
        });
      }
    }
  }
  const element = cloneElement(children, {
    handleBoardClick,
    handleBoardDrag,
    board,
    crosses,
    rowNum,
    columnNum,
    winBoard,
    win,
  });

  const makeNegative = (e) => {
    setBoard(arrNegative(board));
    setWinBoard(arrNegative(winBoard));
  };

  return (
    <>
      {element}
      <Switch setCross={setCross} />
      <button onClick={(e) => makeNegative()}>Negative</button>
    </>
  );
}
