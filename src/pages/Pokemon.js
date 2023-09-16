import { useEffect, useState } from "react"


function Pokemon(){
    let [pokeData,setPokeData] = useState()

    const fetchPokemon =  async() =>{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    const data = await response.json()
    console.log(data)
    setPokeData(data.results)
    }
    useEffect(() =>{
        fetchPokemon()
    },[])
    return(
        <>
        <h1>Pokemon</h1>
        {
            pokeData &&
            pokeData.map((pokemon) => <img key = {pokemon.name}>{pokemon.name}</img>)
        }
        </>
    )


}

export default Pokemon