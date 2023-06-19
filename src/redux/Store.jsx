import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice, filterSlice } from 'redux/Slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice.reducer,
  },
});
