import React, { useState, useCallback, useEffect } from "react";

import Pokemon from "./components/Pokemon";

import "./App.css";

function App() {
  const [newPokemon, setNewPokemon] = useState(1);
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonSprite, setPokemonSprite] = useState([]);

  const nextPokemon = () => {
    setNewPokemon(newPokemon + 1);
  };

  const previousPokemon = () => {
    setNewPokemon(newPokemon - 1);
  };

  const fetchPokemonHandler = useCallback(async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${newPokemon}`
      );

      const data = await response.json();
      console.log(data);

      const name = data.name
      const sprite = data.sprites.front_default
      setPokemonName(name);
      setPokemonSprite(sprite);
    } catch (error) {
      console.log(error);
    }
  }, [newPokemon]);

  useEffect(() => {
    fetchPokemonHandler();
  }, [fetchPokemonHandler]);

  return (
    <div className="App">
      <Pokemon name={pokemonName} image={pokemonSprite}/>
      <div className="Buttons">
        <button className="Button" onClick={previousPokemon}>
          Back
        </button>
        <button className="Button" onClick={nextPokemon}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
