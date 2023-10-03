// components/NavigationBar.js
import Link from 'next/link'
import React from 'react'

const NavigationBar = ({ isLoggedIn }) => {
  return (
    <nav className="sticky top-0 bg-opacity-90 bg-white backdrop-blur-md shadow-md">
      <div className="container mx-auto py-4">
        <ul className="flex justify-end space-x-4">
          {!isLoggedIn && (
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link href="/library">Library</Link>
            </li>
          )}
          <li>
            <Link href="/search">Search</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link href="/logout">Logout</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar
