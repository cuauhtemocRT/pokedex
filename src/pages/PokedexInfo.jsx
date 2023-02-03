import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PokedexInfo = () => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(URL)
          .then(res => setPokemon(res.data))
          .catch(err => console.log(err))
      
    }, [id])

    console.log(pokemon)
    
  return (
    <div>{id}
    <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
    </div>
    
  )
}

export default PokedexInfo