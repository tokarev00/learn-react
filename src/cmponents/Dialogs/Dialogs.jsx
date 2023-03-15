import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Textarea} from "../common/FormsControls/FormControls";
import {maxLength, requiredField} from "../../utils/validators/validators";
const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)

    let addNewMessage = values => {
        props.sendMessage(values.newMessageBody);
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
const maxLength30 = maxLength(30);

let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                component={Textarea}
                name="newMessageBody"
                placeholder="Enter your message"
                validate={[maxLength30, requiredField]}
                />
            </div>
            <div><button >Send</button></div>
        </form>
    )
}

AddMessageForm = reduxForm({form: 'dialogMessageForm'})(AddMessageForm)
export default Dialogs;