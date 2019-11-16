//using hooks
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons]=useState(null);
  const [numberList, setNumberList]=useState(0);

  const fetchPokemons= async ()=> {
      fetch(`https://pokeapi.co/api/v2/pokemon?offset=${numberList}&limit=10`)
      .then(response => response.json())
      .then(data => setPokemons(data));
  }

  const increase=()=>{
    const num=numberList;
    setNumberList(num+10);
  }

  const decrease=()=>{
    const num=numberList;
    setNumberList(num-10);
  }

  useEffect( ()=> {
    fetchPokemons();
  },[numberList]
  )
  

  const showPokemons= () =>{
    const list=pokemons.results;
    return(<div>
      {list.map(e=><p key={e.url}>{e.name}</p>)}
      {pokemons.previous===null?'':<button onClick={decrease}>previous</button>}
      {pokemons.next===null?'':<button onClick={increase}>next</button>}
    </div>
    );

  }
  

  return (
    <div className="App">
      <p>Pokemon List
      </p>
      <div className="Pokemons">
        {pokemons===null?<p>loading</p>:showPokemons()}


      </div>
    </div>
  );
}

export default App;
