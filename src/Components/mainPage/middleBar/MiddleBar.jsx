import React from 'react'
import Cards from './../cards/cards.jsx';
import './MiddleBar.css';
import Table from './../table/Table.jsx';

export const MiddleBar = () => {
  return (
    <div className="MiddleBar">
        <h1>Dashboard</h1>
        <Cards />
        <Table />
    </div>
  )
}
