import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  NumberOfOffers: 321,
} as const;

root.render(
  <React.StrictMode>
    <App count={Setting.NumberOfOffers}/>
  </React.StrictMode>,
);
