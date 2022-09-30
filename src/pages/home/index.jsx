import React from "react";
import * as C from './styles'
import {Pokedex} from '../../components/pokedex'
import {SearchBar} from '../../components/searchbar'
import {Header} from '../../components/header'

export const Home = (props) => {

    const {pokemons, loading, totalPages, setPages, pages, onSearch} = props

    const onLeftClick = () => {
        if(pages > 0){
            setPages(pages -1)
        }
    }

    const onRightClick = () => {
        if(pages+1 != totalPages){
            setPages(pages +1)
        }
    }

    return(
        <>
        <Header/>
        <SearchBar onSearch={onSearch}/>
        <C.Container>
            <C.Header>
                <h1>POKEDEX</h1>
                <div className="list">
                    <C.button onClick={onLeftClick}>◄</C.button>
                   <p>{`${pages} de ${totalPages}`}</p>
                   <C.button onClick={onRightClick}>►</C.button>
                </div>
            </C.Header>
            <div>
               { loading != true ?
                <div>deu ruim</div>
                : <div className="pokemon_grid">{pokemons.map((pokemon, index) => {
                    return(
                        <Pokedex pokemons={pokemon} key={index}/>
                    )
                })}</div>
               }
            </div>
        </C.Container>
        </>
    )
}