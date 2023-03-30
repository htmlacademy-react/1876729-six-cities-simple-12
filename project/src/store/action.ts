import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction(
  'changesCity',
  (city: string) => ({payload: city})
);
