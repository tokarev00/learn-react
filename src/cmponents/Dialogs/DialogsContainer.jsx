
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import React from "react";
import Dialogs from "./Dialogs";
const DialogsContainer = (props) => {
    debugger;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = body => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (<Dialogs sendMessage={onSendMessageClick}
                     updateNewMessageBody={onNewMessageChange}
                     dialogs={props.store.getState().dialogsPage.dialogs}
                     messages={props.store.getState().dialogsPage.messages}
                     newMessageBody={props.store.getState().dialogsPage.newMessageBody}/>);
}

export default DialogsContainer;