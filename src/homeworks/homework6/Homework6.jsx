import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokemonCard from "./components/PokemonCard.jsx";
import "./App.css"

function Homework6() {

    const [pokemonsData, setPokemonsData] = useState([])

    const API = "https://pokeapi.co/api/v2/pokemon/"

    useEffect(() => {
        const getPokemons = async () => {
            const req = await axios.get(API)
            setPokemonsData(req.data.results)
        }
        getPokemons()
    }, []);

    return (
        <div className={"pokemonsList"}>
            {pokemonsData.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)}
        </div>
    );
}

export default Homework6;