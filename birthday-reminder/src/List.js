import React from 'react';

const List = ({ people }) => {
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h6>{age} Years Old</h6>
            </div>
          </article>
        );
      })}
    </React.Fragment>
  );
};

export default List;
