import React,{ useEffect,useState } from "react"
import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/home'
import {Favorite} from './pages/favorite'
import {PokemonDetail} from './pages/pokemonDetail'
import {getPokemon, getPokemonsUrl, searchPokemon} from './models/api'
import {FavoriteProvider} from './context/favoriteContext'

const itemsPages = 24
const favoritesKey = 'f'

function App() {
  const [pokemons, setPokemons] = useState ([])
  const [loading, setLoading] = useState (false)
  const [pages, setPages] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [notFound,setNotFound] = useState(false);
  const [favorites, setFavorites] = useState([])

  const fetchPokemon = async () => {
    try {
      const data = await getPokemon(itemsPages, itemsPages* pages)
      const promises = await data.results.map( async (pokemon) => {
        return await getPokemonsUrl(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setTotalPages(Math.ceil(data.count / itemsPages))
      setLoading(true)
    } catch (error) {
      console.log('error,' + error)
    }
  }

  const loadFavoritePokemon = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons) 
  }
  useEffect(() =>{
    loadFavoritePokemon()
  },[])

  useEffect(() =>{
    fetchPokemon()
  },[pages])

  const updateFavoritePokemons = (name) => {
    const updateFavorites= [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0){
      updateFavorites.splice(favoriteIndex, 1)
    }else{
      updateFavorites.push(name)

    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites))
    setFavorites(updateFavorites);
 }

  const onSearch = async (pokemon) => {
      if (!pokemon) {
        return fetchPokemon();
      }
      setLoading(true);
      setNotFound(false);
      
      const result = await searchPokemon(pokemon);
      if (!result) {
        setNotFound(true);
        setLoading(false);
        return;
      } else {
        setPokemons([result]);
        setPages(0);
        setTotalPages(1)
        setNotFound(false);
      }
    };


  return (
    <FavoriteProvider value={{favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons}}>
      <Routes>
        <Route path="/" element={notFound ? (
            <div>
              <h1>Sorry, Pokemon not found! </h1>
            </div>
          ) :(<Home pokemons={pokemons} 
        loading={loading} totalPages={totalPages} setPages={setPages}
        pages={pages} onSearch={onSearch}/>)}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/pokemonDetail/:id" element={<PokemonDetail/>}/>
      </Routes>
    </FavoriteProvider>
  )
}

export default App
