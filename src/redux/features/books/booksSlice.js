import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import apiIntance from '../../../service/service';

export const fetchBooksThunk = createAsyncThunk(
  'books/fetchBooks',
  async (_, {dispatch}) => {
    const response = await apiIntance.fetchAllBooks();

    dispatch(setBooks(response));
  }
);


export const deleteBookThunk = createAsyncThunk(
  'books/deleteBookThunk',
  async (bookId, {dispatch}) => {
    await apiIntance.DeleteCurrentBook(bookId);
    dispatch(deleteBook(bookId));
  }
);

export const addBookThunk = createAsyncThunk(
  'books/addBookThunk',
  async (book, {dispatch}) => {
    await apiIntance.PostCurrentBook(book);
    dispatch(addBook(book));
  }
);

export const updateBookThunk = createAsyncThunk(
    'books/updateBookThunk',
    async (book, {dispatch}) => {
      await apiIntance.EditCurrentBook(book);
      dispatch(updateBook(book));
    }
  );

const initialState = {
    books: []
}


export const bookSlice = createSlice({
    name: 'books/booksSlice',
    initialState,
    reducers: {
  
      setBooks: (state, action) => {
          state.books = action.payload;
        
    },

    addBook: (state, action) => {
      state.books.push(action.payload);
},



    deleteBook: (state, action) => {
        state.books = state.books.filter(book => book.id !== action.payload);
    },

    updateBook: (state, action) => {
        state.books = state.books.map(book => {
            if (book.id === action.payload.id) {
                return {
                    ...action.payload
                }
            }

            return book;
        });
    }



  
    },

    
 
  })

  
  export const { setBooks, deleteBook, updateBook, addBook} = bookSlice.actions;
  
  export default bookSlice.reducer;