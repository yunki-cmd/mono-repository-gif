
const api_key = "ZuG5xtH47zGVHe4lXzdILIBEd89kdgoI";
function getGifById({ id }) {
  const Api = `https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`;
  return fetch(Api)
}
export default getGifById;