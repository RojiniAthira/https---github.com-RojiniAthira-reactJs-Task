import React from 'react';
import './MainPage.css';
import { SideBar } from './SideBar';

export const MainPage = () => {
  return (
    <div className="background">
      <div className="glass">
        <SideBar />
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
