import PokemonCard from "./PokemonCard";

const PokemonsList = ({ pokemons }) => {
  return (
    <div className="container">
      <section className="pokemons-album row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </div>
  );
};

export default PokemonsList;
