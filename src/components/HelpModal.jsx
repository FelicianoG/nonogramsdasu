import React from "react";

const MODAL_STYLE = {
  backgroundColor: "rgba(0,0,0,.5)",
  padding: "20px",
  color: "white",
  position: "fixed",
  top: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};
const MODAL_TITLE = {
  padding: "40px",
  backgroundColor: "#008080",
  color: "white",
  width: "100%",
  margin: 0,
};

export default function HelpModal({ setModal }) {
  return (
    <div className="modal" style={MODAL_STYLE}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "45%",
          backgroundColor: "black",
          minWidth: "400px",
        }}
      >
        <h1
          onClick={() => {
            setModal((prev) => {
              return !prev;
            });
          }}
          style={MODAL_TITLE}
        >
          Hello motto!
        </h1>
        <ul>
          <div>
            <h1>How To Play</h1>
          </div>
        </ul>
      </div>
    </div>
  );
}
