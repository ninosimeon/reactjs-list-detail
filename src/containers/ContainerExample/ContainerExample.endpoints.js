import axios from "axios";

export const fetchDitto = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");

  return data;
};
