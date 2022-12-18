import { ArrowBack, Backspace } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  /* border: 1px solid black; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
`;

const TopContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  background-color: #666666aa;
  /* border: 1px solid black; */
  border-bottom-right-radius: 120px;
`;

const BacktoHome = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  width: fit-content;
  height: 70px;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;
const BacktoHomeWrapper = styled.div`
  left: 20px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  /* border: 1px solid black; */
`;

const Text = styled.h3`
  position: relative;
  height: fit-content;
  /* border: 1px solid black; */
`;

const Header = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 80px;
  font-weight: bold;
  /* border: 1px solid black; */
`;

const SignupContainer = styled.div`
  height: 50%;
  width: 80%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  /* border: 1px solid black; */
`;

const SignupHeader = styled.h1`
  font-size: 50px;
  /* border: 1px solid black; */
`;

const Form = styled.form`
  width: 80%;
  height: 400px;
  display: flex;
  justify-content: space-around;
  /* border: 1px solid black; */
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */
  flex: 1;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid blue; */
  flex: 1;
`;

const Label = styled.label`
  font-size: 20px;
`;

const Input = styled.input`
  height: 50px;
  width: 95%;
  font-size: 30px;
  /* background: ${(props) =>
    props.email
      ? "url('/icons/emailIcon.png')"
      : "url('/icons/passwordIcon.png')"}; */
  background: ${(props) => props.person && "url('/icons/personIcon.png')"};
  background: ${(props) => props.email && "url('/icons/emailIcon.png')"};
  background: ${(props) => props.password && "url('/icons/passwordIcon.png')"};
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: 99%;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
`;

const FirstNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LastNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  position: relative;
  top: 10px;
  width: 120px;
  height: 50px;
  font-size: 25px;
  align-self: center;
  background-color: #000000;
  color: white;
  border-radius: 25px;
  cursor: pointer;
  :hover {
    background-color: #000000d2;
  }
`;
const BottomContent = styled.div`
  position: relative;
  top: 20px;
`;

const Policy = styled.div`
  position: relative;
`;
const Redirect = styled.div`
  position: relative;
  top: 4px;
`;

const Forgot = styled.div`
  position: relative;
  top: 4px;
`;

const Signup = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [data, setData] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const submit = (e) => {
    e.preventDefault();
    const newUser = {
      fname: data.fname,
      lname: data.lname,
      username: data.username,
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:5000/api/user/newuser", newUser)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          window.location.href = "http://localhost:3000/login";
          console.log("hello");
        }
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  return (
    <Container>
      <Wrapper>
        <TopContainer>
          <BacktoHome>
            <Link to="/home">
              <BacktoHomeWrapper>
                <ArrowBack />
                <Text>Back to Home page</Text>
              </BacktoHomeWrapper>
            </Link>
          </BacktoHome>
          <Header>Welcome To Our Website</Header>
        </TopContainer>
        <SignupContainer>
          <SignupHeader>Sign Up</SignupHeader>
          <Form>
            <LeftContainer>
              <FirstNameContainer>
                <Label>First Name:</Label>
                <Input
                  ref={inputRef}
                  person
                  type="text"
                  required
                  id="fname"
                  value={data.fname}
                  placeholder="First Name"
                  name="fname"
                  onChange={(e) => handle(e)}
                />
              </FirstNameContainer>
              <EmailContainer>
                <Label>Email:</Label>
                <Input
                  type="email"
                  email
                  required
                  id="email"
                  value={data.email}
                  placeholder="Email"
                  name="email"
                  onChange={(e) => handle(e)}
                />
              </EmailContainer>
              <CPasswordContainer>
                <Label>Confirm Password:</Label>
                <Input
                  type="password"
                  password
                  required
                  id="cpassword"
                  value={data.cpassword}
                  placeholder="Confirm Password"
                  name="cpassword"
                  onChange={(e) => handle(e)}
                />
              </CPasswordContainer>
            </LeftContainer>
            <RightContainer>
              <LastNameContainer>
                <Label>Last Name:</Label>
                <Input
                  type="text"
                  person
                  required
                  id="lname"
                  value={data.lname}
                  placeholder="Last Name"
                  name="lname"
                  onChange={(e) => handle(e)}
                />
              </LastNameContainer>
              <PasswordContainer>
                <Label type="password">Password:</Label>
                <Input
                  password
                  type="password"
                  required
                  id="password"
                  value={data.password}
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handle(e)}
                />
              </PasswordContainer>

              <Button onClick={submit}>Sign Up</Button>
              <BottomContent>
                <Policy>
                  <input type="checkbox" required /> I have read and accepted
                  the{" "}
                  <Link to="/privary-policy">
                    <b>Privacy Policy</b>
                  </Link>
                </Policy>
                <Link to="/login">
                  <Redirect>Already have an account?</Redirect>
                </Link>
                <Link>
                  <Forgot>Forgot Password?</Forgot>
                </Link>
              </BottomContent>
            </RightContainer>
          </Form>
        </SignupContainer>
      </Wrapper>
    </Container>
  );
};

export default Signup;
