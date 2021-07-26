
const Category = () => {
  return fetch("https://api.giphy.com/v1/gifs/categories?api_key=ZuG5xtH47zGVHe4lXzdILIBEd89kdgoI")
    .then(resp => resp.json())
    .then(result => {
      const datos = result.data
      return datos;
    })
}
export default Category