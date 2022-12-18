import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import news from "../../mockapi/news";

const Container = styled.div`
  height: 200vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
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

const NewsContainer = styled.div`
  position: absolute;
  top: 100vh;
  display: flex;
  /* border: 1px solid black; */
`;
const NewsHeader = styled.h1`
  flex-direction: column;
  /* border: 1px solid black; */
`;
const NewsCardContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60vh;
  flex-wrap: wrap;
  /* border: 1px solid black; */
`;
const NewsCard = styled.div`
  margin: 10px 50px;
  background-color: #dcdcdc;
  border-radius: 20px;
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const NewsImage = styled.img`
  position: relative;
  top: 5px;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const NewsTitle = styled.h3`
  text-align: center;
`;
const Img = styled.img`
  height: 60px;
  width: 60px;
  position: absolute;
  right: 30vw;
  top: 80vh;
  cursor: pointer;
`;

const News = () => {
  console.log(news);
  return (
    <>
      <Container>
        <TopNav />
        <Wrapper>
          <a href="#move">
            <Img src="/icons/downarrow.png" />
          </a>
          <ImgContainer
            src="/images/news.jpg"
            // initial={{ y: "-100%" }}
            // animate={{ y: "0%" }}
            // transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <NewsContainer id="move">
            <NewsHeader>
              <b>News.</b>
            </NewsHeader>
            <NewsCardContainer>
              {news.map((data, i) => (
                <NewsCard key={i}>
                  <NewsImage src={data.image} />
                  <Link to={`/news/${data.id}`}>
                    <NewsTitle>{data.headline}</NewsTitle>
                  </Link>
                </NewsCard>
              ))}
            </NewsCardContainer>
          </NewsContainer>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default News;
