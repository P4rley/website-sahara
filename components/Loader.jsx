import styled from "styled-components";

const Loader = () => {
  return (
    <Container>
      <video height="100%" width="100%" autoPlay muted>
        <source src="/Assets/SHR Logo Video.mp4" type="video/mp4" />
      </video>
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  z-index: 999999;
  width: 100%;
  height: 100%;
  touch-action: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
