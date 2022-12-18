import React from "react";
import BlindTopNav from "../../components/BlindTopNav";

import "./blindentertainment.css";

const BlindEntertainment = () => {
  return (
    <>
      <BlindTopNav />
      <div className="container">
        <p style={{ margin: "£0%" }}>
          You are welcome to the Entertainment section!!
        </p>
      </div>

      <div className="music" style={{ dispaly: "flex", width: "100vw" }}>
        <li>
          <img src="/images/music1.png" alt="" />
          <a href="https://www.youtube.com/channel/UChUNWRptEUE5b1aye2OnVgg">
            <br />
            <p style={{ fontSize: "30px" }}>You are listening music</p>
          </a>
        </li>

        <li>
          <img src="/images/card1.jpg" alt="" />
          <a href="https://playingcards.io/">
            <br />
            <p style={{ fontSize: "30px" }}>Play Card</p>
          </a>
        </li>

        <li>
          <img src="/images/chess1.png" alt="" />
          <a href="https://www.chess.com/">
            <br />
            <p style={{ fontSize: "30px" }}>Play Chess</p>
          </a>
        </li>
      </div>
    </>
  );
};

export default BlindEntertainment;
