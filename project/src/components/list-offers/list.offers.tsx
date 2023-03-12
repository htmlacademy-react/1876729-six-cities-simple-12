import CardOffer from '../card-offer/card.offer';
import {offerArray} from '../../types/offers.type';

type ListOffersProps = {
  cardArr: offerArray;
}

function ListOffers({cardArr}: ListOffersProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        cardArr.map(item => (
          <CardOffer premium={item.premium} linkForCard={item.photos} price={item.price} title={item.title} typeApartment={item.typeApartment}/>
        ))
      }
    </div>
  );
}

export default ListOffers;
