import React, { useState, useCallback, useEffect } from "react";

import Pokemon from "./components/pokemon";

import "./App.css";

function App() {
  const [newPokemon, setNewPokemon] = useState(1);
  const [namePokemon, setNamePokemon] = useState("");
  const [sprites, setSprites] = useState("");

  const nextPokemon = useCallback(() => {
    setNewPokemon(newPokemon + 1);
  }, [newPokemon]);

  const previousPokemon = () => {
    setNewPokemon(newPokemon - 1);
  };

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${newPokemon}`
      );
      const pokemon = await response.json();
      console.log(pokemon);
      setNamePokemon(pokemon.name);
      setSprites(pokemon.sprites.front_default);
      return pokemon;
    }
    fetchPokemon();
  }, [newPokemon]);



  return (
    <div className="App">
      <Pokemon name={namePokemon} image={sprites} />
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
