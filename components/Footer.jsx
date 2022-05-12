import styled from "styled-components";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

// Image
import img from "../public/Assets/Couple Session/SHR (TP).png";

const Footer = () => {
  return (
    <Container>
      <FooterBg>
        <FooterBgImg src={img} layout="fill" objectFit="cover" alt="" />
      </FooterBg>
      <Wrapper>
        <Email>
          <Link href="mailto:sahara.filmic@gmail.com?">
            sahara.filmic@gmail.com
          </Link>
        </Email>
        <FooterItems>
          <FooterLinksSocial>
            <Address>Medan, Indonesia</Address>
            <PhoneNumber>(+62) 822-9916-3843</PhoneNumber>
            <FooterSocial>
              <Link href="/">
                <a target="_blank">
                  <Whatsapp />
                </a>
              </Link>
              <Link href="https://www.instagram.com/shr.storyteller/">
                <a target="_blank">
                  <Instagram />
                </a>
              </Link>
              <Link href="/">
                <a target="_blank">
                  <Facebook />
                </a>
              </Link>
            </FooterSocial>
          </FooterLinksSocial>
          <FooterLinksWrapper>
            <FooterLinks>
              <FooterLink>
                <Link href="/">Home</Link>
              </FooterLink>
              <FooterLink>
                <Link href="/about">About</Link>
              </FooterLink>
              <FooterLink>
                <Link href="/works">Works</Link>
              </FooterLink>
              <FooterLink>
                <Link href="/gallery">Gallery</Link>
              </FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLink>
                <Link href="/">Wedding</Link>
              </FooterLink>
              <FooterLink>
                <Link href="/">Engagement day</Link>
              </FooterLink>
              <FooterLink>
                <Link href="/">Couple Session</Link>
              </FooterLink>
              <FooterLink>
                <Link href="/">Traditional Clothing</Link>
              </FooterLink>
            </FooterLinks>
          </FooterLinksWrapper>
        </FooterItems>
      </Wrapper>
      <Copyright>
        <span>© 2022</span> Sahara
      </Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 5rem 12rem;
  color: ${(props) => props.theme.text};
  font-weight: 300;

  @media screen and (max-width: 920px) {
    padding: 5rem 4rem;
  }
  @media screen and (max-width: 500px) {
    padding: 5rem 1.5rem;
  }
`;
const FooterBg = styled.div`
  position: absolute;
  right: 12%;
  top: 25%;
  width: 150px;
  height: 300px;
  opacity: 0.5;

  @media screen and (max-width: 500px) {
    top: 30%;
  }
`;
const FooterBgImg = styled(Image)``;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Email = styled.h1`
  width: 550px;
  font-weight: 300;
  font-size: ${(props) => props.theme.fontxxl};
  margin: 2rem 0;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 0;
    height: 2.5px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.text};
    transition: all 0.8s ease-in-out;
  }
  &:hover::before {
    width: 100%;
  }

  @media screen and (max-width: 920px) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontlg};
    width: 230px;
  }
`;
const FooterItems = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
`;
const FooterLinksSocial = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-right: 7rem;
  @media screen and (max-width: 920px) {
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;
const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const FooterLinks = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 2rem;

  @media screen and (max-width: 920px) {
    margin: 1rem 2rem 1rem 0;
  }
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const FooterLink = styled.div`
  margin-bottom: 1rem;
  transition: all 0.3s ease-in;

  &:hover {
    color: #fff;
  }
`;
const Address = styled.p`
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const PhoneNumber = styled.p`
  margin: 0.75rem 0;
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const FooterSocial = styled.div``;
const Whatsapp = styled(BsWhatsapp)`
  font-size: ${(props) => props.theme.fontmd};
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const Instagram = styled(BsInstagram)`
  font-size: ${(props) => props.theme.fontmd};
  margin: 0 1rem;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const Facebook = styled(BsFacebook)`
  font-size: ${(props) => props.theme.fontmd};
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const Copyright = styled.p`
  letter-spacing: 1px;
  font-size: 0.4em;
  position: absolute;
  bottom: 10%;
  color: ${(props) => props.theme.text};

  span {
    color: ${(props) => props.theme.grey};
  }

  @media screen and (max-width: 500px) {
    font-size: 0.3rem;
  }
`;
