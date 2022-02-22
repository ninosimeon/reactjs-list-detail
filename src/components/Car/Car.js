import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import React from "react";
import { CarStyles } from "./Car.styles";

const Car = ({ data }) => {
  return (
    <Card>
      <CardHeader title={data?.model} />
      <CardMedia
        component="img"
        height="194"
        image={data?.thumbnail}
        alt={`${data?.make} - ${data?.model}`}
      />
      <CardContent sx={{ justifyContent: "space-between", display: "flex" }}>
        <div style={CarStyles.name}>
          <p style={CarStyles.brand}>{data?.make}</p>
          <span style={CarStyles.year}>({data?.year})</span>
        </div>
        <div
          style={{
            backgroundColor: data?.color,
            width: "10px",
            height: "10px",
          }}
        ></div>
      </CardContent>
    </Card>
  );
};

export default React.memo(Car);
