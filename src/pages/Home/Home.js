import { Container } from "@mui/material";
import React from "react";
import Cars from "../../containers/Cars/Cars";

const Home = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Cars />
    </Container>
  );
};

export default Home;
