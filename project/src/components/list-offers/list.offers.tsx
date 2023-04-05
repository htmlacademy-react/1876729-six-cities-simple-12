import CardOffer from '../card-offer/card.offer';
import {offerArray} from '../../types/offers.type';
import {AppRoute} from '../../types/routes.enums';
import {generatePath} from 'react-router-dom';

type ListOffersProps = {
  cardArr: offerArray;
  onListItemHover: (listItemName: string) => void;
}

function ListOffers({cardArr, onListItemHover}: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cardArr.map((item, index) => {
        const keyValue = `${index}-${item.title}`;
        return(
          <CardOffer
            key={keyValue}
            premium={item.premium}
            linkForCard={item.photos}
            price={item.price}
            title={item.title}
            typeApartment={item.typeApartment}
            hrefLink={generatePath(AppRoute.Room, {id: item.id.toString()})}
            onListItemHover={onListItemHover}
          />
        );})}
    </div>
  );
}

export default ListOffers;
