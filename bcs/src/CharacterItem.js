import React from 'react';

const CharacterItem = ({ character }) => {
  return (
    <div className='grid-item'>
      <img src={character.img} alt={character.name} className='character-img' />
      <div className='info'>
        <h1 className='name'>{character.name}</h1>
        <p className='occupation'>
          Occupation: {character.occupation.join(', ')}
        </p>
        <p className='status'>Status: {character.status}</p>
        <p className='seasons'>
          Appeared in seasons:{' '}
          {character.better_call_saul_appearance.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default CharacterItem;
