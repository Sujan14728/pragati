import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { container, item } from "../../animation";
import axios from "axios";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";
// import { jobsimg } from "../../../public/images/home.jpg";

const Container = styled(motion.div)`
  /* position: relative; */
  min-height: 200vh;
  width: 100vw;
  background-color: var(--home-bgcolor);
`;

const Wrapper = styled.div`
  /* position: relative; */
`;

const ImgContainer = styled(motion.img)`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 95vh;
  z-index: -10;
  border-bottom-right-radius: 300px;
  object-fit: cover;
  background-color: #666;
`;

const Quotes = styled.h1`
  position: absolute;
  top: 45vh;
  font-size: 40px;
  right: 50px;
  width: 30vw;
  /* border: 1px solid white; */
`;

const Second = styled.div`
  position: absolute;
  top: 100vh;
  /* border: 1px solid red; */
  width: 100vw;
  height: 100vh;
`;

const QuoteHome = styled.h1`
  position: absolute;
  top: 150px;
  font-size: 60px;
  right: 0;
  width: 40vw;
`;

const QuotesImage = styled.img`
  position: relative;
  top: 60px;
  left: 60px;
  width: 800px;
  height: 600px;
  border-radius: 20px;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
  position: absolute;
  right: 30vw;
  top: 80vh;
  cursor: pointer;
`;

const Home = () => {
  return (
    <>
      <TopNav />
      <Container>
        <Wrapper>
          <Quotes>
            We rise to great heights by a winding staircase of small steps.
          </Quotes>
          <a href="#move">
            <Img src="/icons/downarrow.png" />
          </a>
          <ImgContainer src="/images/home.jpg" />

          <Second id="move">
            <QuotesImage src="images/future.jpg" />
            <QuoteHome>
              The future belongs to those who learn more skills and combine them
              in creative ways
            </QuoteHome>
          </Second>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
