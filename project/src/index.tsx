import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  NumberOfOffers: 321,
} as const;

root.render(
  <React.StrictMode>
    <App count={Setting.NumberOfOffers} arrayCards={offers}/>
  </React.StrictMode>,
);
