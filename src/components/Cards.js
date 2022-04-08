import React from 'react'
import Card from './Card'
import '../css/Cards.css';

function Cards({ pokemon, id }) {
    if (pokemon) {
        return (
            <div className='container'>
                <div className='row p-4'>
                    <div className='justify-content-center align-items-center flex-column'>
                        <div className="container d-flex justify-content-center align-items-center">
                            <div className="row pt-5">
                                {pokemon.map((img) => {
                                    if (img.id < id) {
                                        return (
                                            img.id % 3 === 0 || img.id === 1 ?
                                                <div className="col-md-4 mt-3">
                                                    <Card pokemon={img} id={id} key={img.id} />
                                                </div>
                                                :
                                                <div className="col-md-4 mt-3">
                                                    <Card pokemon={img} id={id} key={img.id} />
                                                </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Cards;