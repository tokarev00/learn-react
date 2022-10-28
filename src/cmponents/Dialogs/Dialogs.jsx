import s from './Dialogs.module.css';
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
const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               <DialogItem name="Dimych" id={1} />
               <DialogItem name="Andrey" id={2} />
               <DialogItem name="Viktor" id={3} />
               <DialogItem name="Sveta" id={4} />
               <DialogItem name="Valera" id={5} />
               <DialogItem name="Sasha" id={6} />
            </div>
            <div className={s.messages}>
                <Message message={'hi'}/>
                <Message message={'How are you'}/>
            </div>
        </div>
    );
}

export default Dialogs;