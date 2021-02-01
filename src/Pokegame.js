import React from "react"
import Pokedex from './Pokedex'

const Pokegame = ({pokemon}) => {

    let hand1 = []; 
    let hand2 = [];
    let randIdx;

    console.log(pokemon)
    
    while (hand1.length !== 4) {

        //console.log(pokemon)
        
        //debugger;
        randIdx = Math.floor(Math.random() * pokemon.length)
        let removed = pokemon.splice(randIdx, 1)
        hand1.push(removed[0])
        //console.log("inside loop pokemon left:", pokemon)
        //randIdx = Math.floor(Math.random() * pokemon.length)
        //let removed2 = pokemon.splice(randIdx, 1)
        //hand2.push(removed2[0])

    }

    //hand2 = pokemon

    return (
        <>
            <h2>Hand 1</h2>
            <Pokedex pokemon={hand1}/>
            <h2>Hand 2</h2>
            <Pokedex pokemon={hand2}/>
        </>
    )
}

export default Pokegame