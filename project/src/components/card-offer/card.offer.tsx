import PremiumMark from '../premium-mark/premium.mark';

type CardOfferType = {
  linkForCard: string;
  price: number;
  title: string;
  typeApartment: string;
  premium: boolean;
}

function CardOffer({linkForCard, price, title, typeApartment, premium}: CardOfferType): JSX.Element {
  return (
    <article className="cities__card place-card">
      {premium ? <PremiumMark /> : undefined}
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
          <a href="project/src/components#no_scroll">{title}</a>
        </h2>
        <p className="place-card__type">{typeApartment}</p>
      </div>
    </article>
  );
}

export default CardOffer;
