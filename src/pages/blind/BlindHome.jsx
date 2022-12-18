import React from "react";
import styled from "styled-components";
import BlindTopNav from "../../components/BlindTopNav";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: white;
  position: relative;
  top: 10vh;
  background: none;
  border: none;
  height: 50px;
  width: 100vw;
  font-size: 60px;
`;

const H2 = styled.button`
  background-color: white;
  position: relative;
  top: 15vh;
  background: none;
  border: none;
  height: 50px;
  width: 100vw;
  font-size: 30px;
`;

const BlindHome = () => {
  return (
    <>
      <BlindTopNav />
      <Container>
        <Button>Welcome to My Home Page:</Button>
        <H2>THE BLIND GUIDE: MAKING THE WORLD MORE ACCESSIBLE</H2>
      </Container>
    </>
  );
};

export default BlindHome;
