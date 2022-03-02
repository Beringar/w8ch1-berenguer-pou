import { useRouter } from "next/router";
import PokemonDetail from "../../components/PokemonDetail";

const Pokemon = ({ pokemon }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-center mt-3 mb-3">Loading pokemon data...</div>;
  }
  return <PokemonDetail pokemon={pokemon} />;
};

export const getStaticPaths = async () => {
  const response = await fetch(process.env.NEXT_MY_POKE_API_URL);
  const pokemonsAPI = await response.json();

  return {
    paths: pokemonsAPI.map((pokemon) => ({ params: { id: `${pokemon.id}` } })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_MY_POKE_API_URL}${params.id}`);
  const pokemon = await res.json();

  return {
    props: { pokemon },

    revalidate: 20,
  };
};

export default Pokemon;
