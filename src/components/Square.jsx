import { colorTheme } from "../utils";

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
  const SQUARE_STYLE = {
    width: `${gridSize / resolution}px`,
    height: `${gridSize / resolution}px`,
    backgroundColor: colorTheme.middle,
    border: `${colorTheme.black} solid 1px`,
    boxSizing: "border-box",
  };

  const MARKED = {
    backgroundColor: colorTheme.marked,
  };

  const specialLineColor = colorTheme.accent;

  const topBorder = {
    borderTopColor: top ? specialLineColor : colorTheme.black,
  };
  const botBorder = {
    borderBottomColor: bottom ? specialLineColor : colorTheme.black,
  };
  const rightBorder = {
    borderRightColor: right ? specialLineColor : colorTheme.black,
  };
  const leftBorder = {
    borderLeftColor: left ? specialLineColor : colorTheme.black,
  };

  return (
    <div
      onClick={() => handleBoard(row, column)}
      style={
        marked
          ? {
              ...SQUARE_STYLE,
              ...MARKED,
              ...topBorder,
              ...botBorder,
              ...rightBorder,
              ...leftBorder,
            }
          : {
              ...SQUARE_STYLE,
              ...topBorder,
              ...botBorder,
              ...rightBorder,
              ...leftBorder,
            }
      }
    ></div>
  );
}
