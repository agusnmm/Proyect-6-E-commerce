import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'
import React, { useState } from 'react'
import './header.scss'

// logo url
const logoUrl = 'https://cdn.pixabay.com/photo/2012/04/26/14/14/internet-42583_1280.png'

const Header = () => {
  const { logout, isAuth } = useAuthContext()
  const [searchTerm, setSearchTerm] = useState('')

  const linkIsActive = (isActive) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'

  const handleSearchClick = () => {
    console.log('Término de búsqueda:', searchTerm)
  }

  // BEM PARA LLAMAR NUESTRAS CLASES
  return (
    <nav className='header'>
      <NavLink to='/'><img className='header__logo' src={logoUrl} alt='Logo' style={{ width: '50px', height: 'auto' }} /></NavLink>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Buscar...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='button' onClick={handleSearchClick}>Buscar</button>
      </div>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/'>Home</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/dashboard'>Dashboard</NavLink>
        </li>

        {isAuth
          ? (
            <>
              <li className='header__list-item'>
                <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/secret'>Secret</NavLink>
              </li>

              <li className='header__list-item'>
                <NavLink className='header__item-link' onClick={logout}>Logout</NavLink>
              </li>
            </>
            )
          : (
            <>
              <li className='header__list-item'>
                <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/login'>Login</NavLink>
              </li>
              <li className='header__list-item'>
                <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/signup'>Signup</NavLink>
              </li>
            </>
            )}
      </ul>
    </nav>
  )
}

export default Header
