export const searchPokemon = async(name) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`
        const promise = await fetch(url)
        return promise.json()
    } catch (error) {
        console.log('error: ' + error)
    }   
}


export const getPokemon = async (limit= 50, offset = 0) =>{
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const promise = await fetch(url)
        return promise.json()
    } catch (error) {
        console.log('error: ', error)
    }

}

export const getPokemonsUrl = async (url) => {
    try {
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.log(`error: ${error}`)
    }
}