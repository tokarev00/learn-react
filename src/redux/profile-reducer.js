const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const ADD_POST = 'ADD-POST';
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
    newPostText: 'newPostText',
    profile: null,
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0,
                }],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }

        default: return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export default profileReducer;
