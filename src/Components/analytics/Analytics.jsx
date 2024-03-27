import React from 'react';
import './Analytics.css';
import { SideBar } from './../mainPage/sideBar/SideBar.jsx';
import { MiddleBar } from './middleBar/MiddleBar.jsx';

export const Analytics = () => {
  return (
    <div className="background">
      <div className="glass">
        <SideBar />
        <MiddleBar/>
        <div></div>
      </div>
    </div>
  )
}