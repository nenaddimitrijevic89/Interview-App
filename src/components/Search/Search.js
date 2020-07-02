import React from 'react';
import { Navbar, Icon, NavItem, Container } from 'react-materialize';
import style from './Search.module.css';

const Search = ({ search }) => {
    const searching = (event) => {
        const text = event.target.value;
        search(text)
    }
    return (
        <Navbar
            className={style.back}
            // alignLinks="right"
            // brand={<a className="brand-logo" href="#">Logo</a>}
            // id="mobile-nav"
            // menuIcon={<Icon>menu</Icon>}
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
            search
            onChange={searching}
        >
        </Navbar>
    )
}

export { Search };