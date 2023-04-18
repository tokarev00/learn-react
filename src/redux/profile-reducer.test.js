import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
test('length os posts should be incremented', () => {
    let action = addPostActionCreator('test');
    const initialState = {
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
        profileStatus: '',
        profile: null,
    }
    let newState = profileReducer(initialState, action);

    expect( newState.posts.length).toBe(3);
});

test('message os new post should be correct', () => {
    let action = addPostActionCreator('test');
    const initialState = {
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
        profileStatus: '',
        profile: null,
    }
    let newState = profileReducer(initialState, action);

    expect( newState.posts[2].message).toBe('test');
});
test('after deleting length of posts should be decremented', () => {
    let action = deletePost(1);
    const initialState = {
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
        profileStatus: '',
        profile: null,
    }
    let newState = profileReducer(initialState, action);

    expect( newState.posts.length).toBe(1);
});

test('after deleting length of posts should be changed if passed ID incorrect', () => {
    let action = deletePost(333);
    const initialState = {
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
        profileStatus: '',
        profile: null,
    }
    let newState = profileReducer(initialState, action);

    expect( newState.posts.length).toBe(2);
});