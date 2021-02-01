import React from "react";
import PokeCard from "./PokeCard"
import "./Pokedex.css"


const Pokedex = ({isWinner, pokemon}) => {

    let bgColor;
    (isWinner) ? bgColor = '#EDFADC' : bgColor = 'white'
    return (
        <>
        <div style={{backgroundColor: bgColor}} className="Pokedex-wrapper">
            {pokemon.map(p => (
                <PokeCard key={p.id} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} name={p.name} type={p.type} exp={p.base_experience}/>
            ))}
        </div>

        </>
    )
}

export default Pokedex