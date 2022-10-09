import "./PokemonCard.css";
import { serialNum, capitalize } from "../../utils/StringUtils";
import React from "react";

export const PokemonCard = ({ name, url }: { name: string; url: string }) => {
  let spriteUrl: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.substring(
    url.lastIndexOf("/", url.lastIndexOf("/") - 1) + 1,
    url.lastIndexOf("/")
  )}.png`;

  return (
    <div className="card-container">
      <img className="sprite-image" alt={name} src={spriteUrl} />
      <p>{serialNum(url)}</p>
      <p>{capitalize(name)}</p>
    </div>
  );
};
