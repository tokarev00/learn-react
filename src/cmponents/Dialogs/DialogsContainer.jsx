
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import React from "react";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            store=>{
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = body => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs sendMessage={onSendMessageClick}
                            updateNewMessageBody={onNewMessageChange}
                            dialogs={store.getState().dialogsPage.dialogs}
                            messages={store.getState().dialogsPage.messages}
                            newMessageBody={store.getState().dialogsPage.newMessageBody}/>}
        }</StoreContext.Consumer>
        );
}

export default DialogsContainer;