import React, {useEffect, useState} from 'react';
import axios from "axios";

function PokemonCard({pokemon}) {
    // «»
    const [pokemonData, setPokemonData] = useState({})
    const [areMoreInfoShown, setAreMoreInfoShown] = useState(false)

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
            {
                areMoreInfoShown
                    ? (
                        <>
                            <p>Ability: {pokemonData.abilities[0]?.ability.name}</p>
                            <p>Type: {pokemonData.types[0]?.type.name}</p>
                            <button onClick={() => setAreMoreInfoShown(false)}>Скрыть</button>
                        </>
                    )
                    : <button onClick={() => setAreMoreInfoShown(true)}>Подробнее</button>
            }
        </div>
    )
        ;
}

export default PokemonCard;