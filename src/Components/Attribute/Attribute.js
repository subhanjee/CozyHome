import React from "react";
import "./attribute.css";

function Attribute() {
  return (
    <div className="Attributediv">
      <div>
        <h1 className="attribueheading">Attribute</h1>
        <h2 className="attribueheading1">
          Cozy Home designs consist of 7 different attributes. Each attribute <br />
          has a different number of designed features with varying rarity <br /> scores. Hover
          on each attribute to see how many different features <br /> exist 🛸.
        </h2>
        <div className="Attributelogodiv">
          <img
            className="Attributelogo"
            src="https://www.cozyhomenft.com/static/media/roof.f434cb2a.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Attribute;
