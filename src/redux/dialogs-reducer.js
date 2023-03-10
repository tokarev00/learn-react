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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.body}],
            };
        default:
            return state;
    }
}
export const sendMessageCreator = (body) => ({type: SEND_MESSAGE, body});
export default dialogsReducer;