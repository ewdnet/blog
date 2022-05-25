import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCurrentUser } from '../services/users'

const Header = () => {
  const [user, setUser] = useState()
  useEffect(() => {
    setUser(getCurrentUser())
  }, [])

  return (
    <header className="uk-section uk-section-default uk-flex uk-flex-middle uk-flex-between uk-padding-small">
      <h1 className="uk-h4 uk-margin-remove-vertical uk-padding">
        <span>The Five Recipies Blog</span>
      </h1>
      <nav className="uk-padding">
        <ul className="uk-nav uk-flex uk-flex-middle">
          <li className="uk-inline uk-padding-small">
            <Link to="/" className="uk-link-text">
              Home
            </Link>
          </li>
          <li className="uk-margin-remove uk-padding-small">
            <Link to="/about/" className="uk-link-text">
              About
            </Link>
          </li>
          <li className="uk-margin-remove uk-padding-small">
            {(user && (
              <span
                className="uk-link-text"
                onClick={() => {
                  localStorage.removeItem('token')
                  setUser(null)
                }}
              >
                Logout
              </span>
            )) || (
              <Link to="/login/" className="uk-link-text">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
