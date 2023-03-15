import PremiumMark from '../premium-mark/premium.mark';
import {Link} from 'react-router-dom';
import React from 'react';

type CardOfferType = {
  linkForCard: string;
  price: number;
  title: string;
  typeApartment: string;
  premium: boolean;
  hrefLink: string;
}

function CardOffer({linkForCard, price, title, typeApartment, premium, hrefLink}: CardOfferType): JSX.Element {

  return (
    <article onMouseEnter={() => ('Навёл курсор!')} className="cities__card place-card">
      {premium ? <PremiumMark/> : undefined}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="project/src/components#no_scroll">
          <img className="place-card__image" src={linkForCard} width="260" height="200" alt="Place"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={hrefLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{typeApartment}</p>
      </div>
    </article>
  );
}

export default CardOffer;
