import {React, useContext} from 'react'
import {Link} from 'react-router-dom'
import * as C from './styles'
import './pokemon.css'
import favoriteContext from '../../context/favoriteContext'

export const Pokedex = (props) => {

    const {favoritePokemons, updateFavoritePokemons} = useContext(favoriteContext)

    const onHeatClick = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemons.name)
    }
    const {pokemons} = props
    const icon = favoritePokemons.includes(pokemons.name) ? '❤️' : '🖤'
    
    return(
        <Link to={`/pokemonDetail/${pokemons.id}`} className="link">
            <C.Container className={pokemons.types[0].type.name} >
                
                <div className='pokemon-image'>
                    <img src={pokemons.id < 650 ? `src/asserts/animated/${pokemons.id}.gif` : pokemons.sprites.front_default} alt={pokemons.name} />
                </div>
                <div className='card-body'>
                    <div className='card-top'>
                        <h3>{pokemons.name}</h3>
                        <p>#{pokemons.id}</p>
                    </div>
                    <div className='card-bottom'>
                        <div className={`pokemon-type }`}>
                            {pokemons.types.map((types,index) => (
                                <div  className={`pokemons-types-text ${types.type.name}`}
                                key={index}>{types.type.name}</div>   
                            ))
                            }
                        </div>
                        <C.Button onClick={onHeatClick}>
                            {icon}
                        </C.Button>
                    </div>
                </div>
            </C.Container> 
        </Link>
    )
}