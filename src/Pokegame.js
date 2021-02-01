import React from "react"
import Pokedex from './Pokedex'
import "./Pokegame.css"

const Pokegame = ({pokemon}) => {

    let hand1 = pokemon.slice(0, 4); 
    let hand2 = pokemon.slice(4);
 
/*  why does below approach not work?

    let hand1 = [];
    let hand2 = [];
    let randIdx;
    
     while (hand1.length !== 4) {

        randIdx = Math.floor(Math.random() * pokemon.length)
        let removed = pokemon.splice(randIdx, 1)
        hand1.push(removed[0])

        randIdx = Math.floor(Math.random() * pokemon.length)
        let removed2 = pokemon.splice(randIdx, 1)
        hand2.push(removed2[0])

    } 
 */
    const totalExpHand1 = hand1.reduce((acc, p) => {
        return acc + p.base_experience
    }, 0)

    const totalExpHand2 = hand2.reduce((acc, p) => {
        return acc + p.base_experience
    }, 0)

    const isWinner = {
        hand1 : totalExpHand1 > totalExpHand2 ? true : false,
        hand2 : totalExpHand2 > totalExpHand1 ? true : false
    }


    return (
        <>
            <div className="Pokegame-wrapper">
                <div className="">
                    <h2 className="Pokegame-hand-name">Hand 1</h2>
                    <div className='Pokegame-totalExp'>
                    Total EXP: {totalExpHand1}
                    </div>
                    <Pokedex isWinner={isWinner['hand1']} pokemon={hand1}/>
                </div>

                <div className="">
                    <h2 className="Pokegame-hand-name">Hand 2</h2>
                    <div className='Pokegame-totalExp'>
                    Total EXP: {totalExpHand2}
                    </div>
                    <Pokedex isWinner={isWinner['hand2']} pokemon={hand2}/>
                </div>

            </div>
        </>
    )
}

export default Pokegame