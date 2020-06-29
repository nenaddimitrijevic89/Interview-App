import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';
import style from './Header.module.css';

const Header = () => {
    return (
        <Navbar
            alignLinks="right"
            className={style.back}
            brand={<a className="brand-logo" href="#">Logo</a>}
            centerChildren
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <NavItem href="">
                Login
  </NavItem>
            <NavItem href="components.html">
                Reports
  </NavItem>
        </Navbar>
    )
}

export { Header };