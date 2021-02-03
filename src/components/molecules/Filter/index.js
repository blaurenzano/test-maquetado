import React from 'react';
import './App.scss';

const Filter = (props) => {
  const [showCategories, setShowCategories] = React.useState(true)

  const onClick = () => setShowCategories(!showCategories)

  return (
    <div className="filter-container">
      <h3 onClick={onClick}>{props.title}</h3>
      {showCategories ? <div>
        {props.categories.map((category, key) =>
          <p key={key}>{category}</p>
        )}
      </div> : null}
    </div>
  );
}

export default Filter;