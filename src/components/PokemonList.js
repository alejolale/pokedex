import React from 'react';
import './PokemonList.css'

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
        if(!isNaN(chars[37]))
        {
            number=number+chars[37];
        }
        return(
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
        );
    }

    return(
    <div className="PokemonList">
        {results.map(e=>{
            showImage(e.url)
            return(
                <div className="PokemonList__pokemon" key={e.url}>
                <p className="PokemonList__name">{e.name}</p>
                <img src={showImage(e.url)} alt={e.name} />
                </div>
            );
        })}
        
        <div>
            {previous===null?<button>-</button>:<button onClick={decrease}>previous</button>}
            {next===null?'':<button onClick={increase}>next</button>}
        </div>
    </div>
    );

}

export default PokemonList;