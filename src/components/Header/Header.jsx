import React from 'react'

import { NavLink } from 'react-router-dom'

import s from './header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <NavLink style={{textDecoration: 'none', margin: '10px'}} to="/">Dashboard</NavLink>
      <NavLink  style={{textDecoration: 'none', margin: '10px'}} to="/detailsBook">Add book</NavLink>
    </header>
  )
}
