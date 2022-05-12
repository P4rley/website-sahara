import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// Icons
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// Image

const data = [
  {
    img: "/Assets/Couple Session/Fira & Adry-10.jpg",
    number: "/01",
    desc: "Bringing the simpllicity to every capture.",
  },
  {
    img: "/Assets/Couple Session/Tia & Eris-467.jpg",
    number: "/02",
    desc: "Bringing the simpllicity to every capture.",
  },
  {
    img: "/Assets/Couple Session/Fanny & Rangga-12.jpg",
    number: "/03",
    desc: "Bringing the simpllicity to every capture.",
  },
  ,
];

const Body = () => {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <Container>
      <BodyWrapper style={{ transform: `translateX(${-100 * index}vw)` }}>
        {data.map((data, i) => (
          <BodyBgContainer key={i}>
            <BodyBgWrapper>
              <DarkBg />
              <BodyBg src={data.img} layout="fill" objectFit="cover" alt="" />
            </BodyBgWrapper>

            <ContentWrapper>
              <Content>
                <Number>{data.number}</Number>
                <Desc>{data.desc}</Desc>
              </Content>
            </ContentWrapper>
          </BodyBgContainer>
        ))}
      </BodyWrapper>

      <Wrapper>
        <SocialWrapper>
          <Link passHref href="https://www.instagram.com/shr.storyteller/">
            <a target="_blank">
              <Instagram />
            </a>
          </Link>
          <Facebook />
          <Text>/ visual storyteller</Text>
        </SocialWrapper>

        <ArrowWrapper>
          <Left onClick={() => handleArrow("l")}>
            <ArrowLeft />
          </Left>
          <Right onClick={() => handleArrow("r")}>
            <ArrowRight />
          </Right>
        </ArrowWrapper>
      </Wrapper>
    </Container>
  );
};

export default Body;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;

  @media screen and (max-width: 500px) {
    height: 60vh;
  }
`;
const BodyBgContainer = styled.div``;

const BodyWrapper = styled.div`
  position: relative;
  width: 300vw;
  height: 100%;
  display: flex;
  transition: all 0.6s ease-in-out;
`;
const DarkBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;
const BodyBgWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  @media screen and (max-width: 500px) {
    height: 60vh;
  }
`;
const BodyBg = styled(Image)`
  z-index: -2;
`;

const ContentWrapper = styled.div`
  padding-left: 12rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100vw;
  position: absolute;
  top: 0;

  @media screen and (max-width: 920px) {
    padding-left: 2rem;
  }

  @media screen and (max-width: 500px) {
    padding-left: 1.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  z-index: 3;
`;
const Number = styled.p`
  margin-top: 0.9rem;
  margin-right: 10rem;
  font-size: 0.5em;
  font-weight: 300;
  color: #dbdcde;

  @media screen and (max-width: 920px) {
    margin-right: 5rem;
  }
  @media screen and (max-width: 500px) {
    margin-top: 0;
    font-size: 0.4rem;
    margin-right: 3rem;
  }
`;
const Desc = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-weight: 300;
  width: 400px;
  color: white;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 920px) {
    width: 300px;
    font-size: ${(props) => props.theme.fontxl};
  }

  @media screen and (max-width: 500px) {
    width: 150px;
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 9%;
  z-index: 5;
  padding: 0 12rem;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 920px) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 1.5rem;
  }
`;
const SocialWrapper = styled.div``;
const Instagram = styled(GrInstagram)`
  color: #fff;
  font-size: ${(props) => props.theme.fontmd};
  margin-right: 0.7rem;

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const Facebook = styled(FaFacebook)`
  color: #fff;
  font-size: ${(props) => props.theme.fontmd};
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const Text = styled.span`
  margin-left: 5rem;
  font-size: 0.5em;

  @media screen and (max-width: 500px) {
    margin-left: 2rem;
    font-size: 0.3rem;
  }
`;
const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowLeft = styled(BsArrowLeft)`
  font-size: 1.5em;
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const ArrowRight = styled(BsArrowRight)`
  font-size: 1.5em;
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Left = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #dbdcde;
    color: black;
    border-color: #dbdcde;
  }

  @media screen and (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
`;
const Right = styled(Left)``;
