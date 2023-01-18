import s from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? <NavLink to={'/profile'}>{props.login}</NavLink> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}
export default Header;