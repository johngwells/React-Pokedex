import React, { useState, useCallback, useEffect } from "react";

import Pokemon from "./components/Pokemon";

import "./App.css";

function App() {
  const [newPokemon, setNewPokemon] = useState(1);
  const [pokemonData, setPokemonData] = useState([]);

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

      const loadedPokemon = [];

      loadedPokemon.push(data.name)
      loadedPokemon.push(data.sprites.front_default);
      
      setPokemonData(loadedPokemon);
    } catch (error) {
      console.log(error);
    }
  }, [newPokemon]);

  useEffect(() => {
    fetchPokemonHandler();
  }, [fetchPokemonHandler]);

  return (
    <div className="App">
      <Pokemon name={pokemonData[0]} image={pokemonData[1]}/>
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
