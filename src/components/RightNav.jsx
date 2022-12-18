import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 100%;
  position: relative;
  color: white;
  /* border: 1px solid black; */
`;

const Wrapper = styled.div``;

const RightNavContainer = styled.div`
  position: relative;
  top: 15vh;
  width: 50vw;
  height: 70vh;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
`;

const RightTopContainer = styled.div`
  height: 100%;
  flex: 1;
  /* border: 1px solid black; */
  display: flex;
`;

const Container1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  flex-direction: column;
  /* border: 1px solid black; */
`;
const Container2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  flex-direction: column;
  /* border: 1px solid black; */
`;

const RightBottomContainer = styled.div`
  flex: 1;
  /* border: 1px solid black; */
  display: flex;
`;

const Container3 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  flex-direction: column;
  /* border: 1px solid black; */
`;
const Container4 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  flex-direction: column;
  /* border: 1px solid black; */
`;

const NavHeader = styled.h1`
  font-size: 40px;
  margin-left: 100px;
`;

const Links = styled.div``;

const NavLinks = styled.div`
  font-size: 20px;
  margin-left: 100px;
`;

const RightNav = () => {
  return (
    <Container>
      <Wrapper>
        <RightNavContainer>
          <RightTopContainer>
            <Container1>
              <NavHeader>Doctors</NavHeader>
              <Links>
                <Link to="/doctors/available">
                  <NavLinks>Available Doctors</NavLinks>
                </Link>
                <Link to="/doctors/appoinment">
                  <NavLinks>Propose an Appoinment</NavLinks>
                </Link>
              </Links>
            </Container1>
            <Container2>
              <NavHeader>Jobs</NavHeader>
              <Links>
                <Link to="/jobs">
                  <NavLinks>Vacancy</NavLinks>
                </Link>
                <Link to="/jobs/submitvacancy">
                  <NavLinks>Submit your job proposal</NavLinks>
                </Link>
              </Links>
            </Container2>
          </RightTopContainer>
          <RightBottomContainer>
            <Container3>
              <NavHeader>Company</NavHeader>
              <Links>
                <Link to="/about">
                  <NavLinks>About us</NavLinks>
                </Link>
                <Link to="/news">
                  <NavLinks>News</NavLinks>
                </Link>
                <Link to="/skills">
                  <NavLinks>Skills</NavLinks>
                </Link>
              </Links>
            </Container3>
            <Container4 style={{ position: "relative", top: "-20px" }}>
              <NavHeader>My Account</NavHeader>
              <Links>
                <Link to="/dashboard">
                  <NavLinks>Dashboard</NavLinks>
                </Link>
                <Link>
                  <NavLinks></NavLinks>
                </Link>
                <Link>
                  <NavLinks></NavLinks>
                </Link>
              </Links>
            </Container4>
          </RightBottomContainer>
        </RightNavContainer>
      </Wrapper>
    </Container>
  );
};

export default RightNav;
