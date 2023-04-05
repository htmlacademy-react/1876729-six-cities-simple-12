import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {comments} from './mocks/comments';
import {Provider} from 'react-redux';
import {store} from './store';
import {AMSTERDAM} from './mocks/cities';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  NumberOfOffers: 321,
} as const;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App count={Setting.NumberOfOffers} points={offers} city={AMSTERDAM} CommentsPack={comments}/>
    </Provider>
  </React.StrictMode>,
);
