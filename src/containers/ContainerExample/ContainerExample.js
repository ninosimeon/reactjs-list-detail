import { Typography } from "@mui/material";
import React from "react";
import ComponentExample from "../../components/ComponentExample/ComponentExample";
import { usePokemon } from "./usePokemon";

const ContainerExample = () => {
  const pokemon = usePokemon();

  return pokemon.isLoading ? (
    <Typography variant="body1">...is loading</Typography>
  ) : (
    <ComponentExample data={pokemon.data} />
  );
};

export default ContainerExample;
