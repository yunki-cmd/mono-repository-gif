const api_key = "ZuG5xtH47zGVHe4lXzdILIBEd89kdgoI";


function GetGifs(keyword,page= 0) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=15&offset=${page*15}&rating=g&lang=en`;
    /* if (keyword === undefined) {
        console.log(keyword);
        keyword = 'panda'
        apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`;
    } else {
        console.log(keyword);
         apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`;
    } */

    return fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
          const { data = [] } = response
          if (Array.isArray(data)) {
              const gifs = data.map((element) => {
                  return { id: element.id, url: element.images.original.url,title :element.title }
              })
              return gifs
          }
      });
}

export default GetGifs