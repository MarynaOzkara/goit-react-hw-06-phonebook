import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlise';
import { filterReduser } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReduser,
  },
});
