import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokemonCard from "./components/PokemonCard.jsx";
import "./App.css"
import PokemonInfoModal from "../homework6/components/PokemonInfoModal.jsx";

function Homework7() {

    // https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
    const [pokemonsData, setPokemonsData] = useState([])
    const [page, setPage] = useState(1)
    const [quantity, setQuantity] = useState(20)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [pokemonDataForModal, setPokemonDataForModal] = useState({})

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen)
    }
    const handleGetPokemonDataForModal = (pokemon) => {
        setPokemonDataForModal(pokemon)
    }

    const API = "https://pokeapi.co/api/v2/pokemon/"

    // useEffect(() => {
    //     const getPokemons = async () => {
    //         const req = await axios.get(API)
    //         setPokemonsData(req.data.results)
    //     }
    //     getPokemons()
    // }, []);

    useEffect(() => {
        const getPokemons = async () => {
            const req = await axios.get(API + `?offset=${(page - 1) * quantity}&limit=${quantity}`)
            setPokemonsData(req.data.results)
        }
        getPokemons()

    }, [page, quantity])

    return (
        <div>
            <div>
                <label htmlFor="quantity">
                    <span>Количество карточек: </span>
                    <input onChange={(e)=>setQuantity(Number(e.target.value))} type="number" id="quantity"/>
                </label>
            </div>
            <button onClick={() => {
                setPage(page !== 1 ? page - 1 : page)
            }}>prev
            </button>
            <span>{page}</span>
            <button onClick={() => {
                setPage(page !== 20 ? page + 1 : page)
            }}>next
            </button>
            <div className={"pokemonsList"}>
                {pokemonsData.map(pokemon => <PokemonCard key={pokemon.name} handleGetPokemonDataForModal={handleGetPokemonDataForModal} handleModalOpen={handleModalOpen} pokemon={pokemon}/>)}
            </div>

            {isModalOpen && <PokemonInfoModal handleModalOpen={handleModalOpen} pokemonData={pokemonDataForModal}/>}

        </div>
    );
}

export default Homework7;