import React from "react";
import "./PokeCard.css"

const PokeCard = ({name, id, type, exp, img}) => (
    <div className="PokeCard-card">
        <h3 className="PokeCard-h3">{name}</h3>
        <img className="PokeCard-img"src={img} alt=""/>
        <div>
            Type: {type}
        </div>
        <div>
            EXP: {exp}
        </div>
    </div>
)

export default PokeCard;
