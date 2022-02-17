import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBookDefault } from '../../redux/features/bookDetails/bookDetailsSlice';
import { addBookThunk, updateBookThunk } from '../../redux/features/books/booksSlice';


import s from './book.module.css';

export default function Book() {

  const book = useSelector(state => state.bookDetailsReducer.book);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [bookId, _] = useState(book.id);
  const [bookTitle, setBookTitle] = useState(book.book_title);
  const [author, setAuthor] = useState(book.author_name);
  const [category, setCategory] = useState(book.category);
  const [isbn, setIsbn] = useState(book.isbn);


  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
      setCategory(e.target.value);
  }
  useEffect(() => {
    return () => {
      dispatch(setBookDefault());
    }
  }, [])


  const onSubmit = (event) => {
    event.preventDefault();
    if (book.id) {
      dispatch(updateBookThunk({
        id: bookId,
        book_title: bookTitle,
        author_name: author,
        category: category,
        isbn: isbn
      }))

      navigate("/");
    } else {

      dispatch(addBookThunk({
        id: Math.floor(Math.random() * 800),
        book_title: bookTitle,
        author_name: author,
        category: category,
        isbn: isbn
      }));

      setSuccess("Book was added:)")


      setTimeout(() => {
        navigate("/");
      },2000)
      
    }
  };


  return (


    <div className={s.bookWrapper}>

      <div className={s.bookForm}>
        {success && <div>{success}</div>}
        <form className={s.bookFormSub} onSubmit={onSubmit}>
          <input required placeholder='Book title' value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} type="text" />
          <input required placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)} type="text" />
          <input required placeholder='ISBN' value={isbn} onChange={(e) => setIsbn(e.target.value)} min="0" type="number" />

          <div>
          <select  value={category} onChange={handleChange}>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Romantic">Romantic</option>
          </select>
          </div>

          <input type="submit" />

        </form>
      </div>

    </div>


  )
}
