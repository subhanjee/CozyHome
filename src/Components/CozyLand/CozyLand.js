import React from "react";
import "./cozyland.css";

function CozyLand() {
  return (
    <div className="Cozylanddiv">
      <div className="subcozylanddiv">
        <h1 className="cozylandheading">CozyLand</h1>
        <h3 className="subcozylandheading">
          🌍 CozyLand is where you can find your neighbors and check where your <br /> 
          Cozy Home is located. Check out now your neighbors and your <br /> 
          neighborhood.
        </h3> 
        <div className="imgdiv">
          <img 
            className="midimg"
            src="https://www.cozyhomenft.com/static/media/cozyland.a2d5e157.png"
            alt=""
          />
        </div>
        <div className="btndiv">
          <button className="btncozyland">COZYLAND SOON!</button>
        </div>
      </div>
    </div>
  );
}

export default CozyLand;
