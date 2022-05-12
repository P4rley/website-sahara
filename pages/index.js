import { useEffect, useState } from "react";
import styled from "styled-components";
import Hero from "../Sections/Hero";
import Expertise from "../Sections/Expertise";
import Loader from "../components/Loader";
import Gallery from "../Sections/Gallery";
import GalleryComponent from "../components/GalleryComponent";

export default function Home() {
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
      <Expertise />
      <Gallery />
      <GalleryComponent />
    </Container>
  );
}

const Container = styled.main``;
