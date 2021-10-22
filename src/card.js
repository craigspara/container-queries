import React from "react";

const Card = ({item}) => {
    const {title, subTitle, shortDescription, longDescription, buttonLabel} = item;
  return (
    <article className="card">
      <header className="card__header">
        <h2 className="card__title">{title}</h2>
        <p className="card__sub-title">{subTitle}</p>
      </header>
        <div className="description">{longDescription}</div>
        <footer className="card__footer">
            <button className="card__footer-button" type="text">{buttonLabel}</button>
        </footer>
    </article>
  );
};

export default Card;
