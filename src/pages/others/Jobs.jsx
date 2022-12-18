import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import jobs from "../../mockapi/jobs";

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
`;

const JobsContainer = styled.div`
  display: flex;
  position: absolute;
  top: 100vh;
  /* border: 1px solid black; */
`;

const JobsHeader = styled.h1`
  /* flex: 1; */

  flex-direction: column;
  /* border: 1px solid black; */
`;

const JobsCardContainer = styled.div`
  /* flex: 2; */

  display: flex;
  justify-content: center;
  height: 60vh;
  flex-wrap: wrap;
  /* border: 1px solid black; */
`;

const JobsCard = styled.div`
  margin: 10px 50px;
  background-color: #dcdcdc;
  border-radius: 20px;
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid black; */
`;
const JobsContainerTop = styled.div`
  position: relative;
  top: 20px;
  display: flex;
`;

const Button = styled.button`
  position: relative;
  bottom: 10px;
  border-radius: 20px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  width: 150px;
  height: 30px;
  align-self: center;
  :hover {
    background-color: #3e3d3d;
  }
`;

const Img = styled.img`
  margin-left: 10px;
  height: 100px;
  width: 100px;
`;

const JobsDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  margin-left: 40px;
  /* border: 1px solid black; */
`;

const JobsPost = styled.h3`
  line-height: 0;
  /* border: 1px solid black; */
`;

const JobsCompany = styled.div`
  /* border: 1px solid black; */
`;

const JobsLocation = styled.div`
  /* border: 1px solid black; */
`;

const JobsSalary = styled.div`
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

const Jobs = () => {
  return (
    <>
      <Container>
        <TopNav />
        <Wrapper>
          <a href="#move">
            <Image src="/icons/downarrow.png" />
          </a>
          <ImgContainer src="/images/jobs.jpg" />

          <JobsContainer id="move">
            <JobsHeader>Vacancy: </JobsHeader>
            <JobsCardContainer>
              {jobs.map((data) => (
                <JobsCard>
                  <JobsContainerTop>
                    <Img src="/icons/job.png"></Img>
                    <JobsDetail>
                      <JobsPost>{data.post}</JobsPost>
                      <JobsCompany>
                        <img
                          src="/icons/company.png"
                          alt="company img"
                          style={{ width: "20px", height: "20px" }}
                        />
                        {data.company}
                      </JobsCompany>
                      <JobsLocation>
                        <img
                          src="/icons/location.png"
                          alt="location img"
                          style={{ width: "20px", height: "20px" }}
                        />
                        {data.location}
                      </JobsLocation>
                      <JobsSalary>
                        <img
                          src="/icons/salary.png"
                          alt="salary img"
                          style={{ width: "20px", height: "20px" }}
                        />
                        {data.salary}
                      </JobsSalary>
                    </JobsDetail>
                  </JobsContainerTop>
                  <Button>Apply For Job</Button>
                </JobsCard>
              ))}
            </JobsCardContainer>
          </JobsContainer>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Jobs;
