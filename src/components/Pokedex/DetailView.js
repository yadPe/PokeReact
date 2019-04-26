import React from 'react';
import './DetailView.css';

const DetailView = ({ pokemon }) => {
  const {
    id, name, sprite, type, weight, speed,
  } = pokemon;

  return (
    <section className="detail-view">
      <h1 className="data-name1">{name}</h1>
      <img src={sprite} className="sprite-image" alt="" />
      <div className="data-wrapper">
        <h1>
          Pokemon #
          {id}
          {' '}
        </h1>
        <h1 className="data-char">
          Type :
          {' '}
          {type}
        </h1>
        <h1 className="data-char">
          Weight :
          {' '}
          {weight}
        </h1>
        <h1 className="data-char">
          Speed :
          {' '}
          {speed}
        </h1>
      </div>
    </section>
  );
};

export default DetailView;
