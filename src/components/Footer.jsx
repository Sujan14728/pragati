import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 13, 16);
  color: white;
`;

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid white; */
`;

const TopFooter = styled.div`
  /* border: 1px solid white; */
  height: 50px;
`;

const Logo = styled.h1`
  position: relative;
  top: -30px;
  color: white;
  font-size: 40px;
`;

const CenterFooter = styled.div`
  position: relative;
  height: 400px;
  /* border: 1px solid white; */
  display: flex;
`;

const Header = styled.div`
  font-size: 26px;
  color: white;
  font-weight: 500;
`;

const SocialContainer = styled.div`
  /* border: 1px solid white; */

  flex: 1;
`;

const SocialAccounts = styled.div`
  position: relative;
  top: 10px;
  /* border: 1px solid red; */
`;

const Facebook = styled.img`
  background-color: #ffffff;
  /* background-color: white; */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
`;
const Instagram = styled.img`
  background-color: #ffffff;

  /* background-color: white; */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
`;
const LinkedIn = styled.img`
  background-color: #ffffff;

  /* background-color: white; */
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const LinksContainer = styled.div`
  position: relative;
  flex: 3;
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinksWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  width: 80%;
`;

const TopLinks = styled.div`
  display: flex;
  /* border: 1px solid white; */
  flex: 1;
`;

const BottomLinks = styled.div`
  color: white;
  display: flex;
  /* border: 1px solid white; */
  flex: 1;
`;

const LinkHeader = styled.h1`
  position: relative;
  top: 0;
  font-size: 28px;
  color: white;
  line-height: 20px;
`;

const LinkNav = styled.div`
  /* border: 1px solid white; */
  position: relative;
  width: 100%;
  color: #aca9a9;
  font-size: 20px;
  /* border: 1px solid white; */
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid white; */
`;

const Link1 = styled.div`
  flex: 1;
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Link2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 1px solid white; */
`;
const Link3 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 1px solid white; */
`;
const Link4 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 1px solid white; */
`;
const Link5 = styled.div`
  flex: 1;

  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Link6 = styled.div`
  flex: 1;

  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomFooter = styled.div`
  /* border: 1px solid white; */
  height: 200px;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  /* border: 1px solid white; */
`;

const Copyright = styled.div``;
const CompanyName = styled.h1`
  color: white;
`;

const Right = styled.div`
  flex: 3;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <TopFooter>
          <Logo>Pragati.</Logo>
        </TopFooter>
        <CenterFooter>
          <SocialContainer>
            <Header>Follow us</Header>
            <SocialAccounts>
              <Facebook src="/icons/facebook.png"></Facebook>
              <Instagram src="/icons/instagram.png"></Instagram>
              <LinkedIn src="/icons/linkedin.png"></LinkedIn>
            </SocialAccounts>
          </SocialContainer>
          <LinksContainer>
            <LinksWrapper>
              <TopLinks>
                <Link1>
                  <LinkHeader>Doctors</LinkHeader>
                  <Links>
                    <Link>
                      <LinkNav>Available Doctors</LinkNav>
                    </Link>
                    <Link>
                      <LinkNav>Propose an Appoinment</LinkNav>
                    </Link>
                  </Links>
                </Link1>
                <Link2>
                  <LinkHeader>Jobs</LinkHeader>
                  <Links>
                    <Link to="/jobs">
                      <LinkNav>Vacancy</LinkNav>
                    </Link>
                    <Link>
                      <LinkNav>Submit your job proposal</LinkNav>
                    </Link>
                  </Links>
                </Link2>
                <Link3>
                  <LinkHeader>Company</LinkHeader>
                  <Links>
                    <Link to="/about">
                      <LinkNav>About us</LinkNav>
                    </Link>
                    <Link to="/news">
                      <LinkNav>News</LinkNav>
                    </Link>
                    <Link to="/skills">
                      <LinkNav>Skills</LinkNav>
                    </Link>
                  </Links>
                </Link3>
              </TopLinks>
              <BottomLinks>
                <Link4>
                  <LinkHeader>My Account</LinkHeader>
                  <Links>
                    <Link to="/login">
                      <LinkNav>Login</LinkNav>
                    </Link>
                    <Link to="register">
                      <LinkNav>Register</LinkNav>
                    </Link>
                    <Link to="/dashboard">
                      <LinkNav>Dashboard</LinkNav>
                    </Link>
                  </Links>
                </Link4>
                <Link5></Link5>
                <Link6></Link6>
              </BottomLinks>
            </LinksWrapper>
          </LinksContainer>
        </CenterFooter>
        <BottomFooter>
          <Left>
            <Copyright>
              <CompanyName>©Pragati 2022</CompanyName>
            </Copyright>
          </Left>
          <Right>
            <p
              style={{
                fontSize: "16px",
                color: "white",
                font: "20px",
                position: "relative",
                top: "20px",
              }}
            >
              ©Pragati is a platform where all kinds of specially abled people
              can aquire different knowledge and skills. They will also be able
              to use our heath facilities from some of our best doctors
              digitally. In addition to that, users can also search for job
              vacancies according to their skills.
            </p>
          </Right>
        </BottomFooter>
      </Wrapper>
    </Container>
  );
};

export default Footer;
