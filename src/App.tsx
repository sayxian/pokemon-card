import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { PokemonCard } from "./components/PokemonCard";
import { SearchBox } from "./components/SearchBox";
import { Pokemons } from "./models/Pokemons";

export const App = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [searchField, setSearchField] = useState<string>("");
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemons[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => response.json())
      .then(({ results }) => {
        setPokemons([...results]);
      });
  }, []);

  useEffect(() => {
    setFilteredPokemons(
      pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
      })
    );
  }, [pokemons, searchField]);

  return (
    <div className="App">
      <SearchBox
        placeholder="Search for pokemon"
        handlechange={(event: {
          target: { value: React.SetStateAction<string> };
        }) => setSearchField(event.target.value)}
      />
        <div className="card-list">
          {filteredPokemons.map((items) => {
            return (
              <PokemonCard key={items.url} name={items.name} url={items.url} />
            );
          })}
        </div>
      </div>
  );
};
