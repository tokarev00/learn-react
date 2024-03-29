import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
    _state: {
        profilePage: {
            posts :[
                {
                    id: 1,
                    message: 'Hi, How are you?',
                    likesCount: 12,
                },
                {
                    id: 2,
                    message: 'It\'s my first post',
                    likesCount: 22,
                },
            ],
            newPostText: 'newPostText',
        },
        dialogsPage : {
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
        },
        sidebar : {},
    },
    _callSubscriber(store) {
    console.log('state was changed!')
    },
    getState()  {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage , action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage , action);
        this._state.sidebar = sidebarReducer(this._state.sidebar , action);
        this._callSubscriber(this);
    }
}
export default store;