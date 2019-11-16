import React, { useState } from 'react';

const PokemonList=({results, previous, next, increase, decrease})=>{

    const showImage=(e)=>{
        const chars = e.split('');
        let number=chars[34];
        if(!isNaN(chars[35]))
        {
            number=number+chars[35];
        }
        if(!isNaN(chars[36]))
        {
            number=number+chars[36];
        }
        return(
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
        );
    }

    return(
    <div>
        {results.map(e=>{
            showImage(e.url)
            return(
                <div key={e.url}>
                <p >{e.name}</p>
                <img src={showImage(e.url)} alt={e.name} />
                </div>
            );
        })}
      {previous===null?'':<button onClick={decrease}>previous</button>}
      {next===null?'':<button onClick={increase}>next</button>}
    </div>
    );

}

export default PokemonList;