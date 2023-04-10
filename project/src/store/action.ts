import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction(
  'changesCity',
  (city: string) => ({payload: city})
);

export const variableChange = createAction(
  'variableChange',
  (variable: string) => ({payload: variable})
);
