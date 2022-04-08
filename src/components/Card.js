import React from "react";

const Card = ({pokemon, id}) => {
    if (pokemon.id < id) {
        return (
            <div className="card">
                <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{pokemon.name}</h4>
                    <p className="card-text-secondary" key={pokemon.id}>{pokemon.id}</p> 
                </div>
            </div>
        )
    }
    else{
        return null;
    }
}

export default Card;