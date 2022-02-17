import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBook } from '../../redux/features/bookDetails/bookDetailsSlice';
import { deleteBookThunk, fetchBooksThunk } from '../../redux/features/books/booksSlice';

import s from './dashboard.module.css';

export default function Dashboard() {

  const books = useSelector(state => state.booksReducer.books);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchBooksThunk());
  }, [])

  return (
    <div className={s.dashboardWrapper}>
        

        <div className={s.tableWrapper}>
        <table className={s.table}>
        <thead>
          <tr>
            <th>Book title</th>
        
       
            <th>
            Author name
            </th>
       
          <th>
          Category
            </th>
       
            <th>ISBN</th>
         
       
            <th>Actions</th>
          </tr>

        </thead>
        <tbody>
        {books.map(book => {
          return (
            <tr key={book.id}>
               <td>{book.book_title}</td>
                <td>{book.author_name}</td>
                <td>{book.category}</td>
                <td>{book.isbn}</td>
                <td>
                  <>
                    <button
                    onClick={() => {
                      dispatch(setBook(book));
                      navigate("/detailsBook");
                    }}
                    >EDIT</button>
                
                    <button
                    onClick={() => {
                      dispatch(deleteBookThunk(book.id))
                    }}
                    >
                      REMOVE
                    </button>
                  </>
                </td>


            </tr>
          )
        })}

        </tbody>
        
       
      </table>
        </div>

    </div>
  )
}
