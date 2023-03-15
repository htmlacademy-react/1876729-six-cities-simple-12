import CardOffer from '../card-offer/card.offer';
import {offerArray} from '../../types/offers.type';
import {AppRoute} from '../../types/routes.enums';
import {generatePath} from 'react-router-dom';

type ListOffersProps = {
  cardArr: offerArray;
}

function ListOffers({cardArr}: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        cardArr.map((item) => (
          <CardOffer
            key={item.id}
            premium={item.premium}
            linkForCard={item.photos}
            price={item.price}
            title={item.title}
            typeApartment={item.typeApartment}
            hrefLink={generatePath(AppRoute.Room, {id: item.id.toString()})}
          />
        ))
      }
    </div>
  );
}

export default ListOffers;
