import {City, Cityes} from '../types/map.type';
import {offers, offersTwo} from './offers';

export const AMSTERDAM: City = {
  key: 1,
  title: 'Amsterdam',
  lat: 52.3740300,
  lng: 4.8896900,
  zoom: 10,
  offers: offers,
};

export const cities: Cityes = [
  {
    key: 1,
    title: 'Amsterdam',
    lat: 52.3740300,
    lng: 4.8896900,
    zoom: 10,
    offers: offers,
  },
  {
    key: 2,
    title: 'Paris',
    lat: 48.8534100,
    lng: 2.3488000,
    zoom: 10,
    offers: offersTwo,
  },
  {
    key: 3,
    title: 'Cologne',
    lat: 52.3740300,
    lng: 4.8896900,
    zoom: 10,
    offers: offers,
  },
  {
    key: 4,
    title: 'Brussels',
    lat: 52.3740300,
    lng: 4.8896900,
    zoom: 10,
    offers: offers,
  },
  {
    key: 5,
    title: 'Hamburg',
    lat: 52.3740300,
    lng: 4.8896900,
    zoom: 10,
    offers: offers,
  },
  {
    key: 6,
    title: 'Dusseldorf',
    lat: 52.3740300,
    lng: 4.8896900,
    zoom: 10,
    offers: offers,
  },
];
