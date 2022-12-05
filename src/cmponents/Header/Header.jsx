import s from './Header.module.css';
import React from "react";
const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="logo"/>
        </header>
    );
}
export default Header;