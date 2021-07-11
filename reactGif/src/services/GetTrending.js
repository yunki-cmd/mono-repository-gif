const api_key = "ZuG5xtH47zGVHe4lXzdILIBEd89kdgoI";
const Api = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=20&rating=g`;

const GetTrendig = () => {
  return fetch(Api)
}
export default GetTrendig