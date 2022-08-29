import './index.scss'
import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
