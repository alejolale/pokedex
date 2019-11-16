//using hooks
import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './components/pokemonList';

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [numberList, setNumberList] = useState(0);

  const fetchPokemons = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${numberList}&limit=5`)
      .then(response => response.json())
      .then(data => setPokemons(data));
  }

  const increase = () => {
    const num = numberList;
    setNumberList(num + 5);
  }

  const decrease = () => {
    const num = numberList;
    setNumberList(num - 5);
  }

  useEffect(() => {
    fetchPokemons();
  }, [numberList]
  )

  return (
    <div className="App">
      <p>Pokemon List
      </p>
      <div className="Pokemons">
        {pokemons === null ? 
          <p>loading</p> : 
          <PokemonList {...pokemons} 
          increase={increase} 
          decrease={decrease} />}


      </div>
    </div>
  );
}

export default App;
