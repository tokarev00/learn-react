import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Field, reduxForm } from 'redux-form'
const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)

    let addNewMessage = values => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = '';
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
}

let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button >Send</button></div>
        </form>
    )
}

AddMessageForm = reduxForm({form: 'dialogMessageForm'})(AddMessageForm)
export default Dialogs;