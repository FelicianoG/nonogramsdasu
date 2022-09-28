import { colorTheme } from "../utils";

export default function RulesDisplay({ size, win }) {
  const fontSize = size / 10;

  return (
    <div style={{ justifySelf: "center", alignSelf: "center" }}>
      {win ? (
        <h1>You win!</h1>
      ) : (
        <div
          style={{
            color: colorTheme.white,
            fontSize: `${fontSize}px`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <p style={{ margin: "0" }}>Rules:</p>
          <p style={{ margin: "0" }}>
            <b>W</b> key: Zoom in
          </p>

          <p style={{ margin: "0" }}>
            <b>S</b> key: Zoom out
          </p>

          <p style={{ margin: "0" }}>
            <b>D</b> key: Draw
          </p>

          <p style={{ margin: "0" }}>
            <b>E</b> key: Erase
          </p>
        </div>
      )}
    </div>
  );
}
