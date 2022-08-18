import React from "react";
import Footer from "../Footer/indexFooter";
import Header from "../Navbar/Navbar";
import { Container, InfoCard } from "./stylesMain";

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <InfoCard>
          <h4>
            Entenda por quais motivos você deve anunciar sua empresa conosco:
          </h4>
        </InfoCard>
      </Container>
      <Footer />
    </>
  );
};

export default Main;
