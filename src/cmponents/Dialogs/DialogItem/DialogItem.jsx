import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let activeClassName = s.active;
    let path = `/dialogs/${props.id}`;
    let isActive = ({ isActive }) => isActive ? activeClassName : undefined;
    return (
        <div className={s.dialog}>
            <NavLink
                to={path}
                className={isActive}
            >
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogItem;