import React from "react";
import "./Body.css";

export default function Body() {
  return (
    <div className="img-container">
      <img
        src="/src/assets/appsview.png"
        className="appsview"
        alt="Vite logo"
      />
      <div className="text">
        <div>COMING SOON</div>
        <div>
          <img
            src="/src/assets/buttons.png"
            className="social"
            alt="Vite logo"
          />
        </div>
      </div>

      <div className="text2">
        Crafted with{" "}
        <img src="/src/assets/love.svg" className="love" alt="love"></img>{" "}
        {"  "}from ink and needles, for art to{"  "}
        <img
          src="/src/assets/infinity.svg"
          className="infinity"
          alt="infinity"
        ></img>{" "}
        .
      </div>
    </div>
  );
}
