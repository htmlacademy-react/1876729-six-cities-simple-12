import React from 'react';

type LocationItemType = {
  city: string;
  changeCity: (city: string) => void;
}

export function LocationItem({city, changeCity}: LocationItemType) {
  // tabs__item--active
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item"
        href="/"
        onClick={(event) => {
          event.preventDefault();
          changeCity(city);
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}
