import Image from "next/image";
import { useEffect, useState } from "react";
import PokemonsList from "../../components/PokemonsList";

const PokemonsListCsr = () => {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_POKEAPI_URL);
      const data = await response.json();
      const pokemonsAllpromise = Promise.all(
        data.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        )
      );
      const pokemonsAPI = await pokemonsAllpromise;
      setPokemons(pokemonsAPI);
    })();
  }, []);

  return (
    <>
      <h1 className="text-center mt-2 mb-3">
        Client Side Rendering (public PokeAPI)
      </h1>
      {pokemons && <PokemonsList pokemons={pokemons} />}
    </>
  );
};
export default PokemonsListCsr;
