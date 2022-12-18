import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`
  font-size: 50px;
`;

const SelectLink = styled.div`
  font-size: 30px;
`;

const Label = styled.label``;

const Select = styled.select``;

const Option = styled.option``;

const Selection = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Container>
      <Wrapper>
        {/* <Label forHtml="disablity">Who am I:</Label>
        <Select name="category" id="disability">
          <Option value="blind" onClick={handleOption1}>
            Blind
          </Option>
          <Option value="deaf or dumb" on>
            Deaf or Dumb
          </Option>
        </Select> */}

        <Header ref={inputRef}>Who am I?</Header>
        <SelectLink>
          <Link to="/blind/home">Blind</Link>
        </SelectLink>
        <SelectLink>
          <Link to="/home">Others</Link>
        </SelectLink>
      </Wrapper>
    </Container>
  );
};

export default Selection;
