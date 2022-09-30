import React from "react";
import { arrayToBlocks } from "../utils";

export default function ColRow({ arr, isCol, columnNum, rowNum }) {
  return (
    <div className={`colrow-container ${isCol ? "colrow-row" : "colrow-col"}`}>
      {arr.map((a, i) => {
        return (
          <div className={isCol ? "col" : "row"} key={i}>
            {arrayToBlocks(a).map((b, j) => (
              <div
                className="number"
                style={{
                  fontSize: `${0.6 + 2 / (columnNum * rowNum)}em`,
                }}
                key={j}
              >
                {b}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
