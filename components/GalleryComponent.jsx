import styled from "styled-components";
import Image from "next/image";

// Image
import img from "../public/Assets/Wedding/Nia & Lufti-211.jpg";
import img2 from "../public/Assets/Couple Session/Bila & Faras-15.jpg";
import img3 from "../public/Assets/Engagement/Retouch-44.jpg";
import img4 from "../public/Assets/Traditional/Fira & Adry - Adat-30.jpg";

const GalleryComponent = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <DarkBg />
          <Img src={img} alt="" layout="fill" objectFit="cover" />
        </ImageWrapper>
        <TextWrapper>
          <SubHeading>Wedding by Raafifur</SubHeading>
          <Heading>Nia & Lutfi | Wedding Day | Medan</Heading>
        </TextWrapper>
      </Wrapper>
      <Wrapper>
        <ImageWrapper>
          <DarkBg />
          <Img src={img2} alt="" layout="fill" objectFit="cover" />
        </ImageWrapper>
        <TextWrapper>
          <SubHeading>Wedding by Raafifur</SubHeading>
          <Heading>Nia & Lutfi | Wedding Day | Medan</Heading>
        </TextWrapper>
      </Wrapper>
      <Wrapper>
        <ImageWrapper>
          <DarkBg />
          <Img src={img3} alt="" layout="fill" objectFit="cover" />
        </ImageWrapper>
        <TextWrapper>
          <SubHeading>Wedding by Raafifur</SubHeading>
          <Heading>Nia & Lutfi | Wedding Day | Medan</Heading>
        </TextWrapper>
      </Wrapper>
      <Wrapper>
        <ImageWrapper>
          <DarkBg />
          <Img src={img4} alt="" layout="fill" objectFit="cover" />
        </ImageWrapper>
        <TextWrapper>
          <SubHeading>Wedding by Raafifur</SubHeading>
          <Heading>Nia & Lutfi | Wedding Day | Medan</Heading>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default GalleryComponent;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  width: 50%;
  position: relative;
  @media screen and (max-width: 500px) {
    width: 100%;
    transition: all 0.4s ease-in-out;
    &:hover {
      border: 1px solid #dbdcde;
    }
  }
`;
const TextWrapper = styled.div`
  position: absolute;
  left: 7%;
  bottom: 10%;
  color: #fff;
`;
const SubHeading = styled.h3`
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 300;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0.5rem 0;

  @media screen and (max-width: 920px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const Heading = styled.h2`
  font-weight: lighter;
  font-family: "Bellefair", serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-size: ${(props) => props.theme.fontxl};

  @media screen and (max-width: 920px) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const DarkBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  @media screen and (max-width: 500px) {
    height: 250px;
  }
`;
const Img = styled(Image)``;
