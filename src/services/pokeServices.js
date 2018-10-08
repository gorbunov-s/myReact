async function findPokemonByName(name) {
  const response = await window.fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${name}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const body = await response.json();
    return body;

  } else {
    throw new Error(response);
  }
}

export { findPokemonByName };
export default { findPokemonByName };