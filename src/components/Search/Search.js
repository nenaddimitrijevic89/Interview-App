import React from 'react';
import style from './Search.module.css';

const Search = ({ search }) => {
    const searching = (event) => {
        const text = event.target.value;
        search(text)
    }
    return (
        <nav className={style.back}>
            <div className='nav-wrapper'>
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required onChange={searching}></input>
                        <label className="label-icon" htmlFor="search"><i className={`fa fa-search ${style.icon}`}></i></label>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export { Search };