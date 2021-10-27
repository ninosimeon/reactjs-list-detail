import React from "react";
import { fetchCars } from "./Cars.endpoints";

export const useCars = () => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchCars()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, isError };
};
