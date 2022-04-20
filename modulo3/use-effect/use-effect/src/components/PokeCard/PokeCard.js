import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeCard = (props) => {
  const [currentPokemon, setCurrentPokemon] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setCurrentPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>{currentPokemon.name}</p>
      <p>{currentPokemon.weight} Kg</p>
      {currentPokemon.types && <p>{currentPokemon.types[0].type.name}</p>}
      {currentPokemon.sprites && (
        <img
          src={currentPokemon.sprites.front_default}
          alt={currentPokemon.name}
        />
      )}
    </div>
  );
};

export default PokeCard;
