import ListOfGifs from "../components/ListOfGifs";
import useGifs from "../Hooks/useGifs";
import Buscador from "../components/Buscador/buscador";
import TrenddingGifs from "../components/trendingGifs/TrenddingGifs";
import GifsIniciales from "../components/trendingGifs/renderTrending";
import Spinner from "../components/spinner/spinner";
import GetlocalStore from "../Hooks/getLocalStore";
import "./Home.css";

import Category from "../components/category/index"


const Home = () => {
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
          <header>
            <h1 className="text text-xl font-bold  font-mono  lg:text-4xl capitalize">
              Ultima busqueda "{decodeURI(keyword)} "
            </h1>
          </header>
          <section className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 min-h-screen">
            <aside className="hidden sm:block sm:col-start-1 sm:col-end-3">
              <h2 className="text-4xl m-3">Categorias</h2>
              <Category />
            </aside>
            <article className="col-start-3 col-end-12">
              <section className="grid  mx-3 text-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-screen">
                {loading ? <Spinner /> : null}
                <GifsIniciales />
              </section>
            </article>
          </section>
        </>
      ) : (
        <>
          <header>
            <h1 className="text text-xl font-bold  font-mono  lg:text-4xl capitalize">
              Ultima busqueda "{decodeURI(keyword)} "
            </h1>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 min-h-screen">
            <aside className="hidden sm:block sm:col-start-1 sm:col-end-3">
              <h2 className="text-4xl m-3">Categorias</h2>
              <Category />
            </aside>
            <article className="col-start-3 col-end-12">
              <section className="grid  mx-3 text-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-screen ">
                {loading ? <Spinner /> : null}
                <ListOfGifs gifs={gif} />
              </section>
            </article>
          </div>
          <footer>
            <TrenddingGifs />
          </footer>
        </>
      )}
    </>
  );
};
export default Home;
