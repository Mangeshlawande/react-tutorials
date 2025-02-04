import React from 'react';

function List() {
  const handleClick = (item) => {
    alert(`You clicked ${item}`);
  };

  return (
    <ul>
      {['Apple', 'Banana', 'Cherry', "Mango", 'JackFruit',"guava"].map((item) => (
        <li key={item} onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;