async function findPokemonByName(name) {
  const response = await window.fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${name}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const body = await response.json();
    console.log(body);
    return body;
	
  } else {
	//console.log('error response');  
    throw new Error(500);
	
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
    throw new Error("Ошибка сервера 400");
  }
}
function Error(message) {
	console.log(message);
	return message;
  }
export { findPokemonByName, findAllPokemons, Error };
export default { findPokemonByName, findAllPokemons, Error };