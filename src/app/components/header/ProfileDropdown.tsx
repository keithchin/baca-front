
import React, { FC } from 'react';
import { FaUser } from 'react-icons/fa';

const NavBar: FC = () => {
    return (
        <div className="header__icon">
            <FaUser style={{color: 'white'}}/>
        </div>
    )
}

export default NavBar;