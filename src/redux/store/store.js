import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import booksReducer from '../features/books/booksSlice';
import bookDetailsReducer from '../features/bookDetails/bookDetailsSlice';


const reducer = combineReducers({
  booksReducer,
  bookDetailsReducer
});

export const store = configureStore({
  reducer
});