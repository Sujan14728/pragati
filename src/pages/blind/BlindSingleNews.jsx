import React, { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import BlindTopNav from "../../components/BlindTopNav";
import news from "../../mockapi/news";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  top: 50px;
  width: 80%;
  position: relative;
`;

const NewsContainer = styled.div`
  /* border: 1px solid black; */
`;

const Description = styled.textarea`
  outline: none;
  resize: none;
  font-size: 16px;
  border: none;
`;

const BlindSingleNews = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const { id } = useParams();
  console.log(id);
  return (
    <Container>
      <BlindTopNav />
      <Wrapper>
        {news
          .filter((data) => id == data.id)
          .map((info, i) => (
            <NewsContainer key={i}>
              <Description ref={inputRef} rows="40" cols="152">
                {info.description}
              </Description>
            </NewsContainer>
          ))}
      </Wrapper>
    </Container>
  );
};

export default BlindSingleNews;
