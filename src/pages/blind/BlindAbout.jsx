import { height } from "@mui/system";
import React from "react";
import styled from "styled-components";
import BlindTopNav from "../../components/BlindTopNav";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const BlindAbout = () => {
  return (
    <>
      <BlindTopNav />
      <Container>
        <div
          className="about"
          style={{
            position: "relative",
            top: "50px",
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "80vh",
          }}
        >
          <button
            style={{
              border: "none",
              fontSize: "50px",
              position: "relative",
              top: "50px",
            }}
          >
            <b>Company Name:</b>Pragati
          </button>
          <button
            style={{
              border: "none",
              fontSize: "24px",
              position: "relative",
              top: "50px",
            }}
          >
            <b>Company's Details:</b>Pragati is a serviced based company which
            provide the solution of all the problems that's disabled people are
            facing in their daily life.
          </button>
          <button style={{ border: "none" }}>
            <b>Address:</b>Dharan
          </button>
          <button
            style={{
              border: "none",
              position: "relative",
              top: "40px",
              fontSize: "30px",
            }}
          >
            <b>Services:</b>
            <section style={{ fontSize: "24px", height: "10vh" }}>
              Number 1:Consultant{" "}
            </section>
            <section style={{ fontSize: "24px", height: "10vh" }}>
              Number 2:News portal{" "}
            </section>
            <section style={{ fontSize: "24px", height: "10vh" }}>
              Number 3: Skills{" "}
            </section>
            <section style={{ fontSize: "24px", height: "10vh" }}>
              Number 4:Entertainment{" "}
            </section>
            <section style={{ fontSize: "24px", height: "10vh" }}>
              Number 5:Jobs{" "}
            </section>
          </button>
        </div>
      </Container>
    </>
  );
};

export default BlindAbout;
