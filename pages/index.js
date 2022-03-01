import Image from "next/image";
import homeGif from "../public/img/pokemon_home.gif";

const Home = () => {
  return (
    <Image
      src={homeGif}
      width="635"
      height="504"
      layout="responsive"
      alt="Pokémon animated"
    />
  );
};

export default Home;
