import Image from "next/image";
import styled from "styled-components";

// Image
import img1 from "../public/Assets/Wedding/Nia & Lufti-137.jpg";

const Gallery = () => {
  return (
    <Container>
      <Wrapper>
        <GalleryImgWrapper>
          <DarkBg />
          <Image
            src={img1}
            objectFit="cover"
            layout="fill"
            alt="Sahara Wedding"
          />
        </GalleryImgWrapper>

        <Desc>
          <SubHeading>/GALLERY</SubHeading>
          <Heading>We capture amazing journeys from amazing people.</Heading>
        </Desc>
      </Wrapper>
    </Container>
  );
};

export default Gallery;

const Container = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 500px) {
    height: 60vh;
  }
`;
const Wrapper = styled.div`
  position: relative;
`;

const GalleryImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 500px) {
    height: 60vh;
  }
`;
const DarkBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 99;
  transition: all 0.4s ease-in-out;
`;
const Desc = styled.div`
  position: absolute;
  top: 35%;
  padding-left: 12rem;

  @media screen and (max-width: 920px) {
    padding-left: 4rem;
  }

  @media screen and (max-width: 500px) {
    padding-left: 1.5rem;
  }
`;
const SubHeading = styled.p`
  font-size: 0.5em;
  letter-spacing: 1px;
  color: #fff;
  margin-bottom: 4rem;
  @media screen and (max-width: 500px) {
    font-size: 0.4rem;
    margin-bottom: 2rem;
  }
`;
const Heading = styled.h1`
  max-width: 450px;
  font-weight: 300;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontxxl};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 920px) {
    font-size: ${(props) => props.theme.fontxl};
    max-width: 400px;
  }

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontlg};
    max-width: 200px;
  }
`;
