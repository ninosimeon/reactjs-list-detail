import { Grid, Typography } from "@mui/material";
import React from "react";
import Car from "../../components/Car/Car";
import { useCars } from "./useCars";

const Cars = () => {
  const cars = useCars();

  if (cars?.isLoading)
    return <Typography variant="body1">...is loading.</Typography>;
  if (cars?.isError)
    return (
      <Typography variant="body1">...Oopps something is wrong.</Typography>
    );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        {cars?.data?.map((car) => (
          <Car data={car} key={car?.id}/>
        ))}
      </Grid>
    </Grid>
  );
};

export default Cars;
