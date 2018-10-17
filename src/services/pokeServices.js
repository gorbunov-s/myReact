async function findPokemonByName(name) {
  const response = await window.fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${name}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const body = await response.json();
    //console.log(body);
    return body;
	
  } else {
    throw new Error(response);
  }
}

async function findAllPokemons() {
  const response = await window.fetch(`http://pokeapi.salestock.net/api/v2/pokemon/?limit=811`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const body = await response.json();
	//console.log(body);
    return body.results;

  } else {
    throw new Error(response);
  }
}
export { findPokemonByName, findAllPokemons };
export default { findPokemonByName, findAllPokemons };