import Image from "next/image";
import { useEffect, useState } from "react";

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
      {pokemons && (
        <div className="container">
          <section className="pokemons-album row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {pokemons.map((pokemon) => (
              <div key={pokemon.id} className="card shadow-sm">
                <Image
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  className="card-img-top"
                  alt={pokemon.name}
                  width="300"
                  height="300"
                />
                <div className="card-body">
                  <h4 className="card-title">{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
                    1
                  )}`}</h4>
                  <p className="text-muted text-end">{`height: ${pokemon.height} weight: ${pokemon.weight}`}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group"></div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}
    </>
  );
};
export default PokemonsListCsr;
