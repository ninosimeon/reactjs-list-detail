import axios from "axios";

export const fetchCars = async (args) => { 
  const params = { ...args, sort: true };

  const { data } = await axios.get("http://localhost:8090/api/cars", {
    params,
  });

  return data;
};
