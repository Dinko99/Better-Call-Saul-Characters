import React from 'react';
import CharacterItem from './CharacterItem';
import Sort from './Sort';

const CharacterGrid = ({ filtered }) => {
  return (
    <>
      <section className='grid'>
        {filtered.map((character) => (
          <CharacterItem
            key={character.char_id}
            character={character}
          ></CharacterItem>
        ))}
      </section>
    </>
  );
};

export default CharacterGrid;
