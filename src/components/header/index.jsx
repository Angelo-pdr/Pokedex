import React,{useContext} from "react";
import * as C from './styles'
import {useNavigate, Link} from 'react-router-dom'
import favoriteContext from '../../context/favoriteContext'

export const Header = () => {

    const {favoritePokemons} = useContext(favoriteContext)    
    const navigate = useNavigate()

    const handleButtonHome = () => {
        navigate('/')
    }

    const handleButtonFavorite = () => {
        navigate('/favorite')
    }

    return(
       <>
            <C.Container>
                <Link to="/"><img src="../src/asserts/logo.png" alt="logo_pokemon" /></Link>
                <ul>
                    <li onClick={handleButtonHome}>Home</li>
                    <li onClick={handleButtonFavorite}>❤️ {favoritePokemons.length} Favorite</li>
                </ul>
            </C.Container>
            
       </>
    )
}