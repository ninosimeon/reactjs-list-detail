import { Typography } from "@mui/material";
import React from "react";

const Car = ({ data }) => (
  <Typography variant="body1" data-testid="content">Brand: {data?.make}</Typography>
);

export default React.memo(Car);
