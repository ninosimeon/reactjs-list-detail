import { Grid, Pagination, Typography } from "@mui/material";
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
    <>
      <Pagination
        count={cars?.data?.totalPages}
        page={cars?.data?.currentPage}
        onChange={(e, p) => cars.fetch(p)}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          {cars?.data?.data?.map((car, index) => {
            if (!cars?.isPreviousTheSame(cars?.data?.data, index)) {
              return (
                <React.Fragment key={car?.id}>
                  <hr style={{ padding: "10px" }} />
                  {car?.make}
                  <hr style={{ padding: "10px" }} />
                  <Car data={car} />
                </React.Fragment>
              );
            }

            return <Car data={car} key={car?.id} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Cars;
