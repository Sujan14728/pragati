import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid red; */
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  /* border: 1px solid black; */
  position: relative;
  top: 20px;
  justify-content: center;
`;

const NavUl = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const NavLi = styled.div``;

const TopNav = () => {
  return (
    <Container>
      <Wrapper>
        <NavUl>
          <NavLi>
            <Link to="/blind/home">Home</Link>
          </NavLi>
          <NavLi>
            <Link to="/blind/about">About us</Link>
          </NavLi>
          <NavLi>
            <Link to="/blind/news">News</Link>
          </NavLi>
          <NavLi>
            <Link to="/blind/entertainment">Entertainment</Link>
          </NavLi>
          <NavLi>
            <Link to="/blind/skills">Skills</Link>
          </NavLi>
          <NavLi>
            <Link to="/blind/consultant">Consultant</Link>
          </NavLi>
          <NavLi>
            <Link to="/blind/jobs">Jobs</Link>
          </NavLi>
        </NavUl>
      </Wrapper>
    </Container>
  );
};

export default TopNav;
