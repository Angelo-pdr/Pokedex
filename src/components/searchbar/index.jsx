import React, { useState } from "react";
import * as C from './styles'

export const SearchBar = (props) => {
    const [pokemon, setPokemon] = useState()

    const {onSearch} = props
    const onChangeHandler = (e) => {
        const serchpokemon = (e.target.value).toLowerCase();
        setPokemon(serchpokemon);
        if (e.target.value.length === 0) {
        onSearch(null);
        }
    }
    
    const onButtonClickHandler =() => {
        onSearch(pokemon)
    }

    return(
        <C.container>
            <div className="inputArea">
                <input type="text" onChange={onChangeHandler}/>
            </div>
            <C.Button onClick={onButtonClickHandler}>Search</C.Button>
            
        </C.container>
    )
}