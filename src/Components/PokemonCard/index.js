import './PokemonCard.css'
import React from 'react';

const PokemonCard = ({name,url}) => {
    let spriteUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.substring(url.lastIndexOf("/",url.lastIndexOf("/")-1)+1,url.lastIndexOf("/"))}.png`;
    console.log(spriteUrl);
    return (
        <div className="card-container"> 
            <img className="sprite-image" alt={name} src={spriteUrl} />
            <p>{name}</p>
        </div>
    );
}

export default PokemonCard;