import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface apiDataProps {
  name: string;
}

export const PokeApi = () => {
  const [apiData, setApiData] = useState([] as apiDataProps[]);

  useEffect(() => {
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
            {index.toString().length < apiData.length.toString().length &&
              "0".repeat(
                apiData.length.toString().length - index.toString().length
              )}
            {index + 1}: {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
          </li>
        ))}
      </ul>
    </>
  );
};
