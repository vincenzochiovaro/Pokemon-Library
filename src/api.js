const fetchPokemon = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchPokemon;
