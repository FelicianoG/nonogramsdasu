import React from "react";
import { arrayToBlocks, colorTheme } from "../utils";

export default function ColRow({ size, arr, isCol, columnNum, rowNum }) {
  console.log(columnNum);
  console.log(rowNum);

  const divisionSize = isCol ? columnNum : rowNum;
  console.log(divisionSize);

  const COLROW_STYLES = {
    backgroundColor: colorTheme.main,
    width: `${size}px`,
    height: `${size}px`,
    display: "flex",
    flexDirection: isCol ? "row" : "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const ROW_STYLES = {
    width: `${size / divisionSize}px`,
    height: `${size / divisionSize}px`,
    fontSize:
      size > 200
        ? `${(size - 50) / divisionSize}px`
        : `${(size - 25) / divisionSize}px`,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  };

  const COL_STYLES = {
    width: "100%",
    height: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: !isCol ? "row" : "column",
    justifyContent: "flex-end",
    alignItems: "center",
    boxSizing: "border-box",
  };

  return (
    <div style={COLROW_STYLES}>
      {arr.map((a, i) => {
        return (
          <div key={i} style={COL_STYLES}>
            {arrayToBlocks(a).map((b, j) => (
              <div key={j} style={ROW_STYLES}>
                {b}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
