import React from 'react';

const Sort = ({ setCharacters, characters }) => {
  const setAlive = (e) => {
    let value = e.target.value;
  };
  return (
    <div className='sort'>
      <select>
        <option onClick={() => setCharacters(characters)}>All</option>
        <option onClick={() => setCharacters(setAlive)}>Alive</option>
        <option>Deceased</option>
      </select>
    </div>
  );
};

export default Sort;
