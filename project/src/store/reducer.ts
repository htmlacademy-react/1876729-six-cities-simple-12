import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities';
import {changeCity, variableChange} from './action';
import {variablesSort} from '../mocks/sorting-variables';

const initialState = {
  city: cities[0].title,
  variable: variablesSort[0].value,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(variableChange, (state, action) => {
      state.variable = action.payload;
    });
});

