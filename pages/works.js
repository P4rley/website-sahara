/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import Hero from "../Sections/Hero";

export default function works() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <Container>
      {loaded ? null : <Loader />}
      <Hero />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
