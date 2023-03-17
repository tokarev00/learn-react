import s from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
const Header = (props) => {
    debugger
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div>
                        <NavLink to={'/profile'}>{props.login}</NavLink>
                        <button style={{
                            marginLeft: '20px',
                        }}
                        onClick={props.logout}
                        >logout</button>
                    </div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}
export default Header;