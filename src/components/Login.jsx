import { ArrowBack, Backspace } from "@mui/icons-material";
import axios from "axios";
import { motion } from "framer-motion";
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

const LoginContainer = styled.div`
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

const LoginHeader = styled.h1`
  font-size: 50px;
  /* border: 1px solid black; */
`;

const Error = styled.div`
  color: red;
`;

const Form = styled.form`
  width: 40%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* border: 1px solid black; */
`;

const Label = styled.label`
  font-size: 20px;
`;

const Input = styled.input`
  height: 50px;
  width: 90%;
  font-size: 30px;
  background: ${(props) =>
    props.email
      ? "url('/icons/emailIcon.png')"
      : "url('/icons/passwordIcon.png')"};
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: 99%;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
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

const BottomContent = styled.div``;

const Redirect = styled.span``;

const Login = () => {
  const [errStatus, setErrStatus] = useState();
  let error;

  //focusing on input field after page is refreshed or reload
  //starts here
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  //ends here

  //for submitting form to node server
  //starts here
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    const userData = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:5000/api/user/userlogin", userData)
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "http://localhost:3000/home";
        }
      })
      .catch((err) => {
        console.log("error:", err);
        if (err.response.status === 401) {
          setErrStatus(err.response.status);
        }
      });
  };
  //ends here

  //storing inputs in an object
  //starts here
  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  //ends here

  if (errStatus === 401) {
    error = <Error>Your email or password is incorrect!</Error>;
    // console.log("here");
  }

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
        <LoginContainer>
          <LoginHeader>Login</LoginHeader>
          {error}
          <Form>
            <EmailContainer>
              <Label>Email:</Label>
              <Input
                ref={inputRef}
                type="email"
                email
                id="email"
                placeholder="Email"
                value={data.email}
                name="email"
                onChange={handleInput}
              />
            </EmailContainer>
            <PasswordContainer>
              <Label>Password:</Label>
              <Input
                type="password"
                password
                id="password"
                value={data.password}
                placeholder="Password"
                name="password"
                onChange={handleInput}
              />
            </PasswordContainer>
            <Button onClick={submit}>Log In</Button>
            <BottomContent>
              <Link to="/signup">
                <Redirect>Don't have an account?</Redirect>
              </Link>
            </BottomContent>
          </Form>
        </LoginContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;
