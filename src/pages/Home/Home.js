import { Container } from "@mui/material";
import React from "react";
import ContainerExample from "../../containers/ContainerExample/ContainerExample";

const Home = () => {
  return (
    <Container component="main" maxWidth="lg">
      <ContainerExample />
    </Container>
  );
};

export default Home;
