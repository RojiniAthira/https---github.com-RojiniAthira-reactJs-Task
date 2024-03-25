import React from 'react'
import Cards from './../cards/cards.jsx';
import './MiddleBar.css';

export const MiddleBar = () => {
  return (
    <div className="MiddleBar">
        <h1>Dashboard</h1>
        <Cards />
    </div>
  )
}
