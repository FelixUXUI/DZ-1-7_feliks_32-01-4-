import React from 'react';

const formatList = (info, pokemonInfo, index) => {
    return (<span key={index}>{info.name}{pokemonInfo.length - 1 === index ? "" : ", "}</span>)
}

// я если что беру это у другого студента, которому помогал, чтобы все снова не писать

function PokemonInfoModal({pokemonData, handleModalOpen}) {
    return (
        <div className="modal">
            <div className="modalInner">
                <div className="card">
                    <img src={pokemonData.sprites?.other?.dream_world?.front_default} alt="image"/>
                    <p>Name: {pokemonData.name}</p>
                    <p>Type: {pokemonData.types?.map((type, index) => (
                        formatList(type.type, pokemonData.types, index)
                    ))}
                    </p>
                    <p>Stats: {pokemonData.stats?.map((stat, index) => (
                        formatList(stat.stat, pokemonData.stats, index)
                    ))}
                    </p>
                    <p>Abilities: {pokemonData.abilities?.map((ability, index) => (
                        formatList(ability.ability, pokemonData.abilities, index)
                    ))}
                    </p>
                    <p>Some-moves: {pokemonData.moves?.slice(0, 4).map((move, index) => (
                        formatList(move.move, pokemonData.moves.slice(0, 4), index)
                    ))}
                    </p>
                </div>
                <button onClick={handleModalOpen}>Скрыть</button>
            </div>
        </div>
    );
}

export default PokemonInfoModal;