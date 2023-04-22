const POST_URL = 'http://localhost:5000/api/posts' 
// adjust the limit to get more or less pokemon

// * the getPokemon function is used to fetch the pokemon data from the pokeapi
export default async function getPosts() {
  const res = await fetch(POST_URL);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// // * the fetchPokeDetails function is used to fetch the pokemon details from the pokeapi
// export default async function fetchPokeDetails() {
//   const kantoPokemon = await getPokemon().then((pokemon) => pokemon);

//   return await Promise.all(kantoPokemon.map(async (pokemon: any) => {
//     return await fetch(pokemon.url).then(response => response.json())
//   }));
// }