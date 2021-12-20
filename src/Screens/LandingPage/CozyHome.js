import React from "react";
import HomeOne from "../../Components/HomeOne/HomeOne";
import MetaHome from "../../Components/MetaHome/MetaHome";
import Navbar from "../../Components/Navbar/Navbar";
import CozyLand from "../../Components/CozyLand/CozyLand";
import "./Landing.css";
import Collection from "../../Components/Collection/Collectio";
import CollectionOne from "../../Components/CollectionOne/CollectionOne";
import Rarity from "../../Components/Rarity/Rarity";
import CollectionTwo from "../../Components/CollectionTwo/CollectionTwo";
import PreSale from "../../Components/PreSale/PreSale";
import Attribute from "../../Components/Attribute/Attribute";
import Team from "../../Components/Team/Team";
import RoadMap from '../../Components/RoadMap/RaodMap';

function CozyHome() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "8rem" }}>
        <HomeOne />
        <div style={{ marginTop: "8rem" }}>
          <MetaHome />
        </div>
        <div style={{ marginTop: "8rem" }}>
          <CozyLand />
        </div>
        <div style={{ marginTop: "8rem" }}>
          <Collection />
        </div>
        <div style={{ marginTop: "8rem" }}>
          <CollectionOne />
        </div>
        <div style={{ marginTop: "8rem" }}>
          <Rarity />
        </div>
        <div style={{ marginTop: "8rem" }}>
          <CollectionTwo />
        </div>
        <div style={{ marginTop: "8rem" }}>
          <RoadMap/>
        </div>
        <div style={{ marginTop: "8rem" }}>
          
        </div>
        <div style={{ marginTop: "8rem" }}>
          <Attribute />
        </div>
        <div style={{ marginTop: "8rem" }}>
          <Team />
        </div>
      </div>
    </div>
  );
}

export default CozyHome;
