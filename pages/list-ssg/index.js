import PokemonsList from "../../components/PokemonsList";

const PokemonsListSsg = ({ pokemonsAPI }) => {
  return (
    <>
      <h1 className="text-center mt-2 mb-3">
        Site Static Generator (mypokeapi)
      </h1>
      <PokemonsList pokemons={pokemonsAPI} />
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(process.env.NEXT_MY_POKE_API_URL);
  const pokemonsAPI = await response.json();

  return {
    props: { pokemonsAPI },
  };
};

export default PokemonsListSsg;
