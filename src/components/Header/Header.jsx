import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


let Header = (props) => {
    return <header className={s.header}>
        <img
            src={'https://e7.pngegg.com/pngimages/197/457/png-clipart-round-multicolored-logo-vanamo-logo-icons-logos-emojis-tech-companies.png'}
            alt={'description'}
        />
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;