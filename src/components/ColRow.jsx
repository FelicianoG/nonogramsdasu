import React from "react";
import { arrayToBlocks } from "../utils";
import { useContext } from "react";
import ContextValue from "../context/ColorContext.js";

export default function ColRow({ arr, isCol, columnNum, rowNum }) {
  const { drawMode } = useContext(ContextValue);
  const color = drawMode ? "second-color-border" : "";

  return (
    <div className={`colrow-container ${isCol ? "colrow-row" : "colrow-col"}`}>
      {arr.map((a, i) => {
        return (
          <div className={isCol ? `col ${color}` : `row ${color}`} key={i}>
            {arrayToBlocks(a).map((b, j) => (
              <div className="number" key={j}>
                {b}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
