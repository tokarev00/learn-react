let rerenderEntireTree = (state) => {
    console.log('state was changed!')
}
const state = {
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
}
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = '';
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}
export const subscribe =(observer) => {
    rerenderEntireTree = observer;
}
export default state;