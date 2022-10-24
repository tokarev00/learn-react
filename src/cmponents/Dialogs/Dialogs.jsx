import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    let activeClassName = s.active;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink
                        to="/dialogs/1"
                        className={({ isActive }) => isActive ? activeClassName : undefined}
                    >
                        Dimych
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink
                        to="/dialogs/2"
                        className={({ isActive }) => isActive ? activeClassName : undefined}
                    >
                        Andrey
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink
                        to="/dialogs/3"
                        className={({ isActive }) => isActive ? activeClassName : undefined}
                    >
                        Sveta
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink
                        to="/dialogs/4"
                        className={({ isActive }) => isActive ? activeClassName : undefined}
                    >
                        Sasha
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink
                        to="/dialogs/5"
                        className={({ isActive }) => isActive ? activeClassName : undefined}
                    >
                        Viktor
                    </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    hi
                </div>
                <div className={s.message}>
                    how are you?
                </div>
                <div className={s.message}>
                    I'm fine!
                </div>
            </div>
        </div>
    );
}

export default Dialogs;