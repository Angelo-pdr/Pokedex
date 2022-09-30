import React,{useContext, useEffect, useState} from "react";
import * as C from './styles'
import {searchPokemon} from '../../models/api'
import favoriteContext from '../../context/favoriteContext'
import {Pokedex} from '../../components/pokedex'
import {Header} from '../../components/header'

export const Favorite = () => {
    const [pokemons, setPokemons] = useState([]);

    const {favoritePokemons} = useContext(favoriteContext)
    const fecthPokemon = async () => {
        try {
            const promises = favoritePokemons.map(async (pokemon) =>{
                return await searchPokemon(pokemon)
            })

            const results = await Promise.all(promises)
            console.log(results)
            setPokemons(results)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fecthPokemon()
    },[favoritePokemons])

    return(
        <> 
        <Header/>
            <C.Container >
                <div className="pokemon_grid">
                { pokemons && pokemons.map((pokemon, index)=>{
                    return (
                        <Pokedex pokemons={pokemon} key={index}/>
                    )
                })}
                </div>
            </C.Container>
        </>
    )
}