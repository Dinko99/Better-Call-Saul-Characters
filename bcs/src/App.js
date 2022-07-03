import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Loading from './Loading';
import CharacterGrid from './CharacterGrid';
import Sort from './Sort';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState();
  const [filtered, setFiltered] = useState();

  const isAlive = (e) => {
    const value = e.target.value;
    if (value === 'Alive') {
      const aliveCharacters = characters.filter(
        (item) => item.status === value
      );
      setFiltered(aliveCharacters);
    } else if (value === 'Deceased') {
      const deceasedCharacters = characters.filter(
        (item) => item.status === value
      );
      setFiltered(deceasedCharacters);
    } else if (value === 'All Characters') {
      setFiltered(characters);
    }
  };

  const fetchCharacters = async () => {
    setIsLoading(true);
    const result = await axios(
      'https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul'
    );

    console.log(result.data);
    setCharacters(result.data);
    setFiltered(result.data);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header />

      <Sort characters={characters} filtered={filtered} isAlive={isAlive} />
      <CharacterGrid filtered={filtered} />
    </>
  );
}

export default App;
