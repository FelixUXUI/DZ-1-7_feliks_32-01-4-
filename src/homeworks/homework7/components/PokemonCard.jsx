import React, {useEffect, useState} from 'react';
import axios from "axios";

function PokemonCard({pokemon, handleModalOpen, handleGetPokemonDataForModal}) {
    // «»
    const [pokemonData, setPokemonData] = useState({})

    console.log(pokemonData)

    useEffect(() => {
        const getPokemonData = async () => {
            const req = await axios.get(pokemon.url)
            setPokemonData(req.data)
        }
        getPokemonData()
    }, []);

    return (
        <div className="pokemonCard">
            <img src={pokemonData.sprites?.other.dream_world.front_default} alt=""/>
            <p>
                Name: {pokemonData.name}
            </p>


            <button onClick={()=>{
                handleModalOpen()
                handleGetPokemonDataForModal(pokemonData)
            }}>Подробнее</button>

        </div>
    )
        ;
}

export default PokemonCard;