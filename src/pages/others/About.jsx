import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";

const Container = styled.div`
  height: 150vh;
`;

const Wrapper = styled.div``;

const ImgContainer = styled.img`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 95vh;
  z-index: -10;
  border-bottom-right-radius: 300px;
  object-fit: cover;
  background-color: #b5b4b4;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
  position: absolute;
  right: 30vw;
  top: 80vh;
  cursor: pointer;
`;

const AboutContainer = styled.div`
  width: 100vw;
  display: flex;
  position: absolute;
  top: 100vh;
  /* border: 1px solid black; */
`;

const AboutLeftContainer = styled.div`
  position: relative;
  left: 30px;
  width: 25%;
  height: 40vh;
  /* border: 1px solid black; */
`;

const Header = styled.div`
  font-size: 24px;
`;

const AboutRightContainer = styled.div`
  position: relative;
  left: 60px;
  width: 75%;
  height: 40vh;
  /* border: 1px solid black; */
`;

const AddressContainer = styled.div``;

const AddressHeader = styled.h1`
  font-size: 20px;
  line-height: 5px;
`;

const AddressLi = styled.li``;

const ContactContainer = styled.div``;

const ContactHeader = styled.h1`
  font-size: 20px;
  line-height: 5px;
`;

const ContactLi = styled.li``;

const DirectorContainer = styled.div``;

const DirectorHeader = styled.h1`
  font-size: 20px;
  line-height: 5px;
`;

const DirectorLi = styled.li``;

const About = () => {
  return (
    <>
      <Container>
        <TopNav />
        <Wrapper>
          <a href="#move">
            <Img src="/icons/downarrow.png" />
          </a>
          <ImgContainer
            src="/images/about.jpg"
            // initial={{ y: "-100%" }}
            // animate={{ y: "0%" }}
            // transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <AboutContainer id="move">
            <AboutLeftContainer>
              <Header>
                <b>About Us.</b>
              </Header>
            </AboutLeftContainer>
            <AboutRightContainer>
              <AddressContainer>
                <AddressHeader>Address</AddressHeader>
                <AddressLi>Pragati</AddressLi>
                <AddressLi>ERC</AddressLi>
                <AddressLi>Dharan-8</AddressLi>
                <AddressLi>Sunsari</AddressLi>
                <AddressLi>Nepal</AddressLi>
              </AddressContainer>
              <ContactContainer>
                <ContactHeader>Contact</ContactHeader>
                <ContactLi>Phone: 9812345678</ContactLi>
                <ContactLi>Email: pragati123@gmail.com</ContactLi>
              </ContactContainer>
              <DirectorContainer>
                <DirectorHeader>Managing Director:</DirectorHeader>
                <DirectorLi>
                  Name: <b>Er.</b> Sonu Kumar
                </DirectorLi>
                <DirectorLi>Phone: 9812345678</DirectorLi>
                <DirectorLi>Age: 32</DirectorLi>
              </DirectorContainer>
            </AboutRightContainer>
          </AboutContainer>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default About;
