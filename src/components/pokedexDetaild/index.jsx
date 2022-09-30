import {React, useContext} from "react";
import {Link} from 'react-router-dom'
import * as C from './styles'
import {Header} from '../header'
import './pokemon.css'
import favoriteContext from '../../context/favoriteContext'

export const PokedexDetaild = (props) => {
    const{pokemon} = props

    const {favoritePokemons, updateFavoritePokemons} = useContext(favoriteContext)

    const onHeatClick = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name)
    }
    const icon = favoritePokemons.includes(pokemon.name) ? '❤️' : '🖤'

    return(
        <C.Cotainer>
            <Header/>
            <C.BackgroundTop className={pokemon.types && pokemon.types[0].type.name}>
               <div className="buttons">
                    <Link to="/" className="left" >⬅️</Link>
                    <C.Button onClick={onHeatClick}>{icon}</C.Button>
               </div>
               <div className="infor">
                    <h1>{pokemon.name}</h1>
                    <h1>#{pokemon.id}</h1>
                </div>
                <C.Types>
                    <div className={`pokemon-type }`}>
                        {pokemon.types && pokemon.types.map((types,index) => (
                            <div  className={`pokemons-types-text ${types.type.name}`}
                            key={index}>{types.type.name}</div>   
                         ))
                        }
                    </div>
                </C.Types>
                <div className="imgContainer">
                    <img src={pokemon.sprites && pokemon.sprites.front_default } alt={pokemon.name} />
                </div>
                <C.pokemonInfor>
                        <h1>STATUS</h1>
                        <div className="pokemonAbility">
                            {pokemon.stats && pokemon.stats.map((stats, index) => (
                                <div className="powers">
                                    <div>{stats.stat.name}</div>
                                    <div className="bar">
                                        <div className="barPower"  style={{ width: stats.base_stat }}></div>
                                    </div>
                                    <div>{stats.base_stat}</div>
                                </div>
                            ))}
                        </div>
                </C.pokemonInfor>
            </C.BackgroundTop>
           
        </C.Cotainer>
    )
    
}