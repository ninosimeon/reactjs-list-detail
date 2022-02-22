import React from "react";
import { fetchCars } from "./Cars.endpoints";

const isPreviousTheSame = (cars = [], index = 0) => {
  if (!index) return true;

  const currentCartMake = cars[index]?.make;
  const previousCartMake = cars[index - 1]?.make;

  return currentCartMake === previousCartMake;
};

export const useCars = () => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const fetch = React.useCallback((page = 1) => {
    setIsLoading(true);
    setIsError(false);

    fetchCars({ p: page })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setIsError(true);
        console.log({ error });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  React.useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, isError, fetch, isPreviousTheSame };
};
