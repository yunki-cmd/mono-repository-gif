import Gifs from "../components/Gifs";
import gifId from "../Hooks/gifsId";
import TrenddingGifs from "../components/trendingGifs/TrenddingGifs";
import  UseGlobalGifs  from "../Hooks/useGlobalGifs";


const Details = ({ params }) => {
  const gif = UseGlobalGifs();
  let detailgifs;
  if (!gif || gif.length > 0) {
    detailgifs = gif.find((element) => element.id === params.id);
    if (detailgifs !== undefined) return (
      <>
        <div className="flex justify-center items-center h-full">
          <Gifs {...detailgifs} />
          
        </div>
        <section>
          <TrenddingGifs />
        </section>
      </>
    );
    else {
      const id = params.id;
      const gifs = gifId({ id }).gif;

      return (
        <>
          <div className="flex justify-center items-center h-full">
            <Gifs {...gifs} />
          </div>
          <section>
            <TrenddingGifs />
          </section>
        </>
      );
    }
  } else {
    const id = params.id;
    const gifs = gifId({ id }).gif;

    return (
      <>
        <div className="flex justify-center items-center h-full">
          <Gifs {...gifs} />
        </div>
        <section>
          <TrenddingGifs />
        </section>
      </>
    );
  }
  
};
export default Details;
