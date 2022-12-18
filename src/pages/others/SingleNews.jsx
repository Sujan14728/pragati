import React, { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import TopNav from "../../components/TopNav";
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
  position: relative;
  top: -5y0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewsHead = styled.h1``;

const NewsImage = styled.img`
  width: 450px;
  height: 450px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const SingleNews = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Container>
      <TopNav />
      <Wrapper>
        {news
          .filter((data) => id == data.id)
          .map((info, i) => (
            <NewsContainer key={i}>
              <NewsHead>{info.headline}</NewsHead>
              <NewsImage src={info.image} />
              <Description>{info.description}</Description>
            </NewsContainer>
          ))}
      </Wrapper>
    </Container>
  );
};

export default SingleNews;
