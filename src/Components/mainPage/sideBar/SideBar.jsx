import React, { useState } from 'react'
import './SideBar.css';
import logo from './../../../img/logo.png';
import { SidebarData } from '../../../Data/data.js';
import { UilSignOutAlt } from "@iconscout/react-unicons";

export const SideBar = () => {
  const [selected, setSelected]=useState(0);
  
  return (
    <div className="SideBar">
        <div className="logo">
            <img src={logo} />
            <span>User</span>
        </div>
        <div className="menu">
            {
                SidebarData.map((item, index)=>{
                    return(
                        <div className={selected===index?"menuItem active":"menuItem"}
                        key={index}
                        onClick={()=>setSelected(index)}
                        >
                            <item.icon />
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })
            }
            <div className="menuItem">
                <UilSignOutAlt/>
            </div>

        
        </div>
    </div>
  )
}
