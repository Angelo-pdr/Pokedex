import React,{createContext} from 'react'

const favoriteContext = createContext({
    favoritePokemons: [],
    updateFavoritePoekmons: (id) => null
})

export const FavoriteProvider = favoriteContext.Provider

export default favoriteContext