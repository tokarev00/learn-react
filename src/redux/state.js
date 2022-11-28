import {rerenderEntireTree} from './../render';
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
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state ,addPost);
}
export default state;