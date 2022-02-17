import { createSlice } from '@reduxjs/toolkit'






const initialState = {
    book: {
        id: 0,
        author_name: "name",
        book_title: "none",
        category: "none",
        isbn: "0"
    }
}


export const bookDetailsSlice = createSlice({
    name: 'books/booksSlice',
    initialState,
    reducers: {
  
      setBook: (state, action) => {
          state.book = action.payload;
        
    },

    setBookDefault: (state, action) => {
        state.book = {
            id: 0,
            book_title: "none",
            category: "none",
            isbn: "0"
        }
       },
    },
  })

  
  export const { setBook, setBookDefault} = bookDetailsSlice.actions;
  
  export default bookDetailsSlice.reducer;