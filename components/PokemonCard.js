import Image from "next/image";
import Link from "next/link";

const PokemonCard = ({ pokemon, link }) => {
  return (
    <div id={pokemon.id} className="card shadow-sm">
      <Image
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        height={300}
        width={300}
        layout="responsive"
      />
      <div className="card-body">
        <h4 className="card-title">{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
          1
        )}`}</h4>
        <p className="text-muted text-end">{`height: ${pokemon.height} weight: ${pokemon.weight}`}</p>
        {link && (
          <div className="d-flex justify-content-between align-items-center">
            <Link href={`/pokemons/${pokemon.id}`} passHref>
              <button className="btn btn-sm btn-warning">View</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
