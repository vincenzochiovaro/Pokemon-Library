import { useState } from "react";

const SearchPokemon = ({ setSearchPkmn }) => {
  const [newSearchPkmn, setNewSearchPkmn] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchPkmn(newSearchPkmn);
    setNewSearchPkmn("");
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label htmlFor="Search-Box" className="search-label">
        Pokemon:
      </label>
      <input
        id="Search-Box"
        value={newSearchPkmn}
        onChange={(e) => {
          setNewSearchPkmn(e.target.value);
        }}
        placeholder="e.g charizard"
        className="search-input"
      ></input>
      <button className="search-button btn btn-pkmn">Search</button>
    </form>
  );
};

export default SearchPokemon;
