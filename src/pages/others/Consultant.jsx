import AgoraUIKit from "agora-react-uikit";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import doctors from "../../mockapi/doctors";

const Container = styled.div`
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;

  /* border: 1px solid black; */
`;

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

const DoctorContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100vw;
  top: 100vh;
  /* border: 1px solid black; */
`;

const DoctorHeader = styled.h1`
  /* flex: 1; */
  display: flex;
  /* border: 1px solid black; */
`;

const DoctorCardContainer = styled.div`
  /* flex: 2; */
  display: flex;
  justify-content: center;
  height: 60vh;
  flex-wrap: wrap;
  /* border: 1px solid black; */
`;

const DoctorCard = styled.div`
  margin: 10px 50px;
  background-color: #dcdcdc;
  border-radius: 20px;
  width: 350px;
  height: 200px;
  display: flex;
  /* border: 1px solid black; */
`;

const DoctorCardLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid black; */
`;

const Img = styled.img`
  position: relative;
  top: 10px;
  height: 100px;
  width: 100px;
`;

const VideoCall = styled.button`
  align-self: center;
  position: relative;
  margin-left: 15px;
  bottom: 20px;
  border: none;
  background-color: black;
  color: white;
  height: 40px;
  width: 80px;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    background-color: #4b4848;
  }
`;

const DoctorCardRight = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
`;

const DoctorName = styled.h3`
  flex: 1;
  display: flex;
  align-items: center;
  /* border: 1px solid black; */
`;
const DoctorWork = styled.div`
  flex: 1;

  /* border: 1px solid black; */
`;
const DoctorRecommend = styled.div`
  flex: 1;

  /* border: 1px solid black; */
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  position: absolute;
  right: 30vw;
  top: 80vh;
  cursor: pointer;
`;

const Consultant = () => {
  const result = doctors.map((data) => {
    console.log(data);
  });

  return (
    <>
      <Container>
        <TopNav />
        <Wrapper>
          <a href="#move">
            <Image src="/icons/downarrow.png" />
          </a>
          <ImgContainer
            src="/images/consultancy.jpg"
            // initial={{ y: "-100%" }}
            // animate={{ y: "0%" }}
            // transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <DoctorContainer id="move">
            <DoctorHeader>Doctors: </DoctorHeader>
            <DoctorCardContainer>
              {doctors.map((data, i) => (
                <DoctorCard key={i}>
                  <DoctorCardLeft>
                    <Img src="/images/doctor.png"></Img>
                    <Link to={`/consultant/videochat/${data.id}`}>
                      <VideoCall>Call Now</VideoCall>
                    </Link>
                  </DoctorCardLeft>
                  <DoctorCardRight>
                    <DoctorName>{data.name}</DoctorName>
                    <DoctorWork>
                      <img
                        src="/icons/work.png"
                        alt="work image"
                        style={{ height: "20px", width: "20px" }}
                      />
                      {data.speciality}
                    </DoctorWork>
                    <DoctorRecommend>
                      <img
                        src="/icons/like.png"
                        alt="like image"
                        style={{ height: "20px", width: "20px" }}
                      />
                      {data.recommend} person recommmended
                    </DoctorRecommend>
                  </DoctorCardRight>
                </DoctorCard>
              ))}
            </DoctorCardContainer>
          </DoctorContainer>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Consultant;
