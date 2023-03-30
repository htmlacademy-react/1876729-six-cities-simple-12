import {offerArray} from './offers.type';

export type City = {
  key: number;
  title: string;
  lat: number;
  lng: number;
  zoom: number;
  offers: offerArray;
};

export type Cityes = City[]

