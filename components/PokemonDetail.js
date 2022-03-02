import Image from "next/image";

const PokemonDetail = ({ pokemon }) => {
  return (
    <div className="container">
      <Image
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        height={400}
        width={400}
        layout="intrinsic"
      />
      <h1 className="display-5 fw-bold lh-1 mb-3">
        {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
      </h1>
      <ul className="pokemon-detail__grid">
        <li className="pokemon-detail__grid__item">
          <span className="pokemon-detail__key">Base experience</span>
          <span className="pokemon-detail__value">
            {`${pokemon.base_experience ?? "not defined"}`}
          </span>
        </li>
        <li className="pokemon-detail__grid__item">
          <span className="pokemon-detail__key">Height</span>
          <span className="pokemon-detail__value">{`${pokemon.height}`}</span>
        </li>
        <li className="pokemon-detail__grid__item">
          <span className="pokemon-detail__key">Weight</span>
          <span className="pokemon-detail__value">{`${pokemon.weight}`}</span>
        </li>
        <li className="pokemon-detail__grid__item">
          <span className="pokemon-detail__key">Forms</span>
          <span className="pokemon-detail__value">
            {`${pokemon.forms.length}`}{" "}
          </span>
        </li>
        <li className="pokemon-detail__grid__item">
          <span className="pokemon-detail__key">Moves</span>
          <span className="pokemon-detail__value">
            {`${pokemon.moves.length}`}
          </span>
        </li>
        <li className="pokemon-detail__grid__item">
          <span className="pokemon-detail__key">HP</span>
          <span className="pokemon-detail__value">
            {`${pokemon.stats[0].base_stat ?? "not defined"}`}
          </span>
        </li>
        <li className="pokemon-detail__grid__item">
          <span className="pokemon-detail__key">Attack</span>
          <span className="pokemon-detail__value">
            {`${pokemon.stats[1].base_stat ?? "not defined"}`}
          </span>
        </li>
        <li className="pokemon-detail__grid__item">
          <span className="pokemon-detail__key">Defense</span>
          <span className="pokemon-detail__value">
            {`${pokemon.stats[2].base_stat ?? "not defined"}`}
          </span>
        </li>
        <li className="pokemon-detail__grid__item">
          <span className="pokemon-detail__key">Special attack</span>
          <span className="pokemon-detail__value">
            {`${pokemon.stats[3].base_stat ?? "not defined"}`}
          </span>
        </li>
        <li className="pokemon-detail__grid__item">
          <span className="pokemon-detail__key">Special defense</span>
          <span className="pokemon-detail__value">
            {`${pokemon.stats[4].base_stat ?? "not defined"}`}
          </span>
        </li>
        <li className="pokemon-detail__grid__item">
          <span className="pokemon-detail__key">Speed</span>
          <span className="pokemon-detail__value">
            {`${pokemon.stats[5].base_stat ?? "not defined"}`}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PokemonDetail;
