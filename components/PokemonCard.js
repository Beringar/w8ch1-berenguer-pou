import Image from "next/image";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card shadow-sm">
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
  );
};

export default PokemonCard;
