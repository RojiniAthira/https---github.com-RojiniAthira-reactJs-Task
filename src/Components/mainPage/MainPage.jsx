import React from 'react';
import './MainPage.css';
import { SideBar } from './sideBar/SideBar.jsx';
import { MiddleBar } from './middleBar/MiddleBar.jsx';

export const MainPage = () => {
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
