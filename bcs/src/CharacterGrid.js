import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ characters }) => {
  return (
    <section className='grid'>
      {characters.map((character) => (
        <CharacterItem
          key={character.char_id}
          character={character}
        ></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
