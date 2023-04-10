import React from 'react';
import {cities} from '../../mocks/cities';
import {LocationItem} from '../location-item/location.item';
import {changeCity} from '../../store/action';
import {useDispatch} from 'react-redux';

export function LocationList() {
  const dispatch = useDispatch();

  const onChangeCity = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((item) => <LocationItem changeCity={onChangeCity} key={item.key} city={item.title}></LocationItem>)}
    </ul>
  );
}
