import React from "react";
import { arrayToBlocks } from "../utils";

export default function ColRow({ size, arr, isCol, columnNum, rowNum }) {
  console.log(columnNum);
  console.log(rowNum);

  const divisionSize = isCol ? columnNum : rowNum;
  console.log(divisionSize);

  const COLROW_STYLES = {
    backgroundColor: "#555",
    width: `${size}px`,
    height: `${size}px`,
    display: "flex",
    flexDirection: isCol ? "row" : "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const ROW_STYLES = {
    outline: "green solid 1px",
    width: `${size / divisionSize}px`,
    height: `${size / divisionSize}px`,
    fontSize: `${(size - 100) / divisionSize}px`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={COLROW_STYLES}>
      {arr.map((a, i) => {
        return (
          <div
            key={i}
            style={{
              width: "100%",
              height: "100%",
              outline: "white solid 1px",
              flexGrow: 1,
              display: "flex",
              flexDirection: !isCol ? "row" : "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
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
