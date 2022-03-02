import PokemonsList from "../../components/PokemonsList";

const PokemonsListSsg = ({ pokemonsAPI }) => {
  return (
    <>
      {!pokemonsAPI.length && (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center mt-4 mb-2 text-danger">
            If there are NO pokémon in this list, you can add some pokémon here:
          </h2>
          <a
            href="https://202201-w3-we-berenguer-pou.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://202201-w3-we-berenguer-pou.netlify.app
          </a>
        </div>
      )}
      <h1 className="text-center mt-3 mb-3">
        Static Site Generation (mypokeapi)
      </h1>
      <PokemonsList pokemons={pokemonsAPI} link={true} />
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
