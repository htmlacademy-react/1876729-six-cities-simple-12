import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities';
import {changeCity} from './action';

const initialState = {
  city: cities[0].title,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

