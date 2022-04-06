import React from 'react';

const Categories = ({ name, onCategory, activeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {name.map((el, index) => (
          <li
            key={index}
            className={activeCategory === index ? 'active' : null}
            onClick={() => onCategory(index)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
