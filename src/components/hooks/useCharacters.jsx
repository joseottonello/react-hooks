import { useState, useEffect} from 'react'

export const useCharacters = (url) => {
  const [ characters, setCharacters ] = useState([])

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, [url])

  return characters
  
}
