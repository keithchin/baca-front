
import React, { FC, useEffect, useRef } from 'react';
import ProfileDropdown from '../app/components/header/ProfileDropdown'
import { ISubforum } from './interfaces/subforum';
import { FaHome } from 'react-icons/fa';
import { CgNotifications } from 'react-icons/cg';

// async function getData() {
//     const res = await fetch('http://localhost:5000/api/subforums');
//     if (!res.ok) {
//       throw new Error('Failed to fetch data');
//     }
  
//     return res.json();
//   }

async function Header() {

    // const subforums : ISubforum[] = await getData();


    return (
        <header id="header" className="bc__left-sidebar">
                <a href="/" className="font-bold text-white">
                    <span className="bc__left-sidebar__baca">Baca</span>
                    {/* <img src="/logo_keith.png" alt="Keith Chin Logo" className="icon__header"/> */}
                </a>
                {/* <select>
                    <option>All</option> 
                    {subforums.map(sub => 
                        <option key="sub.id">
                            {sub.title}
                        </option>
                    )}
                    
                </select> */}
                <div className="bc__left-sidebar__item">
                    <FaHome className="header__icon"/>
                    <h1 className="bc__left-sidebar__item__text">
                        Home
                    </h1>
                </div>
                <div className="bc__left-sidebar__item">
                    <CgNotifications size={'2rem'}  />
                    <span className="bc__left-sidebar__item__text">
                        Notifications
                    </span>  
                </div>
                <div className="bc__left-sidebar__item bc__left-sidebar__item--profile">
                    <ProfileDropdown />
                </div>
        </header>
    )
}

export default Header;