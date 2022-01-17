import React from "react";
import "./Landing.css";
import HomeOne from "../../Components/HomeOne/HomeOne";
import MetaHome from "../../Components/MetaHome/MetaHome";
import Navbar from "../../Components/Navbar/Navbar";
// import CozyLand from "../../Components/CozyLand/CozyLand";
import Collection from "../../Components/Collection/Collectio";
import CollectionOne from "../../Components/CollectionOne/CollectionOne";
import CollectionTwo from "../../Components/CollectionTwo/CollectionTwo";
import RoadMap from "../../Components/RoadMap/RaodMap";

function CozyHome() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "8rem" }}>
        <HomeOne />
        <div>
          <MetaHome />
        </div>
        <div>
          <Collection />
        </div>
        <div>
          <CollectionOne />
        </div>
        <div>
          <CollectionTwo />
        </div>
        <div>
          <RoadMap />
        </div>
      </div>
    </div>
  );
}

export default CozyHome;
