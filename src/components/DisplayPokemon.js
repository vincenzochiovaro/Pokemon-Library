import { useEffect, useState } from "react";
import fetchPokemon from "../api";

const DisplayPokemon = ({ searchPkmn }) => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchPokemon(searchPkmn).then((pokemonData) => {
      setPokemon(pokemonData);
      setIsLoading(false);
    });
  }, [searchPkmn]);

  if (isLoading) {
    return (
      <div className="loading">
        <p>LOADING...</p>
      </div>
    );
  }

  if (pokemon) {
    const { name } = pokemon;
    const { types } = pokemon;
    const { sprites } = pokemon;

    return (
      <section className="pokemon-display">
        <h2 className="pokemon-display__name">{name ? name : "Welcome"}</h2>
        <p className="pokemon-display__type">
          {types ? pokemon.types[0].type.name : ""}
        </p>
        <img
          src={
            sprites
              ? pokemon.sprites.front_default
              : "https://brandlogovector.com/wp-content/uploads/2020/07/Pokemon-Logo-Small.png"
          }
          alt="pokemon logo"
          className="pokemon-display__image"
        />
      </section>
    );
  } else {
    return (
      <section className="error">
        <p>Invalid Pokemon</p>
      </section>
    );
  }
};

export default DisplayPokemon;
