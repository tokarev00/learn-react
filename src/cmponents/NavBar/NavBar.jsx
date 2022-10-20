import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
const NavBar = () => {
    let activeClassName = s.active;
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink
                    to={'/'}
                    end
                    className={({ isActive }) => isActive ? activeClassName : undefined}
                >
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to={'dialogs'}
                    className={({ isActive }) => isActive ? activeClassName : undefined}
                >
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to={'news'}
                    className={({ isActive }) => isActive ? activeClassName : undefined}
                >
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to={'music'}
                    className={({ isActive }) => isActive ? activeClassName : undefined}
                >
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to={'settings'}
                    className={({ isActive }) => isActive ? activeClassName : undefined}
                >
                    Settings
                </NavLink>
            </div>
        </nav>
    );
}
export default NavBar;