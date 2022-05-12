import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

// Image
import img from "../public/Assets/Couple Session/SHR (TP).png";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <Container>
      <Wrapper>
        <NavbarBgWrapper passHref href="/">
          <LogoWrapper>
            <Logo src={img} alt="" layout="fill" />
          </LogoWrapper>
        </NavbarBgWrapper>

        <ItemLinks>
          <Items>
            <Item href="/about">About</Item>
          </Items>
          <Items>
            <Item href="/works">Works</Item>
          </Items>
        </ItemLinks>

        <MenuBtnContainer>
          <MenuWrapperLine click={click} onClick={() => setClick(!click)}>
            <div></div>
            <div></div>
          </MenuWrapperLine>
        </MenuBtnContainer>

        <NavbarMenuContainer click={click}>
          <NavbarMenuWrapper>
            <Left>
              <Menu>
                <Link href="/">
                  <a onClick={() => setClick(!click)}>Home</a>
                </Link>
              </Menu>
              <Menu>
                <Link href="/about">
                  <a onClick={() => setClick(!click)}>About</a>
                </Link>
              </Menu>
              <Menu>
                <Link href="/works">
                  <a onClick={() => setClick(!click)}>Works</a>
                </Link>
              </Menu>
              <Menu>
                <Link href="/gallery">
                  <a onClick={() => setClick(!click)}>Gallery</a>
                </Link>
              </Menu>
            </Left>

            <Right>
              <RightLinkWrapper>
                <Address>Medan, Indonesia</Address>
                <PhoneNumber>(+62) 822-9916-3843</PhoneNumber>
                <NavbarMenuSocial>
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
                </NavbarMenuSocial>
              </RightLinkWrapper>
              <NavbarMenuLinks>
                <NavbarMenuLinkWrapper>
                  <NavbarMenuLink>
                    <Link href="/">Wedding</Link>
                  </NavbarMenuLink>
                  <NavbarMenuLink>
                    <Link href="/">Engagement day</Link>
                  </NavbarMenuLink>
                </NavbarMenuLinkWrapper>

                <NavbarMenuLinkWrapper>
                  <NavbarMenuLink>
                    <Link href="/">Couple Session</Link>
                  </NavbarMenuLink>
                  <NavbarMenuLink>
                    <Link href="/">Traditional Clothing</Link>
                  </NavbarMenuLink>
                </NavbarMenuLinkWrapper>
              </NavbarMenuLinks>

              <Copyright>
                <span>© 2022</span> Sahara
              </Copyright>
            </Right>

            <NavbarMenuBg>
              <NavbarMenuBgImg
                src={img}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </NavbarMenuBg>
          </NavbarMenuWrapper>
        </NavbarMenuContainer>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.section`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 12;
`;
const Wrapper = styled.div`
  padding: 4rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 920px) {
    padding: 4rem 2rem;
  }
  @media screen and (max-width: 500px) {
    padding: 2rem 1.5rem;
  }
`;
const NavbarBgWrapper = styled(Link)``;
const LogoWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 100px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 40px;
    height: 60px;
  }
`;
const Logo = styled(Image)``;

const ItemLinks = styled.ul`
  display: flex;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Items = styled.li`
  color: #dbdcde;
  margin: 0 1rem;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  &:hover {
    color: #fff;
  }

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Item = styled(Link)``;
const MenuBtnContainer = styled.div`
  position: fixed;
  right: 3%;
  top: 50%;
  z-index: 99;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    top: 3.7%;
    right: 5%;
  }
`;

const MenuWrapperLine = styled.div`
  display: flex;
  position: relative;

  div {
    width: 3px;
    height: 35px;
    border-radius: 20px;
    background-color: #fff;
    margin: 5px;
    background-color: #dbdcde;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ click }) =>
        click ? "rotate(45deg) translate(9px)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${({ click }) =>
        click ? "rotate(-45deg) translate(-9px)" : "rotate(0)"};
    }
  }
`;

const NavbarMenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: fixed;
  transform: ${({ click }) => (click ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s ease-in-out;
  z-index: 20;
`;
const NavbarMenuWrapper = styled.div`
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Left = styled.ul``;
const Menu = styled.li`
  font-size: ${(props) => props.theme.fontxxxl};
  font-weight: 300;
  margin: 2rem 0;
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Right = styled.div``;
const RightLinkWrapper = styled.div``;
const Address = styled.p`
  opacity: 0.7;

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const PhoneNumber = styled.p`
  margin: 0.75rem 0;
  opacity: 0.7;

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const NavbarMenuSocial = styled.div``;
const Whatsapp = styled(BsWhatsapp)`
  font-size: ${(props) => props.theme.fontmd};
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const Instagram = styled(BsInstagram)`
  font-size: ${(props) => props.theme.fontmd};
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  margin: 0 1rem;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const Facebook = styled(BsFacebook)`
  font-size: ${(props) => props.theme.fontmd};
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const NavbarMenuLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  @media screen and (max-width: 920px) {
    margin: 1rem 0;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const NavbarMenuLinkWrapper = styled.div``;
const NavbarMenuLink = styled.div`
  margin-bottom: 1rem;
  margin-right: 1rem;
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }

  &:hover {
    color: #fff;
  }
`;

const Copyright = styled.p`
  letter-spacing: 1px;
  font-size: 0.4em;
  position: absolute;
  bottom: 15%;
  color: ${(props) => props.theme.text};

  span {
    color: ${(props) => props.theme.grey};
  }

  @media screen and (max-width: 500px) {
    font-size: 0.3rem;
  }
`;
const NavbarMenuBg = styled.div`
  position: absolute;
  top: 30%;
  left: 45%;
  width: 150px;
  height: 300px;
  opacity: 0.2;

  @media screen and (max-width: 900px) {
    left: 40%;
  }
  @media screen and (max-width: 500px) {
    left: 35%;
  }
`;
const NavbarMenuBgImg = styled(Image)``;
