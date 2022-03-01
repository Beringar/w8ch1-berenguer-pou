import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logoPicture from "../public/img/logo.png";

const Navigation = () => {
  const router = useRouter();
  return (
    <>
      <header className="header p-3 bg-dark text-white">
        <div className="menu container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Image
              src={logoPicture}
              alt="Beringar Pokémons Logo"
              className="menu__logo"
              width="40"
              height="50"
            />
            <span className="fs-5">Beringar Pokémon</span>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link href="/">
                  <a
                    className={`nav-link px-2 menu__item__link ${
                      router.pathname == "/" ? "active" : ""
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/list-csr">
                  <a className="nav-link px-2 menu__item__link">Pokémon</a>
                </Link>
              </li>
              <li>
                <Link href="/list-ssr">
                  <a className="nav-link px-2 menu__item__link">
                    Mis Pokémon SSR
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/list-ssg">
                  <a className="nav-link px-2 menu__item__link">
                    Mis Pokémon SSG
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/list-isr">
                  <a className="nav-link px-2 menu__item__link">
                    Mis Pokémon ISR
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
