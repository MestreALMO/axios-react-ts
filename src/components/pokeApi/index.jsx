import { Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const PokeApi = () => {
  const [apiData, setApiData] = useState([]);

  useState(() => {
    const api = axios.create({
      baseURL: "https://pokeapi.co/api/v2/pokemon",
    });
    api
      .get("/?limit=151")
      .then((response) => setApiData(response.data.results));
  }, []);

  return (
    <>
      <Typography>{apiData.length} Pokémons: </Typography>
      <ul>
        {apiData.map((e, index) => (
          <li key={index}>
            {index}: {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
          </li>
        ))}
      </ul>
    </>
  );
};
