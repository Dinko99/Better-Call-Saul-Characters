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

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      const result = await axios(
        'https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul'
      );

      console.log(result.data);
      setCharacters(result.data);

      setIsLoading(false);
    };
    fetchCharacters();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <Sort setCharacters={setCharacters} characters={characters} />
      <CharacterGrid characters={characters} />
    </>
  );
}

export default App;
