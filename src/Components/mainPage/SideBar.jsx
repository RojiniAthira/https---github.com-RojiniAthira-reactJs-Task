import React from 'react'
import './SideBar.css'
import logo from './../../img/logo.png';
import { UilEstate } from "@iconscout/react-unicons";
import { SideBarData } from './../../Data/data.js';

export const SideBar = () => {
  return (
    <div className="SideBar">
        <div className="logo">
            <img src={logo} />
            <span>User</span>
        </div>
        <div className="menu">
            
        </div>
    </div>
  )
}
