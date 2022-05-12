import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

// Image
import img1 from "../public/Assets/Traditional/Fira & Adry - Adat-30.jpg";
import img2 from "../public/Assets/Couple Session/Ajeng & Afif-8.jpg";
import Image from "next/image";
import Link from "next/link";

const Expertise = () => {
  return (
    <Container>
      <SubHeading>/ EXPERTISE</SubHeading>
      <Header>
        <HeaderDesc>
          Elevating your journey through every capture that we take
        </HeaderDesc>
        <HeaderCta href="/works">
          <CtaText>
            What we do <Arrow />
          </CtaText>
        </HeaderCta>
      </Header>
      <PictureContainer>
        <PictureWrapper>
          <Picture>
            <DarkBg />
            <Image src={img1} alt="" layout="fill" objectFit="cover" />
          </Picture>
          <Desc>
            <Number>/ 01</Number>
            <Text>Photography</Text>
          </Desc>
        </PictureWrapper>
        <PictureWrapper>
          <Picture>
            <DarkBg />
            <Image src={img2} alt="" layout="fill" objectFit="cover" />
          </Picture>
          <Desc>
            <Number>/ 02</Number>
            <Text>Videography</Text>
          </Desc>
        </PictureWrapper>
      </PictureContainer>
    </Container>
  );
};

export default Expertise;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 12rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  @media screen and (max-width: 920px) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 1.5rem;
  }
`;
const SubHeading = styled.p`
  font-size: 0.5em;
  letter-spacing: 1px;

  @media screen and (max-width: 500px) {
    font-size: 0.4rem;
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 2rem 0;
`;
const HeaderDesc = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-weight: 300;
  max-width: 530px;

  @media screen and (max-width: 920px) {
    font-size: ${(props) => props.theme.fontxl};
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontlg};
    width: 200px;
  }
`;
const HeaderCta = styled(Link)``;
const Arrow = styled(BsArrowRight)`
  margin-left: 0.5rem;
  font-size: ${(props) => props.theme.fontlg};
  transition: all 0.4s ease-in-out;
`;
const CtaText = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  outline: none;
  color: #dbdcde;
  letter-spacing: 1px;
  font-weight: 300;
  transition: all 0.4s ease;

  &:hover {
    color: #fff;
  }

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const PictureContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const Desc = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const PictureWrapper = styled.div`
  &:hover ${Desc} {
    color: #fff;
  }

  @media screen and (max-width: 920px) {
    margin: 1rem;
  }
`;
const DarkBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: transparent;
  }
`;
const Picture = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  margin: 1rem 0;

  @media screen and (max-width: 920px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 500px) {
    width: 200px;
    height: 200px;
  }
`;

const Number = styled.p`
  font-size: 0.5em;
  margin-top: 0.15rem;
`;
const Text = styled.p`
  margin: 0 1.5rem;
  font-size: 1.5em;
  font-weight: 300;
`;
