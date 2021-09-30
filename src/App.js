import React from "react";
import assetes from "./Assetes/image1.png";
import "./App.css";
function App() {
  return (
    <div>
      <div style={({ border: "solid  1px black" }, { maxwidth: "100vw" })}>
        <h1 className="title">Votre nom ici</h1>
        <br />
        <img src="/photo.png" alt="image1" width="400" height="250px"></img>
        <br />
        <img src={assetes} width="400px" height="250px" alt="photo" />
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zHcr32gRRCs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
export default App;
