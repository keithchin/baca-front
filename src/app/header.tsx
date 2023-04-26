
import React, { FC, useEffect, useRef } from 'react';
import ProfileDropdown from '../app/components/header/ProfileDropdown'
import { ISubforum } from './interfaces/subforum';

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
        <header id="header" className="header flex justify-between items-center">
                <a href="/" className="font-bold text-white">
                    <p>Baca</p>
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
                <ProfileDropdown />
        </header>
    )
}

export default Header;