
import { sendMessageCreator} from "../../redux/dialogs-reducer";
import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (body) => {dispatch(sendMessageCreator(body))}
    }
}


export default compose(
            connect(mapStateToProps, mapDispatchToProps),
            withAuthRedirect,)(Dialogs);