import React from 'react';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props)
        this.pokemonNames = [
            'pepe',
            'sara',
            'carlos',
            'jane',
        ];
        this.state = {
            suggestions: [],
            text:"",
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, `i`);
            suggestions = this.pokemonNames.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text:value }));

    }
    suggestionSelected(value){
        this.setState(()=>({
            text:value,
            suggestions:[],
        }))
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map(e => <li onClick={()=>this.suggestionSelected(e)} key={e}>{e}</li>)}
            </ul>
        )
    }

  
    render() {
        const {text}=this.state;
        return (
            <div>
                <input value={text} onChange={this.onTextChanged} type='text' />
                {this.renderSuggestions()}
            </div>
        )
    }
}

export default Autocomplete;