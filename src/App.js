import { useState } from "react";
import "./App.css";
import DisplayPokemon from "./components/DisplayPokemon";
import Header from "./components/Header";
import SearchPokemon from "./components/SearchPokemon";

function App() {
  const [searchPkmn, setSearchPkmn] = useState("");

  return (
    <div className="App">
      <Header />
      <SearchPokemon setSearchPkmn={setSearchPkmn} />
      <DisplayPokemon searchPkmn={searchPkmn} />
    </div>
  );
}

export default App;
