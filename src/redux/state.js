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
            ]
        }
    },
    _callSubscriber(store) {
    console.log('state was changed!')
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = '';
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}

export default store;