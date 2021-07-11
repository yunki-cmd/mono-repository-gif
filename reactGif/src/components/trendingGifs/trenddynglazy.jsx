import TrenddingGifs from "../../Hooks/TrendingGifs";


export default function TrenddingGifsRender () {
  const { gifs } = TrenddingGifs();
  const datos = gifs;
  return (
    <>
      <header className="header">
        <h2 className="text-4xl capitalize">Tendencias: </h2>
      </header>
      <div>
        {datos.map((element) => {
          return (
            <a
              className="p-2 border-2 block sm:inline-block m-2 sm:m-1 odd:bg-red-100 even:bg-green-300 rounded capitalize"
              key={element.id}
              href={element.url}
            >
              {element.title}
            </a>
          );
        })}
      </div>
    </>
  );
};
