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
    let dialogs = [
        {
            id: 1,
            name: 'Dimych',
        },
        {
            id: 2,
            name: 'Andrey',
        },
        {
            id: 3,
            name: 'Sasha',
        },
        {
            id: 4,
            name: 'Sveta',
        },
        {
            id: 5,
            name: 'Vladyslav',
        },
        {
            id: 6,
            name: 'Yurii',
        },

    ];
    let messages = [
        {
            id : 1,
            message: 'Hi',
        },
        {
            id : 2,
            message: 'How are you?',
        },
        {
            id : 3,
            message: 'yo?',
        },
    ];
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;