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
        <h1 className="data-name2">
          Pokemon #
          {id}
          {' '}
        </h1>
        <p className="data-char">
          Type :
          {' '}
          {type}
        </p>
        <p className="data-char">
          Weight :
          {' '}
          {weight}
        </p>
        <p className="data-char">
          Speed :
          {' '}
          {speed}
        </p>
      </div>
    </section>
  );
};

export default DetailView;
