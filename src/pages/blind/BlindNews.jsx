import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BlindTopNav from "../../components/BlindTopNav";
import news from "../../mockapi/news";

const Container = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  position: relative;
  top: 10vh;
  width: 80%;
`;

const HeadLine = styled.div``;

const Header = styled.h1``;

const BlindNews = () => {
  return (
    <Container>
      <BlindTopNav />
      <Wrapper>
        {news.map((data, i) => (
          <HeadLine key={i}>
            <Header>
              <Link to={`/blind/news/${data.id}`}>{data.headline}</Link>
            </Header>
          </HeadLine>
        ))}
      </Wrapper>
    </Container>
  );
};

export default BlindNews;
