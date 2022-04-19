import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import "./styles.css";

export default function App() {
  const [pokeName, setPokeName] = useState("")
  const [pokeList, setPokelist] = useState([])

  getPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setPokelist(pokeList = response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    getPokemons()
  }, [pokeList])


  changePokeName = event => {
    setPokeName(pokeName = event.target.value);
  };

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={pokeName}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}
