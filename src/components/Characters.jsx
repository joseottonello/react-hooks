import {  
  useState, 
  useReducer, 
  useMemo,
  useRef } 
from 'react'
import { useCharacters } from './hooks/useCharacters';

const API = 'https://rickandmortyapi.com/api/character/'

//agregar a favoritos con useReducer
const initialState = {
  favorites: []
}

//agregar a favoritos con useReducer
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD-TO-FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}

export const Characters = () => {
  //const [ characters, setCharacters ] = useState([])
  const [ favorites, dispatch ] = useReducer(favoriteReducer, initialState)
  const [ search, setSearch ] = useState('')
  const searchInput = useRef(null)

  //llamada convencional
  //useEffect(() => {
    //fetch('https://rickandmortyapi.com/api/character/')
    //.then(response => response.json())
    //.then(data => setCharacters(data.results))
  //}, [])

  //llamado con customHook
  const characters = useCharacters(API)

  //agregar a favoritos con useReducer
  const handleClick = (favorite) => {
    dispatch({ type: 'ADD-TO-FAVORITE', payload: favorite })
  }

  //tomar evento convencional
  //const handleSearch = (e) => {
    //setSearch(e.target.value)
  //}

  //tomar evento con useRef
  //suplantamos el e.target.value por:
  const handleSearchRef = () => {
    setSearch(searchInput.current.value)
  }

  //buscador convencional
  //const filteredUsers = characters.filter((user) => {
    //return user.name.toLowerCase().includes(search.toLowerCase());
  //})

  //buscador con useMemo
  const filteredUsersMemo = useMemo(() => 
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [ characters, search ]
  )

  return (
    <div>
      {
        favorites.favorites.map(favorite => (
          <li key={favorite.id}>{favorite.name}</li>
        ))
      }
      <div>
        <input type="text" value={search} ref={searchInput} onChange={handleSearchRef}/>
      </div>
      {
        filteredUsersMemo.map(character => (
          <div key={character.id}>
            <h1>{character.name}</h1>
            <button type='button' onClick={() => handleClick(character)}>Agregar a favoritos</button>
          </div>
        ))
      }
    </div>
  )
}
