import {Offers} from '../../types/offers.type';

export const sortingFunc = (sortItem: string) => (a: Offers, b: Offers) => {
  switch (sortItem) {
    case 'Price: low to high':
      if (a.price > b.price) {return 1;}
      if (a.price === b.price) {return 0;}
      if (a.price < b.price) {return -1;}
      break;
    case 'Price: high to low':
      if (a.price < b.price) {return 1;}
      if (a.price === b.price) {return 0;}
      if (a.price > b.price) {return -1;}
      break;
    case 'Top rated first':
      // eslint-disable-next-line no-console
      console.log('Доделать');
      break;
  }
  return 0;
};
