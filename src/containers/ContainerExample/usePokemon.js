import React from "react";
import { fetchDitto } from "./ContainerExample.endpoints";

export const usePokemon = () => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchDitto()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  return { data, isLoading, isError };
};
