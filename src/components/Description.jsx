import { rowColumnMaker } from "../utils";
import Grid from "./Grid";
import ColRow from "./ColRow";
import RulesDisplay from "./RulesDisplay";

export default function Description({
  win,
  winBoard,
  size = 200,
  board,
  handleBoard,
  rowNum,
  columnNum,
}) {
  const DESC_STYLES = {
    backgroundColor: "#008080",
    outline: "white solid 2px",
  };

  const [winRow, winColumn] = rowColumnMaker(winBoard);

  const COLUMN_STYLES = {
    width: `${size}px`,
    height: `${size}px`,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  };
  const ROW_STYLES = {
    width: `${size}px`,
    height: `${size}px`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={DESC_STYLES}>
      <div style={{ display: "flex" }}>
        <div style={COLUMN_STYLES}>
          <RulesDisplay size={size} win={win} />
        </div>
        <div style={COLUMN_STYLES}>
          <ColRow
            size={size}
            arr={winColumn}
            isCol={true}
            rowNum={rowNum}
            columnNum={columnNum}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={ROW_STYLES}>
          <ColRow
            rowNum={rowNum}
            columnNum={columnNum}
            size={size}
            arr={winRow}
            isCol={false}
          />
        </div>
        <Grid
          board={board}
          handleBoard={handleBoard}
          size={size}
          winBoard={winBoard}
          rowNum={rowNum}
          columnNum={columnNum}
        />
      </div>
    </div>
  );
}
