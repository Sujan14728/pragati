import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import RightNav from "./RightNav";

const Container = styled.div`
  position: relative;
  height: 30vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  /* overflow-x: hidden; */
  /* border: 1px solid black; */
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 90%;
  /* border: 1px solid black; */
`;

const LeftWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1;
  /* border: 1px solid red; */
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;

const Logo = styled.img`
  width: 450px;
  height: 300px;
  /* border: 1px solid black; */
`;

const RightWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
`;

const Top = styled.div`
  position: relative;
  flex: 2;
  /* border: 1px solid black; */
`;

const NavUl = styled.div`
  margin-left: 150px;
  position: absolute;
  height: 60px;
  bottom: 0;
  width: 50%;
  height: fit-content;
  display: flex;
  /* border: 1px solid black; */
`;

const NavLi = styled.div`
  top: 20px;
  margin-right: 80px;
  font-size: 24px;
  margin-top: 10px;
  height: 50px;
  /* border: 1px solid black; */
`;

const NavLink = styled.div``;

const LinkText = styled.span`
  color: #ffffff;
  display: inline-block;
  margin: 0;
  text-transform: uppercase;
  :after {
    display: block;
    content: "";
    border-bottom: solid 2px #5f5f5f;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  :hover:after {
    transform: scale(1);
    border-bottom: solid 2px #6f6f6f;
  }
  :hover {
    color: #000000;
  }
`;

const NavIcon = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  height: 60px;
  width: 180px;
  /* border: 1px solid black; */
`;

const MenuContainer = styled.div`
  margin-right: 30px;
`;

const MenuIcon = styled.img`
  height: 60px;
  width: 60px;
`;
const MenuIcon2 = styled.img`
  height: 60px;
  width: 60px;
`;

const Bottom = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;

const H1 = styled.h1`
  width: 180px;
  /* border: 1px solid black; */
`;

const RightNavContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vh;
  background-color: #ffffff;
  color: white;
  z-index: 10;
`;

const AuthContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  right: 100px;
  top: 30px;
  height: 100px;
  width: 40%;
  /* border: 1px solid red; */
`;
const MenuClose = styled.img`
  /* position: absolute; */
  height: 60px;
  width: 60px;
  /* right: 20px; */
  border-radius: 50%;
  object-fit: cover;
  z-index: 100;
  cursor: pointer;
  /* border: 1px solid red; */
`;

const AuthWrapper = styled.div`
  /* border: 1px solid red; */
  position: relative;
  height: fit-content;
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

const LoginButton = styled.button`
  background-color: #000000;
  color: white;
  width: 100px;
  border-radius: 15px;
  padding: 10px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: #000000bd;
  }
`;
const LogoutButton = styled.button`
  position: absolute;
  top: -20px;
  right: 0;
  background-color: #000000;
  color: white;
  width: 100px;
  border-radius: 15px;
  padding: 10px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: #000000bd;
  }
`;

const SignupButton = styled.button`
  background-color: #000000;
  color: white;
  width: 100px;
  border-radius: 15px;
  padding: 10px;
  border: none;
  font-size: 20px;
  cursor: pointer;

  :hover {
    background-color: #000000bd;
  }
`;

//framer-motion for right nav container
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeUser, setActiveUser] = useState({});

  const fetchActiveUser = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/user/activeuser"
    );
    setActiveUser(data);
  };

  const handleLogout = async () => {
    await axios.get(`http://localhost:5000/api/user/logout/${activeUser._id}`);
  };

  let button;
  if (activeUser === null) {
    button = (
      <>
        <AuthWrapper>
          <Link to="/login">
            <LoginButton>Login</LoginButton>
          </Link>
          <Link to="/signup">
            <SignupButton>Signup</SignupButton>
          </Link>
        </AuthWrapper>
      </>
    );
  } else {
    button = (
      <>
        <AuthWrapper>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </AuthWrapper>
      </>
    );
  }

  fetchActiveUser();

  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <LogoContainer>
            <Link to="/home">
              <Logo src="/images/pragati.png" />
            </Link>
          </LogoContainer>
        </LeftWrapper>
        <RightWrapper>
          <Top>
            <NavUl>
              <NavLi>
                <NavLink>
                  <Link to="/about">
                    <LinkText>About</LinkText>
                  </Link>
                </NavLink>
              </NavLi>
              <NavLi>
                <NavLink>
                  <Link to="/news">
                    <LinkText>News</LinkText>
                  </Link>
                </NavLink>
              </NavLi>
              <NavLi>
                <NavLink>
                  <Link to="/skills">
                    <LinkText>Skills</LinkText>
                  </Link>
                </NavLink>
              </NavLi>
              <NavLi>
                <NavLink>
                  <Link to="/consultant">
                    <LinkText>Consultant</LinkText>
                  </Link>
                </NavLink>
              </NavLi>

              <NavLi>
                <NavLink>
                  <Link to="/jobs">
                    <LinkText>Jobs</LinkText>
                  </Link>
                </NavLink>
              </NavLi>
            </NavUl>
            <NavIcon>
              {/* <MenuContainer></MenuContainer> */}
              <MenuContainer>
                <MenuIcon2
                  src="/icons/menuIcon.png"
                  onClick={() => setIsOpen(true)}
                />
              </MenuContainer>
            </NavIcon>
          </Top>
          <Bottom></Bottom>
        </RightWrapper>
      </Wrapper>
      <RightNavContainer
        initial={{ x: "100%" }}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <RightNav />
        <AuthContainer>
          {button}
          {/* <AuthWrapper>
            <Link to="/login">
              <LoginButton>Login</LoginButton>
            </Link>
            <Link to="/signup">
              <SignupButton>Signup</SignupButton>
            </Link>
          </AuthWrapper> */}
          <MenuClose
            src="/icons/menuClose.png"
            onClick={() => setIsOpen(false)}
          />
        </AuthContainer>
      </RightNavContainer>
    </Container>
  );
};

export default TopNav;
