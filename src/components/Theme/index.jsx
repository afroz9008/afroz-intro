import React, { useEffect, useState } from "react";

export default function Theme(props) {
  const [colors, setColors] = useState([
    { background: "#000000", text: "#fff" },
    { background: "#3686fe", text: "#fff" },
    // { background: "#005555", text: "#F7FF93" },
    // { background: "#E8630A", text: "#E9D5DA" },
    // { background: "#92BA92", text: "#F1DDBF" },
    // { background: "#4D96FF", text: "#FF6B6B" },
    // { background: "#630606", text: "#D9CE3F" },
    // { background: "#8A39E1", text: "#ECC488" },
  ]);

  useEffect(() => {
    const background = localStorage.getItem("background");
    const text = localStorage.getItem("text");
    const ind = colors.findIndex(
      (c) => c.background === background && c.text === text
    );
    if (background && text && ind >= 0) {
      const root = document.documentElement;
      root.style.setProperty("--colorblue", background);
      root.style.setProperty("--textColor", text);
      root.style.setProperty("--colororangetrans", background + "78");
      const data = Object.assign([], [...colors]);
      const r = data.splice(ind, 1)[0];
      setColors([r, ...data]);
    }
  }, []);

  return (
    <>
      <div className="loader">
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="color-picker pulse">
        {colors.map((color, ind) => (
          <div
            onClick={() => {
              const root = document.documentElement;
              root.style.setProperty("--colorblue", color.background);
              root.style.setProperty("--textColor", color.text);
              root.style.setProperty(
                "--colororangetrans",
                color.background + "78"
              );
              localStorage.setItem("background", color.background);
              localStorage.setItem("text", color.text);
              const data = Object.assign([], [...colors]);
              const r = data.splice(ind, 1)[0];
              setColors([r, ...data]);
            }}
            key={color + ind}
            className="color-badge"
          >
            <div style={{ background: color.background, flex: 1 }} />
            <div style={{ background: color.text, flex: 1 }} />
          </div>
        ))}
      </div>
      {props.children}
    </>
  );
}
