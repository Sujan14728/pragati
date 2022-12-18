import React, { useRef } from "react";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import "./blindjobs.css";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import BlindTopNav from "../../components/BlindTopNav";

import { useEffect } from "react";

const BlindJobs = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <BlindTopNav />
      <div className="jobdetail">
        <p>Find the perfect job acoording to your skill !!</p>
      </div>

      <div className="contact">
        <input
          ref={inputRef}
          style={{
            marginLeft: "40%",
            fontSize: "30px",
            textAlign: "center",
            border: "",
            width: "200px",
          }}
          type="text"
          placeholder="Find your job"
        />
        <KeyboardVoiceIcon />
      </div>

      <div
        className="job"
        style={{
          border: "1px solid red",
          margin: "0px 30%",
        }}
      >
        <a
          href=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Journalist</h1>
          <p>Salary : Fifty Thousand rupees</p>
          <p>Location : Dharan</p>
        </a>
      </div>

      <div
        className="job"
        style={{ border: "1px solid red", margin: "20px 30%" }}
      >
        <a
          href=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Musicians</h1>
          <p>Salary : Fourty Thousand rupees</p>
          <p>Location : Janakpur</p>
        </a>
      </div>

      <div
        className="job"
        style={{ border: "1px solid red", margin: "20px 30%" }}
      >
        <a
          href=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Chefs</h1>
          <p>Salary: One Lakh rupees</p>
          <p>Location:Ktm</p>
        </a>
      </div>

      <div
        className="job"
        style={{ border: "1px solid red", margin: "20px 30%" }}
      >
        <a
          href=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Counselor</h1>
          <p>Salary : Ninety Thousand rupees</p>
          <p>Location : Birgunj</p>
        </a>
      </div>
    </>
  );
};

export default BlindJobs;
