import { Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const PokeApi = () => {
  const [apiData, setApiData] = useState([]);

  useState(() => {
    const api = axios.create({
      baseURL: "https://pokeapi.co/api/v2/pokemon",
    });
    api.get("/").then((response) => setApiData(response.data.results));
  }, []);

  return (
    <>
      <Typography>{apiData.length} Pokémons: </Typography>
      <ul>
        {apiData.map((e, index) => (
          <li key={index}>{e.name}</li>
        ))}
      </ul>
    </>
  );
};
