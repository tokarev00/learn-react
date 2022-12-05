const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const initialState = {
    dialogs : [
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

    ],
    messages : [
        {
            id: 1,
            message: 'Hi',
        },
        {
            id: 2,
            message: 'How are you?',
        },
        {
            id: 3,
            message: 'yo?',
        },
    ],
    newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 1,
                message: state.newMessageBody,
            }
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        default: return state;
    }
}
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newBody: body,
});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export default dialogsReducer;