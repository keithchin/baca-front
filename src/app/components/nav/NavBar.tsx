'use-client'

import React, { FC } from 'react';
import type { NextPage } from 'next';

import NavBarItem from './NavBarItem';
import { arrayBuffer } from 'stream/consumers';

const navBarItems = [
    { name: 'Bio', url: '/bio' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: 'Contact', url: '#contact' },
    { name: 'Discography', url: '#disco' }
];

const NavBar: FC = () => {
    return (
        <>
            <ul className="navbar">
                {navBarItems.map(item =>
                    (<NavBarItem name={item.name} url={item.url} />)
                )}
            </ul>
        </>
    )
}

export default NavBar;