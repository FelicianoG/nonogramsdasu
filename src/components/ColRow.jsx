import React from "react";
import { arrayToBlocks } from "../utils";

export default function ColRow({ size, arr, isCol, columnNum, rowNum }) {
  const divisionSize = isCol ? columnNum : rowNum;

  const ROW_STYLES = {
    width: `${size / divisionSize}px`,
    height: `${size / divisionSize}px`,
    fontSize: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  };

  const COL_STYLES = {};

  return (
    <div className={`colrow-container ${isCol ? "colrow-row" : "colrow-col"}`}>
      {arr.map((a, i) => {
        return (
          <div className={isCol ? "col" : "row"} key={i}>
            {arrayToBlocks(a).map((b, j) => (
              <div className="number" key={j} style={ROW_STYLES}>
                {b}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
