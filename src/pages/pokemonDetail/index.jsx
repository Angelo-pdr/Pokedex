import React, { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import {PokedexDetaild} from '../../components/pokedexDetaild'

export const PokemonDetail = () => {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState([])

    const getPokemon = async(id) => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            const promise = await fetch(url)
            const result = await promise.json()
            return setPokemon(result)
             
        } catch (error) {
            console.log('error: ' + error)
        }   
    }
    
    
    useEffect(()=>{
        getPokemon(id)
    },[])

    return(
        <div>
            <PokedexDetaild pokemon={pokemon}/>
        </div>
    )
}