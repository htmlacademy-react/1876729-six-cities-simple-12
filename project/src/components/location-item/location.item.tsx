import React from 'react';

type LocationItemType = {
  city: string;
  changeCity: (city: string) => void;
}

export function LocationItem({city, changeCity}: LocationItemType) {

  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item"
        href="/"
        onClick={(event) => {
          event.preventDefault();
          changeCity(city);
          // eslint-disable-next-line no-console
          console.log(city);
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}
