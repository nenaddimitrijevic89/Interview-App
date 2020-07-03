import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ isHomePage }) => {
    return (
        <Navbar
            alignLinks="right"
            className={style.back}
            brand={isHomePage ? <a className="brand-logo" href="#">Interview App</a> : <a className="brand-logo" href="#">Interview Reports</a>}
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
        >{isHomePage ? <div className={style.nav}><Link to="/admin"><NavItem>Login</NavItem></Link>
            <Link to="admin/reports"><NavItem>Reports</NavItem></Link></div>
            : <div className={style.nav}><Link to="/admin"><NavItem>Create Report</NavItem></Link>
                <Link to="admin/reports"><NavItem>Logout</NavItem></Link></div>}
        </Navbar>
    )
}

export { Header };