import CardOffer from '../card-offer/card.offer';
import {AppRoute} from '../../types/routes.enums';
import {generatePath} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {cities} from '../../mocks/cities';
import {sortingFunc} from './list.offers.sorting';
type ListOffersProps = {
  onListItemHover: (listItemName: string) => void;
}

type RootState = {
  city: string;
  variable: string;
}

function ListOffers({onListItemHover}: ListOffersProps): JSX.Element {
  const city = useAppSelector((state: unknown) => (state as RootState).city);
  const variable = useAppSelector((state: unknown) => (state as RootState).variable);
  const cardArr = cities.find((item) => item.title === city);

  if(cardArr !== undefined) {
    cardArr.offers.sort(sortingFunc(variable));
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {cardArr?.offers.map((item, index) => {
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
