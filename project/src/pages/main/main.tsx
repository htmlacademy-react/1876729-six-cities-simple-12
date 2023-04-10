import {Link} from 'react-router-dom';
import ListOffers from '../../components/list-offers/list.offers';
import Map from '../../components/map/map';
import {offerArray, Offers} from '../../types/offers.type';
import React, {useState} from 'react';
import {Cityes} from '../../types/map.type';
import {LocationList} from '../../components/location-list/location.list';
import SortingForm from '../../components/sorting-form/sorting.form';


type MainType = {
  count: number;
  city: Cityes;
  points: offerArray;
}

function Main({count, city, points}: MainType): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Offers | undefined>(undefined);

  const onListItemHover = (listItemName: string) => {
    const currentPoint = points.find((point) => point.title === listItemName);
    setSelectedPoint(currentPoint);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a href="/" className="header__logo-link header__logo-link--active">
                <img className="header__logo" src={`${process.env.PUBLIC_URL}img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to='/login'>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList></LocationList>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{count} places to stay in Amsterdam</b>
              <SortingForm></SortingForm>
              <ListOffers onListItemHover={onListItemHover}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
