import axios from "axios";

export const fetchCars = async () => {
  const { data } = await axios.get("http://localhost:8090/api/cars");

  return data;
};
