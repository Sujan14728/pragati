import React, { useState, useEffect } from "react";
import "./blindconsultant.css";
import AgoraUIKit from "agora-react-uikit";
import TopNav from "../../components/BlindTopNav";

const BlindConsultant = () => {
  const [videocall, setvideocall] = useState(false);
  const [sec, setsec] = useState(0);
  const [hr, sethr] = useState(0);
  const [min, setmin] = useState(0);
  const rtcProps = {
    appId: "84acd59079ce455c964d396ec6649b77",
    token:
      "007eJxTYJhuIxt1dfUh/6cKi7ZHvFXY28YueNbptpViW0lLveWd3VMUGCxMEpNTTC0NzC2TU01MTZMtzUxSjC3NUpPNzEwsk8zNr5TNTm4IZGRwnRjMysgAgSA+G0NyYk5ObioDAwCFyx/3",
    channel: "callme",
  };

  useEffect(() => {
    setTimeout(() => {
      setsec(sec + 1);
      if (sec == 60) {
        setminute();
      }

      if (min == 60) {
        sethour();
      }
    }, 1000);
  }, [sec]);

  const setminute = () => {
    setmin(min + 1);
    setsec(0);
  };

  const sethour = () => {
    sethr(hr + 1);
    setsec(0);
    setmin(0);
  };

  const callbacks = {
    EndCall: () => {
      setvideocall(false);
    },
  };

  const Doctor = [
    {
      id: 0,
      name: "Dr. Alok Dungel",
      specialist: "General physician",
      image: "/images/doctor1.png",
    },
    {
      id: 0,
      name: "Dr. Alok Dungel",
      specialist: "Internal medicine",
      image: "/images/doctor1.png",
    },
  ];

  return (
    <>
      <TopNav />
      <div className="consultant">
        <p style={{ marginLeft: "10%", textDecoration: "underline" }}>
          Find A Doctor
        </p>
      </div>

      <div className="consultant"></div>

      <div className="listdoctor">
        {Doctor.map((val) => {
          return (
            <>
              <img
                style={{ marginLeft: "50%", width: "200px" }}
                src={val.image}
                alt="photo"
              />
              <br />
              <div className="imag">
                <p
                  style={{
                    fontSize: "40px",
                    marginLeft: "10%",
                    fontWeight: "bolder",
                  }}
                >
                  {val.name}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    marginLeft: "10%",
                    marginTop: "-2%",
                  }}
                >
                  {val.specialist}
                </p>
              </div>

              {videocall ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      width: "70wh",
                      height: "70vh",
                      marginLeft: "10%",
                    }}
                  >
                    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
                  </div>
                  <div
                    style={{
                      borderRadius: "50px",
                      marginTop: "5%",
                      marginRight: "40%",
                      marginLeft: "40%",
                      boxShadow: "3px 3px 3px green",
                      textAlign: "center",
                    }}
                    className="time"
                  >
                    {" "}
                    {hr}:{min}: {sec}
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="callme"
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "black",
                      border: "none",
                      marginLeft: "50%",
                      marginTop: "-15px",
                      color: "white",
                    }}
                    onClick={() => setvideocall(true)}
                  >
                    call me
                  </button>
                </>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default BlindConsultant;
