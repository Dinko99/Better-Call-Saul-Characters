import React from 'react';

const Sort = ({ isAlive }) => {
  return (
    <div className='sort'>
      <select className='select-menu' onClick={isAlive}>
        <option>All Characters</option>
        <option>Alive</option>
        <option>Deceased</option>
      </select>
    </div>
  );
};

export default Sort;
