import React from 'react';

const Sort = ({ isAlive }) => {
  return (
    <div className='sort'>
      <select onClick={isAlive}>
        <option>All</option>
        <option>Alive</option>
        <option>Deceased</option>
      </select>
    </div>
  );
};

export default Sort;
