import React from "react";
import PokeCard from "./PokeCard"
import "./Pokedex.css"


const Pokedex = ({pokemon}) => {
    
    const totalExp = pokemon.reduce((acc, p) => {
        return acc + p.base_experience
    }, 0)

    return (
        <>
        <div className="Pokedex-wrapper">
            {pokemon.map(p => (
                <PokeCard key={p.id} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} name={p.name} type={p.type} exp={p.base_experience}/>
            ))}
        </div>
        <div>
            Total EXP: {totalExp}
        </div>
        </>
    )
}

export default Pokedex