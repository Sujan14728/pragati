import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import skills from "../../mockapi/skills";
import { useSpeechSynthesis } from "react-speech-kit";
import signs from "../../mockapi/signs";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 240vh;
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

const SkillsContainer = styled.div`
  position: relative;
  top: 70vh;
  /* border: 1px solid black; */
  width: 100vw;
  height: 60vh;
  display: flex;
`;

const SkillsLeftContainer = styled.div`
  /* border: 1px solid black; */
  margin-left: 20px;
  width: 20%;
`;

const SkillsHeader = styled.h1``;

const SkillsRightContainer = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillsCard = styled.div`
  margin-right: 50px;
  position: relative;
  margin-left: 30px;
  margin-top: 30px;
  width: 250px;
  height: 200px;
  border-radius: 20px;
  background-color: #d4d4d4;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const SkillsImage = styled.img`
  position: relative;
  top: 5px;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const SkillsName = styled.p`
  font-size: 20px;
  position: absolute;
  bottom: -10px;
`;

const Quotes = styled.h1`
  position: absolute;
  top: 45vh;
  font-size: 40px;
  right: 50px;
  width: 30vw;
  /* border: 1px solid white; */
  color: white;
`;

const SkillsForm = styled.form`
  position: relative;
  top: 65vh;
  height: 40vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FormHeader = styled.h1``;

const Label = styled.label`
  font-size: 20px;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
`;

const FormContainer = styled.div``;

const EmailContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 10px;
  /* border: 1px solid black; */
`;

const CourseContainer = styled.div`
  display: flex;
  /* border: 1px solid black; */
`;

const Button = styled.button``;

const Alert = styled.div`
  font-size: 20px;

  color: ${(props) => (props.primary ? "red" : "green")};
`;

const SignLanguage = styled.div`
  position: relative;
  top: 65vh;
  height: 20vh;
  width: 80vw;
`;

const Skills = () => {
  const { speak } = useSpeechSynthesis();
  const [data, setData] = useState({
    email: "",
    course: "",
  });

  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    const courseData = {
      email: data.email,
      course: data.course,
    };
    axios
      .post("http://localhost:5000/api/user/course", courseData)
      .then((res) => {
        if (res.status === 200) {
          alert = (
            <>
              <Alert>
                Your Course has been submitted. It will be available to the
                website very soon!
              </Alert>
            </>
          );
        }
      })
      .catch((err) => {
        alert = (
          <>
            <Alert primary>Error!!!</Alert>
          </>
        );
      });
  };
  return (
    <>
      <Container>
        <TopNav />
        <Wrapper>
          <Quotes>Learning how to learn is life's most important skill</Quotes>
          <a href="#move">
            <Img src="/icons/downarrow.png" />
          </a>
          <ImgContainer
            src="/images/skills.jpg"
            // initial={{ y: "-100%" }}
            // animate={{ y: "0%" }}
            // transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <SkillsContainer id="move">
            <SkillsLeftContainer>
              <SkillsHeader>Skills:</SkillsHeader>
            </SkillsLeftContainer>
            <SkillsRightContainer>
              {skills.map((data, i) => (
                <SkillsCard key={i}>
                  <SkillsImage src={data.image} />
                  <SkillsName>{data.name}</SkillsName>
                </SkillsCard>
              ))}
            </SkillsRightContainer>
          </SkillsContainer>
          <SkillsForm>
            <FormHeader>
              Is there any other courses you are interested to enroll?
              {alert}
            </FormHeader>
            <FormContainer>
              <EmailContainer>
                <Label>Email: </Label>
                <Input
                  type="text"
                  name="email"
                  value={data.email}
                  id="email"
                  onChange={handleInput}
                />
              </EmailContainer>
              <CourseContainer>
                <Label>Course:</Label>
                <Input
                  type="text"
                  name="course"
                  value={data.course}
                  id="course"
                  onChange={handleInput}
                />
              </CourseContainer>
              <Button onClick={submit}>Submit</Button>
            </FormContainer>
          </SkillsForm>
          <SignLanguage>
            <div
              id="sign"
              className="home"
              style={{ position: "relative", top: "20vh" }}
            ></div>
            <h1>Basic Sign Language</h1>
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {signs.map((sign, index) => (
                <div>
                  <button
                    style={{
                      marginLeft: "10px",
                    }}
                    key={index}
                    onClick={() => {
                      speak({ text: sign.description });
                    }}
                  >
                    <a href="#sign"></a>
                    <Link>
                      <img
                        style={{
                          borderRadius: "5px",
                          margin: "5px",
                          height: "150px",
                          width: "150px",
                          objectFit: "contain",
                        }}
                        src={sign.img}
                      ></img>
                    </Link>
                    <br />
                  </button>
                </div>
              ))}
            </div>
          </SignLanguage>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Skills;
