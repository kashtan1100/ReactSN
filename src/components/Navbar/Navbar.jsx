import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

let Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/users'} activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <a href="#">News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar