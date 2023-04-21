'use-client'

import React, { FC, useEffect, useRef } from 'react';
import NavBar from './components/nav/NavBar'

const Header: FC = () => {
    return (
        <header id="header" className="header">
            <div className="flex justify-between">
                <a href="/" className="font-bold text-white mt-4 ml-6 mr-6">
                    <p>Baca</p>
                    {/* <img src="/logo_keith.png" alt="Keith Chin Logo" className="icon__header"/> */}
                </a>
                <NavBar />
            </div>
        </header>
    )
}

export default Header;