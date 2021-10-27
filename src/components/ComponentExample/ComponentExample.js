import { Typography } from "@mui/material";
import React from "react";

const ComponentExample = ({ data }) => (
  <Typography variant="body1" data-testid="content">Hello world: {data?.name}</Typography>
);

export default React.memo(ComponentExample);
