import ListOfGifs from "../components/ListOfGifs";
import useGifs from "../Hooks/useGifs";
import Buscador from "../components/Buscador/buscador";
import TrenddingGifs from "../components/trendingGifs/TrenddingGifs";
import GifsIniciales from "../components/trendingGifs/renderTrending";
import Spinner from "../components/spinner/spinner";
import GetlocalStore from "../Hooks/getLocalStore";
import "./Home.css";


import veryfy from "../Hooks/GetAndVeryToken"

const Home = () => {
  veryfy()
  const { keyword } = GetlocalStore({
    variableLocal: "lastsearch",
    error: "no hay busqueda reciente",
  });

  const { gif, loading } = useGifs({ keyword });

  return (
    <>
      <form className="w-full">
        <Buscador />
      </form>
      {keyword === "no hay busqueda reciente" ? (
        <>
          <h2>Ultimas busquedas "{keyword}"</h2>
          <section className="grid mx-3  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {loading ? <Spinner /> : null}
            <GifsIniciales />
          </section>
        </>
      ) : (
        <>
            <article>
              <header>
                <h1 className="text text-xl font-bold  font-mono  lg:text-4xl capitalize">Ultima busqueda "{decodeURI(keyword)} "</h1>
              </header>
            <section className="grid mx-3 text-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-screen ">
              {loading ? <Spinner /> : null}
              <ListOfGifs gifs={gif} />
            </section>
            <section>
              <TrenddingGifs />
            </section>
          </article>
        </>
      )}
    </>
  );
};
export default Home;
