import { useEffect, useState } from "react"

function GetLocalStore({ variableLocal ,error} = { variableLocal: "lastsearch" }) {
  const [keyword, setValueLocal] = useState(
    window.localStorage.getItem(variableLocal)
  );
  useEffect(() => {
    if (
      window.localStorage.getItem(variableLocal) !== null ||
      window.localStorage.getItem(variableLocal) !== "null"
    ) {
      setValueLocal(window.localStorage.getItem(variableLocal));
    } 
  }, [variableLocal]);
  if (keyword === "null" || keyword === null) {
    setValueLocal(error)
  }
  return {keyword};
}
export default GetLocalStore